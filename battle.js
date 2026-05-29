const cards = {
    luffy: {
        id: "luffy",
        name: "Monkey D. Luffy",
        rarity: "Comum",
        hp: 5350,
        atk: 245,
        def: 190,
        spd: 120,
        skills: [
            { id: "l_pistol", name: "Pistol", kind: "atk", power: 370, cooldown: 0 },
            { id: "l_bazooka", name: "Bazooka", kind: "atk", power: 455, cooldown: 1 },
            { id: "l_bullet", name: "Bullet", kind: "bigAtk", power: 820, cooldown: 4 },
            { id: "l_buff", name: "Rei dos Piratas!", kind: "buffAtk", atkUp: 75, turns: 3, cooldown: 5 }
        ]
    },

    naruto: {
        id: "naruto",
        name: "Naruto Uzumaki",
        rarity: "Comum",
        hp: 5250,
        atk: 225,
        def: 198,
        spd: 129,
        skills: [
            { id: "n_kunai", name: "Kunai", kind: "atk", power: 325, cooldown: 0 },
            { id: "n_clones", name: "Clone das Sombras", kind: "guard", cooldown: 5 },
            { id: "n_rasen", name: "Rasengan", kind: "bigAtk", power: 940, cooldown: 4 },
            { id: "n_barrage", name: "Barragem", kind: "bigAtk", power: 1220, cooldown: 7 }
        ]
    },

    sasuke: {
        id: "sasuke",
        name: "Sasuke Uchiha",
        rarity: "Incomum",
        hp: 5300,
        atk: 250,
        def: 205,
        spd: 127,
        skills: [
            { id: "s_corte", name: "Corte Rápido", kind: "atk", power: 323, cooldown: 0 },
            { id: "s_sharingan", name: "Sharingan", kind: "buffAtkSpd", atkUp: 65, cooldown: 6 },
            { id: "s_phoenix", name: "Estilo Fogo: Técnica Flor de Fênix", kind: "fire", power: 446, cooldown: 3, burn: { chance: 0.45, dmg: 75, turns: 2 } },
            { id: "s_fire", name: "Bola de Fogo", kind: "fire", power: 608, cooldown: 4, burn: { chance: 0.60, dmg: 105, turns: 3 } },
            { id: "s_gen", name: "Genjutsu", kind: "stun", cooldown: 7, stunTurns: 1 },
            { id: "s_chidori", name: "Chidori", kind: "bigAtk", power: 1254, cooldown: 8 }
        ]
    },

    sakura: {
        id: "sakura",
        name: "Sakura Haruno",
        rarity: "Comum",
        hp: 5550,
        atk: 170,
        def: 248,
        spd: 108,
        skills: [
            { id: "sk_hit", name: "Golpe Preciso", kind: "atk", power: 290, cooldown: 0 },
            { id: "sk_guard", name: "Aprendiz da Tsunade", kind: "buffDef", defUp: 70, turns: 3, cooldown: 5 },
            { id: "sk_heal", name: "Ninjutsu Médico", kind: "heal", heal: 420, cooldown: 6 },
            { id: "sk_hot", name: "Recuperação", kind: "heal", heal: 650, cooldown: 7 }
        ]
    },

    kakashi: {
        id: "kakashi",
        name: "Kakashi Hatake",
        rarity: "Raro",
        hp: 5750,
        atk: 280,
        def: 228,
        spd: 132,
        skills: [
            { id: "kk_kunai", name: "Corte de Kunai", kind: "atk", power: 370, cooldown: 0 },
            { id: "kk_water", name: "Dragão de Água", kind: "bigAtk", power: 1120, cooldown: 5 },
            { id: "kk_share", name: "Sharingan", kind: "buffAtkDef", atkUp: 75, defUp: 55, turns: 3, cooldown: 7 },
            { id: "kk_raikiri", name: "Raikiri", kind: "bigAtk", power: 1500, cooldown: 8 }
        ]
    },

    zoro: {
        id: "zoro",
        name: "Roronoa Zoro",
        rarity: "Comum",
        hp: 5450,
        atk: 285,
        def: 210,
        spd: 118,
        skills: [
            { id: "z_atk1", name: "Corte Duplo", kind: "atk", power: 410, cooldown: 0 },
            { id: "z_atk2", name: "Investida", kind: "atk", power: 440, cooldown: 0 },
            { id: "z_buff", name: "Foco Santoryu", kind: "buffAtk", atkUp: 90, turns: 3, cooldown: 5 },
            { id: "z_sp1", name: "Oni Giri", kind: "bigAtk", power: 1150, cooldown: 7 }
        ]
    },

nobara: {
    id: "nobara",
    name: "Nobara Kugisaki",
    rarity: "Raro",
    hp: 6000,
    atk: 315,
    def: 230,
    spd: 132,
    skills: [
        { id: "nb_martelo", name: "Martelada com pregos", kind: "bleedAtk", power: 500, cooldown: 1, bleed: { chance: 0.22, dmg: 85, turns: 2 } },
        { id: "nb_hairpin", name: "Hairpin", kind: "bleedAtk", power: 430, cooldown: 3, bleed: { chance: 0.48, dmg: 110, turns: 3 } },
        { id: "nb_boneco", name: "Técnica Amaldiçoada: Boneco de Palha", kind: "bleedAtk", power: 1050, cooldown: 4, bleed: { chance: 0.55, dmg: 130, turns: 3 } },
        { id: "nb_res", name: "Ressonância", kind: "bigAtk", power: 1580, cooldown: 6 },
        { id: "nb_autores", name: "Autoressonância", kind: "bleedAtk", power: 1320, cooldown: 7, bleed: { chance: 1, dmg: 190, turns: 3 }, recoil: { mode: "hpPct", value: 0.08 } }
    ]
},

neji: {
    id: "neji",
    name: "Neji Hyuuga",
    rarity: "Incomum",
    hp: 5400,
    atk: 258,
    def: 245,
    spd: 134,
    skills: [
        { id: "nj_gentle", name: "Punho Suave", kind: "atk", power: 455, cooldown: 1 },
        { id: "nj_byakugan", name: "Byakugan", kind: "buffDef", defUp: 82, turns: 4, cooldown: 6 },
        { id: "nj_rotation", name: "Oito Trigramas: Palma Rotativa", kind: "bigAtk", power: 1040, cooldown: 5 },
        { id: "nj_64", name: "Oito Trigramas: Sessenta e Quatro Palmas", kind: "bigAtk", power: 1550, cooldown: 8 }
    ]
},

deku: {
    id: "deku",
    name: "Izuku Midoriya",
    rarity: "Comum",
    hp: 5250,
    atk: 222,
    def: 202,
    spd: 123,
    skills: [
        { id: "d_shoot", name: "Shoot Style", kind: "atk", power: 340, cooldown: 0, recoil: { mode: "flat", value: 55 } },
	{ id: "d_del", name: "Delaware Smash", kind: "atk", power: 580, cooldown: 2, recoil: { mode: "flat", value: 90 } },
	{ id: "d_det", name: "Detroit Smash", kind: "bigAtk", power: 1060, cooldown: 5, recoil: { mode: "flat", value: 150 } },
        { id: "d_buff", name: "Herói Número 1", kind: "buffAtk", atkUp: 68, turns: 3, cooldown: 7 }
    ]
},

asta: {
    id: "asta",
    name: "Asta",
    rarity: "Incomum",
    hp: 5900,
    atk: 268,
    def: 225,
    spd: 121,
    skills: [
        { id: "a_thrust", name: "Corte de Espada", kind: "atk", power: 560, cooldown: 0 },
        { id: "a_slash", name: "Corte Anti-Magia", kind: "atk", power: 760, cooldown: 2 },
        { id: "a_buff", name: "Rei Mago!", kind: "buffAtk", atkUp: 100, turns: 3, cooldown: 7 },
        { id: "a_break", name: "Estocada do Touro", kind: "bigAtk", power: 1180, cooldown: 6 }
    ]
},

itadori: {
    id: "itadori",
    name: "Itadori Yuji",
    rarity: "Raro",
    hp: 6250,
    atk: 302,
    def: 242,
    spd: 128,
    skills: [
        { id: "y_soco", name: "Soco", kind: "atkCrit", power: 520, cooldown: 0, crit: { chance: 0.20, bonus: 360 } },
        { id: "y_combo", name: "Socos Consecutivos", kind: "atk", power: 780, cooldown: 2 },
        { id: "y_div", name: "Punho Divergente", kind: "bigAtk", power: 1260, cooldown: 5 },
        { id: "y_buff", name: "Receptáculo do Sukuna", kind: "buffAtk", atkUp: 95, turns: 3, cooldown: 7 }
    ]
}
};

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function criarCarta(id) {
    const base = cards[id];

    if (!base) {
        throw new Error("Carta não encontrada no battle.js: " + id);
    }

    if (base.exTier) {
        throw new Error("Cartas EX não são permitidas no online inicial: " + id);
    }

    return {
        id: base.id,
        name: base.name,
        rarity: base.rarity,
        hpMax: base.hp,
        hp: base.hp,
        baseAtk: base.atk,
        atk: base.atk,
        baseDef: base.def,
        def: base.def,
        spd: base.spd || 100,
        ativa: true,
        cooldowns: {},
        effects: [],
        skills: clone(base.skills)
    };
}

