const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const battle = require("./battle");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let fila = [];
let partidas = {};
let perfisOnline = {};
let perfisRecentes = {};
const PERFIS_RECENTES_TTL_MS = 10 * 60 * 1000;

function normalizarNomeJogador(nome, fallback) {
    if (typeof nome !== "string") return fallback;

    const limpo = nome.trim().slice(0, 24);

    return limpo || fallback;
}


function normalizarTextoSeguro(valor, fallback = "") {
    if (typeof valor !== "string") return fallback;
    return valor.trim().slice(0, 180);
}

function normalizarNumero(valor) {
    const n = Number(valor);
    return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
}

function extrairTextoOuImagem(valor, fallback = "") {
    if (typeof valor === "string") return normalizarTextoSeguro(valor, fallback);

    if (valor && typeof valor === "object") {
        return normalizarTextoSeguro(
            valor.img || valor.url || valor.src || valor.href || valor.id || valor.name,
            fallback
        );
    }

    return fallback;
}

function extrairCartaFavoritaId(perfil = {}) {
    const carta = perfil.favoriteCard || perfil.favCard || perfil.cartaFavorita;

    if (carta && typeof carta === "object") {
        return normalizarTextoSeguro(carta.id || carta.cardId || carta.name, "");
    }

    return normalizarTextoSeguro(
        perfil.cartaFavorita || perfil.favoriteCardId || perfil.favCardId || perfil.favoriteCard,
        ""
    );
}

function extrairCartaFavoritaNome(perfil = {}) {
    const carta = perfil.favoriteCard || perfil.favCard || perfil.cartaFavorita;

    if (carta && typeof carta === "object") {
        return normalizarTextoSeguro(carta.name || carta.nome || carta.id, "");
    }

    return normalizarTextoSeguro(
        perfil.cartaFavoritaNome || perfil.favoriteCardName || perfil.favCardName,
        ""
    );
}

function criarChavePerfil(perfil = {}) {
    const nome = String(perfil.nome || "").trim().toLowerCase();
    const avatar = String(perfil.avatar || "").trim();
    const banner = String(perfil.banner || "").trim();
    const carta = String(perfil.cartaFavorita || perfil.cartaFavoritaNome || "").trim();

    return [nome, avatar, banner, carta].join("|");
}

function perfisSaoMesmoJogador(a = {}, b = {}) {
    if (!a || !b) return false;

    if (a.id && b.id && a.id === b.id) return true;

    const chaveA = criarChavePerfil(a);
    const chaveB = criarChavePerfil(b);

    return !!chaveA && chaveA === chaveB;
}

function limparPerfisRecentes() {
    const agora = Date.now();

    for (const id in perfisRecentes) {
        const perfil = perfisRecentes[id];

        if (!perfil || !perfil.atualizadoEm || agora - perfil.atualizadoEm > PERFIS_RECENTES_TTL_MS) {
            delete perfisRecentes[id];
        }
    }
}

setInterval(limparPerfisRecentes, PERFIS_RECENTES_TTL_MS).unref?.();

function normalizarPerfilOnline(socket, dados = {}) {
    const perfil = dados.perfil && typeof dados.perfil === "object" ? dados.perfil : dados;

    const nome = normalizarNomeJogador(
        perfil.nome || perfil.name || dados.nome || dados.playerName || dados.name || socket?.data?.playerName,
        "Jogador " + socket.id.slice(0, 4)
    );

    return {
        id: socket.id,
        nome,
        avatar: extrairTextoOuImagem(perfil.avatar || perfil.avatarUrl || perfil.profileAvatar, ""),
        banner: extrairTextoOuImagem(perfil.banner || perfil.bannerUrl || perfil.profileBanner, ""),
        cartaFavorita: extrairCartaFavoritaId(perfil),
        cartaFavoritaNome: extrairCartaFavoritaNome(perfil),
        modoOndas: {
            ondaMax: normalizarNumero(perfil.modoOndas?.ondaMax ?? perfil.waveMax ?? perfil.maxWave ?? perfil.ondaMax),
            vitorias: normalizarNumero(perfil.modoOndas?.vitorias ?? perfil.waveWins ?? perfil.vitoriasOndas),
            derrotas: normalizarNumero(perfil.modoOndas?.derrotas ?? perfil.waveLosses ?? perfil.derrotasOndas),
            tempoJogado: normalizarNumero(perfil.modoOndas?.tempoJogado ?? perfil.playTime ?? perfil.tempoJogado)
        },
        online: {
            vitorias: normalizarNumero(perfil.online?.vitorias ?? perfil.onlineWins ?? perfil.vitoriasOnline),
            derrotas: normalizarNumero(perfil.online?.derrotas ?? perfil.onlineLosses ?? perfil.derrotasOnline)
        },
        atualizadoEm: Date.now()
    };
}

