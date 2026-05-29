const onlineSocket = io();

let batalhaOnlineAtual = null;
let minhaSalaOnline = null;
let meuPlayerOnline = null;

onlineSocket.on("connect", () => {
    console.log("ACB Online conectado:", onlineSocket.id);
});

function acbOnlineLog(texto) {
    console.log("[ACB Online]", texto);
}

window.acbOnlineFindMatch = function () {
    acbOnlineLog("Buscando partida pelo HTML original...");
    onlineSocket.emit("buscarPartida");
};

window.acbOnlineLeaveMatch = function () {
    const salaParaSair = minhaSalaOnline;

    if (salaParaSair) {
        onlineSocket.emit("sairPartida", {
            salaId: salaParaSair
        });
    }

    minhaSalaOnline = null;
    meuPlayerOnline = null;
    batalhaOnlineAtual = null;

    document.body.classList.remove("online-battle-active");

    if (window.acbShowOnlineLobby) {
        window.acbShowOnlineLobby();
    }

    if (typeof gameModeView !== "undefined") {
        gameModeView = "online";
    }

    if (typeof applyGameModeView === "function") {
        applyGameModeView(true);
    }

    console.log("[ACB Online] Você saiu da partida.");
};

window.acbOnlineRequestRematch = function () {
    if (!minhaSalaOnline || !meuPlayerOnline) {
        acbOnlineLog("Rematch indisponível.");
        return;
    }

    onlineSocket.emit("pedirRematch", {
        salaId: minhaSalaOnline,
        jogador: meuPlayerOnline
    });

    acbOnlineLog("Rematch solicitado.");
};

onlineSocket.on("partidaEncontrada", (dados) => {
    minhaSalaOnline = dados.salaId;
    meuPlayerOnline = dados.jogador;

    if (!window.acbGetOnlineDeck) {
        acbOnlineLog("Função acbGetOnlineDeck não encontrada.");
        return;
    }

    const deck = window.acbGetOnlineDeck();

    acbOnlineLog("Deck online enviado: " + deck.join(", "));

    onlineSocket.emit("enviarDeck", {
        salaId: minhaSalaOnline,
        jogador: meuPlayerOnline,
        deck
    });
});

onlineSocket.on("partidaIniciada", (dados) => {
    batalhaOnlineAtual = dados.batalha;

    acbOnlineLog("Batalha online carregada.");

    if (window.acbRenderOnlineBattle) {
        window.acbRenderOnlineBattle(
            batalhaOnlineAtual,
            minhaSalaOnline,
            meuPlayerOnline,
            onlineSocket
        );
    }
});

onlineSocket.on("estadoAtualizado", (dados) => {
    batalhaOnlineAtual = dados.batalha;

    if (window.acbRenderOnlineBattle) {
        window.acbRenderOnlineBattle(
            batalhaOnlineAtual,
            minhaSalaOnline,
            meuPlayerOnline,
            onlineSocket,
            dados.resultado
        );
    }
});

onlineSocket.on("adversarioSaiu", (dados) => {
    acbOnlineLog(dados.mensagem || "O adversário saiu da partida.");

    minhaSalaOnline = null;
    meuPlayerOnline = null;
    batalhaOnlineAtual = null;

    if (window.acbShowOnlineLobby) {
        window.acbShowOnlineLobby();
    }
});

onlineSocket.on("rematchAguardando", () => {
    acbOnlineLog("Aguardando o outro jogador aceitar o rematch...");
});

onlineSocket.on("rematchIniciado", (dados) => {
    batalhaOnlineAtual = dados.batalha;

    acbOnlineLog("Rematch iniciado.");

    if (window.acbRenderOnlineBattle) {
        window.acbRenderOnlineBattle(
            batalhaOnlineAtual,
            minhaSalaOnline,
            meuPlayerOnline,
            onlineSocket
        );
    }
});

onlineSocket.on("erroDeck", (dados) => {
    acbOnlineLog(dados.mensagem || "Erro ao enviar deck.");
});