function criarPartida(deck1, deck2) {
    return {
        turno: 1,
        finalizada: false,
        vencedor: null,
        player1: {
            deck: deck1.map(criarCarta),
            ativa: 0
        },
        player2: {
            deck: deck2.map(criarCarta),
            ativa: 0
        }
    };
}

function cartaAtual(partida, player) {
    return partida["player" + player].deck[partida["player" + player].ativa];
}

function inimigoDe(jogador) {
    return jogador === 1 ? 2 : 1;
}

function calcularDano(atacante, defensor, skill) {
    const poder = skill.power || 0;

    let dano = Math.floor(
        poder +
        atacante.atk * 0.35 -
        defensor.def * 0.30
    );

    if (temEfeito(defensor, "guard")) {
    dano = Math.floor(dano * 0.70);
    removerEfeito(defensor, "guard");
}

    return Math.max(0, dano);
}

function tickCooldowns(carta) {
    for (const id in carta.cooldowns) {
        if (carta.cooldowns[id] > 0) {
            carta.cooldowns[id]--;
        }
    }
}


function verificarDerrota(partida) {
    const vivosP1 = partida.player1.deck.some(c => c.hp > 0);
    const vivosP2 = partida.player2.deck.some(c => c.hp > 0);

    if (!vivosP1) {
        partida.finalizada = true;
        partida.vencedor = 2;
    }

    if (!vivosP2) {
        partida.finalizada = true;
        partida.vencedor = 1;
    }
}