function registrarPerfilSocket(socket, dados = {}) {
    const perfil = normalizarPerfilOnline(socket, dados);
    socket.data.playerName = perfil.nome;
    socket.data.perfilOnline = perfil;
    perfisOnline[socket.id] = perfil;
    perfisRecentes[socket.id] = {
        ...perfil,
        onlineAgora: true,
        atualizadoEm: Date.now()
    };
    return perfil;
}

function perfilDoSocketId(socketId, fallbackNome) {
    const socketEncontrado = io.sockets.sockets.get(socketId);

    if (socketEncontrado?.data?.perfilOnline) {
        return socketEncontrado.data.perfilOnline;
    }

    if (perfisOnline[socketId]) {
        return perfisOnline[socketId];
    }

    return {
        id: socketId,
        nome: normalizarNomeJogador(fallbackNome, "Jogador"),
        avatar: "",
        banner: "",
        cartaFavorita: "",
        cartaFavoritaNome: "",
        modoOndas: { ondaMax: 0, vitorias: 0, derrotas: 0, tempoJogado: 0 },
        online: { vitorias: 0, derrotas: 0 },
        atualizadoEm: Date.now()
    };
}

function listarPerfisParaBusca(socket, termo = "") {
    limparPerfisRecentes();

    const busca = String(termo || "").trim().toLowerCase();
    const meuPerfil = socket.data.perfilOnline || perfisOnline[socket.id] || null;
    const combinados = new Map();

    for (const perfil of Object.values(perfisRecentes)) {
        if (perfil && perfil.id) {
            combinados.set(perfil.id, { ...perfil, onlineAgora: !!perfisOnline[perfil.id] });
        }
    }

    for (const perfil of Object.values(perfisOnline)) {
        if (perfil && perfil.id) {
            combinados.set(perfil.id, { ...perfil, onlineAgora: true });
        }
    }

    return Array.from(combinados.values())
        .filter(perfil => perfil && perfil.id !== socket.id)
        .filter(perfil => !meuPerfil || !perfisSaoMesmoJogador(perfil, meuPerfil))
        .filter(perfil => !busca || String(perfil.nome || "").toLowerCase().includes(busca))
        .sort((a, b) => {
            if (!!b.onlineAgora !== !!a.onlineAgora) return Number(!!b.onlineAgora) - Number(!!a.onlineAgora);
            return (b.atualizadoEm || 0) - (a.atualizadoEm || 0);
        })
        .slice(0, 24);
}


function getCartasOnlineDisponiveis() {
    const lista = battle.listarCartasOnline();

    if (Array.isArray(lista)) return lista;

    if (lista && typeof lista === "object") return Object.values(lista);

    return [];
}

function getCartaOnlinePorId(id) {
    return getCartasOnlineDisponiveis().find(carta => carta && carta.id === id);
}

function cartaBloqueadaNoOnline(id) {
    const carta = getCartaOnlinePorId(id);

    if (!carta) return true;

    // Regra oficial atual: cartas EX são bloqueadas no Online.
    // Não bloqueamos apenas por rarity "Exclusiva", pois algumas recompensas/transformações usam essa raridade.
    return !!carta.exTier;
}

function validarDeckOnline(deck) {
    if (!Array.isArray(deck) || deck.length !== 3) {
        return "Deck inválido. Escolha exatamente 3 cartas.";
    }

    const cartasUnicas = new Set(deck);

    if (cartasUnicas.size < 3) {
        return "Você não pode escolher cartas repetidas.";
    }

    const cartaInexistente = deck.find(id => !getCartaOnlinePorId(id));

    if (cartaInexistente) {
        return "Deck inválido. Uma das cartas não existe no Online.";
    }

    const cartaEx = deck.find(id => cartaBloqueadaNoOnline(id));

    if (cartaEx) {
        const carta = getCartaOnlinePorId(cartaEx);
        return "Cartas EX não podem ser usadas no modo Online.";
    }

    return null;
}

function listarCartasPermitidasNoOnline() {
    return getCartasOnlineDisponiveis().filter(carta => carta && !carta.exTier);
}

function encontrarSalaDoJogador(socketId) {
    for (const salaId in partidas) {
        const partida = partidas[salaId];

        if (partida.player1 === socketId || partida.player2 === socketId) {
            return salaId;
        }
    }

    return null;
}

