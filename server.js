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
        cartas: battle.listarCartasOnline()
    });

    socket.on("buscarPartida", () => {
        if (fila.includes(socket.id)) return;

        fila.push(socket.id);
        console.log("Entrou na fila:", socket.id);

        if (fila.length >= 2) {
            const player1Id = fila.shift();
            const player2Id = fila.shift();

            const salaId = "sala_" + Date.now();

            partidas[salaId] = {
                player1: player1Id,
                player2: player2Id,
                deck1: null,
                deck2: null,
                batalha: null,
                rematch: {
                    player1: false,
                    player2: false
                }
            };

            io.sockets.sockets.get(player1Id)?.join(salaId);
            io.sockets.sockets.get(player2Id)?.join(salaId);

            io.to(player1Id).emit("partidaEncontrada", {
                jogador: 1,
                salaId
            });

            io.to(player2Id).emit("partidaEncontrada", {
                jogador: 2,
                salaId
            });

            console.log("Partida criada:", salaId);
        }
    });

    socket.on("enviarDeck", (dados) => {
        const partida = partidas[dados.salaId];

        if (!partida) return;

        if (!Array.isArray(dados.deck) || dados.deck.length !== 3) {
            socket.emit("erroDeck", {
                mensagem: "Deck inválido. Escolha exatamente 3 cartas."
            });
            return;
        }

        const cartasUnicas = new Set(dados.deck);

        if (cartasUnicas.size < 3) {
            socket.emit("erroDeck", {
                mensagem: "Você não pode escolher cartas repetidas."
            });
            return;
        }

        if (dados.jogador === 1) {
            partida.deck1 = dados.deck;
        } else {
            partida.deck2 = dados.deck;
        }

        console.log("Deck recebido do Player", dados.jogador, dados.deck);

        if (partida.deck1 && partida.deck2) {
            partida.batalha = battle.criarPartida(
                partida.deck1,
                partida.deck2
            );

            io.to(dados.salaId).emit("partidaIniciada", {
                batalha: partida.batalha
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

        socket.to(salaId).emit("adversarioSaiu", {
            mensagem: "O adversário saiu da partida."
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
                partida.deck2
            );

            partida.rematch.player1 = false;
            partida.rematch.player2 = false;

            io.to(dados.salaId).emit("rematchIniciado", {
                batalha: partida.batalha
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
            socket.to(salaId).emit("adversarioSaiu", {
                mensagem: "O adversário saiu da partida."
            });

            delete partidas[salaId];

            console.log("Partida encerrada por desconexão:", salaId);
        }

        console.log("Jogador saiu:", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});