function passarParaProximaCartaViva(partida, player) {
    const p = partida["player" + player];

    if (p.deck[p.ativa].hp > 0) return;

    const nova = p.deck.findIndex(c => c.hp > 0);

    if (nova !== -1) {
        p.ativa = nova;
    }
}

function adicionarEfeito(carta, efeito) {
    const existente = carta.effects.find(e => e.type === efeito.type);

    if (existente) {
        existente.turns = Math.max(existente.turns || 0, efeito.turns || 0);

        if (efeito.amount) existente.amount = efeito.amount;
        if (efeito.dmg) existente.dmg = efeito.dmg;
    } else {
        carta.effects.push({ ...efeito });
    }

    recalcularStats(carta);
}

function temEfeito(carta, tipo) {
    return carta.effects.some(e => e.type === tipo);
}

function pegarEfeito(carta, tipo) {
    return carta.effects.find(e => e.type === tipo);
}

function removerEfeito(carta, tipo) {
    carta.effects = carta.effects.filter(e => e.type !== tipo);
    recalcularStats(carta);
}

function recalcularStats(carta) {
    carta.atk = carta.baseAtk;
    carta.def = carta.baseDef;

    for (const efeito of carta.effects) {
        if (efeito.type === "atkBuff") {
            carta.atk += efeito.amount || 0;
        }

        if (efeito.type === "defBuff") {
            carta.def += efeito.amount || 0;
        }

        if (efeito.type === "atkDefBuff") {
            carta.atk += efeito.atkUp || 0;
            carta.def += efeito.defUp || 0;
        }
    }
}