io.on("connection", (socket) => {
    console.log("Jogador conectado:", socket.id);

    socket.emit("listaCartas", {
        cartas: listarCartasPermitidasNoOnline()
    });


    socket.on("registrarPerfil", (dados = {}) => {
        const perfil = registrarPerfilSocket(socket, dados);
        socket.emit("perfilRegistrado", { perfil });
    });

    socket.on("atualizarPerfil", (dados = {}) => {
        const perfil = registrarPerfilSocket(socket, dados);
        socket.emit("perfilRegistrado", { perfil });
    });

    socket.on("buscarJogadores", (dados = {}) => {
        const termo = dados.termo || dados.busca || dados.nome || "";
        socket.emit("listaJogadores", {
            jogadores: listarPerfisParaBusca(socket, termo)
        });
    });

    socket.on("procurarJogadores", (dados = {}) => {
        const termo = dados.termo || dados.busca || dados.nome || "";
        socket.emit("listaJogadores", {
            jogadores: listarPerfisParaBusca(socket, termo)
        });
    });

    socket.on("pedirPerfilJogador", (dados = {}) => {
        limparPerfisRecentes();

        const alvoId = dados.id || dados.socketId || dados.playerId;
        const perfil = alvoId ? (perfisOnline[alvoId] || perfisRecentes[alvoId]) : null;

        if (perfil && perfil.id !== socket.id) {
            socket.emit("perfilJogador", {
                perfil: {
                    ...perfil,
                    onlineAgora: !!perfisOnline[perfil.id]
                }
            });
            return;
        }

        socket.emit("perfilJogador", {
            perfil: null
        });
    });

    socket.on("buscarPartida", (dados = {}) => {
        registrarPerfilSocket(socket, dados);
        socket.data.playerName = normalizarNomeJogador(
            dados.nome || dados.playerName || dados.name || dados.perfil?.nome || dados.perfil?.name,
            socket.data.playerName || "Jogador " + socket.id.slice(0, 4)
        );

        if (fila.includes(socket.id)) return;

        fila.push(socket.id);
        console.log("Entrou na fila:", socket.id);

        if (fila.length >= 2) {
            const player1Id = fila.shift();
            const player2Id = fila.shift();

            const salaId = "sala_" + Date.now();

            const player1Socket = io.sockets.sockets.get(player1Id);
            const player2Socket = io.sockets.sockets.get(player2Id);

            partidas[salaId] = {
                player1: player1Id,
                player2: player2Id,
                player1Name: normalizarNomeJogador(player1Socket?.data?.playerName, "Player 1"),
                player2Name: normalizarNomeJogador(player2Socket?.data?.playerName, "Player 2"),
                player1Perfil: perfilDoSocketId(player1Id, normalizarNomeJogador(player1Socket?.data?.playerName, "Player 1")),
                player2Perfil: perfilDoSocketId(player2Id, normalizarNomeJogador(player2Socket?.data?.playerName, "Player 2")),
                deck1: null,
                deck2: null,
                batalha: null,
                rematch: {
                    player1: false,
                    player2: false
                }
            };

            player1Socket?.join(salaId);
            player2Socket?.join(salaId);

            io.to(player1Id).emit("partidaEncontrada", {
                jogador: 1,
                salaId,
                meuNome: partidas[salaId].player1Name,
                adversarioNome: partidas[salaId].player2Name,
                meuPerfil: partidas[salaId].player1Perfil,
                adversarioPerfil: partidas[salaId].player2Perfil
            });

            io.to(player2Id).emit("partidaEncontrada", {
                jogador: 2,
                salaId,
                meuNome: partidas[salaId].player2Name,
                adversarioNome: partidas[salaId].player1Name,
                meuPerfil: partidas[salaId].player2Perfil,
                adversarioPerfil: partidas[salaId].player1Perfil
            });

            console.log("Partida criada:", salaId);
        }
    });

    socket.on("enviarDeck", (dados) => {
        const partida = partidas[dados.salaId];

        if (!partida) return;

        const erroDeck = validarDeckOnline(dados.deck);

        if (erroDeck) {
            socket.emit("erroDeck", {
                mensagem: erroDeck
            });
            return;
        }

        const perfilAtualizado = registrarPerfilSocket(socket, dados);

        if (dados.jogador === 1) {
            partida.deck1 = dados.deck;
            partida.player1Name = normalizarNomeJogador(
                dados.nome || dados.playerName || dados.name || dados.perfil?.nome || dados.perfil?.name,
                perfilAtualizado.nome || partida.player1Name || "Player 1"
            );
            partida.player1Perfil = perfilAtualizado;
        } else {
            partida.deck2 = dados.deck;
            partida.player2Name = normalizarNomeJogador(
                dados.nome || dados.playerName || dados.name || dados.perfil?.nome || dados.perfil?.name,
                perfilAtualizado.nome || partida.player2Name || "Player 2"
            );
            partida.player2Perfil = perfilAtualizado;
        }

        console.log("Deck recebido do Player", dados.jogador, dados.deck);

        if (partida.deck1 && partida.deck2) {
            partida.batalha = battle.criarPartida(
                partida.deck1,
                partida.deck2,
                {
                    player1Name: partida.player1Name,
                    player2Name: partida.player2Name
                }
            );

            io.to(dados.salaId).emit("partidaIniciada", {
                batalha: partida.batalha,
                player1Name: partida.player1Name,
                player2Name: partida.player2Name,
                player1Perfil: partida.player1Perfil,
                player2Perfil: partida.player2Perfil
            });

            console.log("Todos os decks prontos. Batalha iniciada.");
        }
    });

    socket.on("usarSkill", (dados) => {
        const partida = partidas[dados.salaId];

        if (!partida || !partida.batalha) return;

        const resultado = battle.usarSkill(
            partida.batalha,
            dados.jogador,
            dados.skill
        );

        io.to(dados.salaId).emit("estadoAtualizado", {
            batalha: partida.batalha,
            resultado
        });

        console.log("Ação recebida:", resultado);
    });

    socket.on("trocarCarta", (dados) => {
        const partida = partidas[dados.salaId];

        if (!partida || !partida.batalha) return;

        const resultado = battle.trocarCarta(
            partida.batalha,
            dados.jogador,
            dados.indice
        );

        io.to(dados.salaId).emit("estadoAtualizado", {
            batalha: partida.batalha,
            resultado
        });

        console.log("Troca recebida:", resultado);
    });

    socket.on("sairPartida", (dados) => {
        const salaId = dados.salaId;
        const partida = partidas[salaId];

        if (!partida) return;

        const jogadorQueSaiu = partida.player1 === socket.id ? 1 : 2;
        const vencedorPorAbandono = jogadorQueSaiu === 1 ? 2 : 1;
        const nomeQueSaiu = jogadorQueSaiu === 1 ? partida.player1Name : partida.player2Name;

        socket.to(salaId).emit("adversarioSaiu", {
            mensagem: nomeQueSaiu + " saiu da partida.",
            vencedor: vencedorPorAbandono,
            abandono: true,
            nomeQueSaiu
        });

        socket.leave(salaId);

        delete partidas[salaId];

        console.log("Partida encerrada manualmente:", salaId);
    });

    socket.on("pedirRematch", (dados) => {
        const partida = partidas[dados.salaId];

        if (!partida) return;

        if (dados.jogador === 1) {
            partida.rematch.player1 = true;
        } else {
            partida.rematch.player2 = true;
        }

        if (partida.rematch.player1 && partida.rematch.player2) {
            partida.batalha = battle.criarPartida(
                partida.deck1,
                partida.deck2,
                {
                    player1Name: partida.player1Name,
                    player2Name: partida.player2Name
                }
            );

            partida.rematch.player1 = false;
            partida.rematch.player2 = false;

            io.to(dados.salaId).emit("rematchIniciado", {
                batalha: partida.batalha,
                player1Name: partida.player1Name,
                player2Name: partida.player2Name,
                player1Perfil: partida.player1Perfil,
                player2Perfil: partida.player2Perfil
            });

            console.log("Rematch iniciado:", dados.salaId);
        } else {
            socket.emit("rematchAguardando");
        }
    });

    socket.on("disconnect", () => {
        fila = fila.filter(id => id !== socket.id);

        const salaId = encontrarSalaDoJogador(socket.id);

        if (salaId) {
            const partida = partidas[salaId];
            const jogadorQueSaiu = partida.player1 === socket.id ? 1 : 2;
            const vencedorPorAbandono = jogadorQueSaiu === 1 ? 2 : 1;
            const nomeQueSaiu = jogadorQueSaiu === 1 ? partida.player1Name : partida.player2Name;

            socket.to(salaId).emit("adversarioSaiu", {
                mensagem: nomeQueSaiu + " saiu da partida.",
                vencedor: vencedorPorAbandono,
                abandono: true,
                nomeQueSaiu
            });

            delete partidas[salaId];

            console.log("Partida encerrada por desconexão:", salaId);
        }

        if (perfisOnline[socket.id]) {
            perfisRecentes[socket.id] = {
                ...perfisOnline[socket.id],
                onlineAgora: false,
                atualizadoEm: Date.now()
            };
        }

        delete perfisOnline[socket.id];

        console.log("Jogador saiu:", socket.id);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});