function processarInicioTurno(carta) {
    let mensagens = [];

    const burn = pegarEfeito(carta, "burn");

    if (burn) {
        carta.hp = Math.max(0, carta.hp - burn.dmg);

        mensagens.push(
            carta.name + " sofreu " + burn.dmg + " de queimadura."
        );
    }

    const bleed = pegarEfeito(carta, "bleed");

    if (bleed) {
        carta.hp = Math.max(0, carta.hp - bleed.dmg);

        mensagens.push(
            carta.name + " sofreu " + bleed.dmg + " de sangramento."
        );
    }

    return mensagens;
}

function processarFimTurno(carta) {
    for (const efeito of carta.effects) {
        if (efeito.turns !== undefined) {
            efeito.turns--;
        }
    }

    carta.effects = carta.effects.filter(e => {
        if (e.turns === undefined) return true;
        return e.turns > 0;
    });

    recalcularStats(carta);
}
function usarSkill(partida, jogador, skillId) {
    if (partida.finalizada) {
        return { erro: "A partida já acabou." };
    }

    if (partida.turno !== jogador) {
        return { erro: "Não é seu turno." };
    }

    const atacante = cartaAtual(partida, jogador);
    const defensor = cartaAtual(partida, inimigoDe(jogador));

    if (atacante.hp <= 0) {
        return { erro: "Sua carta ativa está derrotada." };
    }

    if (temEfeito(atacante, "stun")) {
    removerEfeito(atacante, "stun");

    partida.turno = inimigoDe(jogador);

    return {
        sucesso: true,
        tipo: "stun_skip",
        mensagem: atacante.name + " está paralisado e perdeu o turno.",
        turno: partida.turno
    };
}

    const skill = atacante.skills.find(s => s.id === skillId);

    if (!skill) {
        return { erro: "Skill não encontrada: " + skillId };
    }

    let dano = 0;
    let mensagem = "";
    let cura = 0;
    mensagem = atacante.name + " usou " + skill.name + ".";
    if (skill.recoil) {
    let danoRecoil = 0;

    if (skill.recoil.mode === "flat") {
        danoRecoil = skill.recoil.value;
    }

    if (skill.recoil.mode === "hpPct") {
        danoRecoil = Math.floor(atacante.hpMax * skill.recoil.value);
    }

    atacante.hp = Math.max(0, atacante.hp - danoRecoil);

    mensagem += " " + atacante.name + " sofreu " + danoRecoil + " de recoil.";
}
    const cdAtual = atacante.cooldowns[skill.id] || 0;

    if (cdAtual > 0) {
        return { erro: "Skill em cooldown: " + cdAtual };
    }

    if (
        skill.kind === "atk" ||
        skill.kind === "bigAtk" ||
        skill.kind === "fire" ||
	skill.kind === "bleedAtk" ||
	skill.kind === "atkCrit" 
    ) {
        dano = calcularDano(atacante, defensor, skill);
        defensor.hp = Math.max(0, defensor.hp - dano);

        mensagem = atacante.name + " usou " + skill.name + " e causou " + dano + " de dano.";

        if (skill.kind === "fire" && skill.burn && Math.random() < skill.burn.chance) {
            adicionarEfeito(defensor, {
    type: "burn",
    turns: skill.burn.turns,
    dmg: skill.burn.dmg
});

            mensagem += " Queimadura aplicada.";
        }
    }
    
    if (skill.kind === "bleedAtk" && skill.bleed) {
    const chance = skill.bleed.chance ?? 1;

    if (Math.random() < chance) {
        adicionarEfeito(defensor, {
            type: "bleed",
            turns: skill.bleed.turns,
            dmg: skill.bleed.dmg
        });

        mensagem += " Sangramento aplicado.";
    }
}
    if (skill.kind === "heal") {
        cura = skill.heal || 0;
        atacante.hp = Math.min(atacante.hpMax, atacante.hp + cura);

        mensagem = atacante.name + " usou " + skill.name + " e recuperou " + cura + " HP.";
    }

    if (skill.kind === "bleed") {

    dano = calcularDano(
        atacante,
        defensor,
        skill
    );
    if (skill.kind === "atkCrit" && skill.crit) {
    if (Math.random() < skill.crit.chance) {
        dano += skill.crit.bonus || 0;
        mensagem += " CRÍTICO!";
    }
}
    defensor.hp = Math.max(
        0,
        defensor.hp - dano
    );

    adicionarEfeito(defensor, {
        type: "bleed",
        dmg: skill.bleed.dmg,
        turns: skill.bleed.turns
    });

    mensagem =
        atacante.name +
        " usou " +
        skill.name +
        " e causou " +
        dano +
        " de dano. Sangramento aplicado.";
}
    if (skill.kind === "guard") {
        adicionarEfeito(atacante, {
    type: "guard",
    turns: 1
});
        mensagem = atacante.name + " entrou em defesa.";
    }

    if (
        skill.kind === "buffAtk" ||
        skill.kind === "buffDef" ||
        skill.kind === "buffAtkDef" ||
        skill.kind === "buffAtkSpd"
    ) {
        if (skill.atkUp && skill.defUp) {
    adicionarEfeito(atacante, {
        type: "atkDefBuff",
        atkUp: skill.atkUp,
        defUp: skill.defUp,
        turns: skill.turns || 3
    });
} else if (skill.atkUp) {
    adicionarEfeito(atacante, {
        type: "atkBuff",
        amount: skill.atkUp,
        turns: skill.turns || 3
    });
} else if (skill.defUp) {
    adicionarEfeito(atacante, {
        type: "defBuff",
        amount: skill.defUp,
        turns: skill.turns || 3
    });
}

mensagem = atacante.name + " recebeu buff.";
    }

    if (skill.kind === "stun") {
        adicionarEfeito(defensor, {
    type: "stun",
    turns: skill.stunTurns || 1
});
        mensagem = atacante.name + " usou " + skill.name + " e paralisou o inimigo.";
    }

    atacante.cooldowns[skill.id] = skill.cooldown || 0;

    const mensagensInicioTurno = processarInicioTurno(defensor);

    const inimigoPlayer =
    inimigoDe(jogador);

const antes =
    partida["player" + inimigoPlayer]
    .ativa;

passarParaProximaCartaViva(
    partida,
    inimigoPlayer
);

const depois =
    partida["player" + inimigoPlayer]
    .ativa;

let trocaAutomatica = null;

if (antes !== depois) {

    trocaAutomatica =
        partida["player" + inimigoPlayer]
        .deck[depois].name;

}

    verificarDerrota(partida);

    tickCooldowns(atacante);

    if (!partida.finalizada) {
        partida.turno = inimigoDe(jogador);
    }
processarFimTurno(atacante);

if (mensagensInicioTurno.length > 0) {
    mensagem += " " + mensagensInicioTurno.join(" ");
}
    return {
        sucesso: true,
        mensagem,
        dano,
        cura,
	trocaAutomatica,
        turno: partida.turno,
        finalizada: partida.finalizada,
        vencedor: partida.vencedor
    };
}

function trocarCarta(partida, jogador, novoIndice) {
    if (partida.finalizada) {
        return { erro: "A partida já acabou." };
    }

    if (partida.turno !== jogador) {
        return { erro: "Não é seu turno." };
    }

    const player = partida["player" + jogador];

    if (!player.deck[novoIndice]) {
        return { erro: "Carta não encontrada." };
    }

    if (player.deck[novoIndice].hp <= 0) {
        return { erro: "Essa carta está derrotada." };
    }

    player.ativa = novoIndice;
    partida.turno = inimigoDe(jogador);

    return {
        sucesso: true,
        mensagem: "Player " + jogador + " trocou para " + player.deck[novoIndice].name + ".",
        turno: partida.turno
    };
}

function listarCartasOnline() {
    return Object.values(cards).map(c => ({
        id: c.id,
        name: c.name,
        rarity: c.rarity,
        hp: c.hp,
        atk: c.atk,
        def: c.def,
        spd: c.spd,
        skills: c.skills
    }));
}

module.exports = {
    cards,
    criarPartida,
    usarSkill,
    trocarCarta,
    cartaAtual,
    listarCartasOnline
};