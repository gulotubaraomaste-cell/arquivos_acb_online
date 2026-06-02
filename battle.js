const cards = {
    "saitama": {
        "id": "saitama",
        "name": "Saitama",
        "rarity": "Exclusiva",
        "exTier": "EX3",
        "hp": 42000,
        "atk": 4200,
        "def": 3100,
        "spd": 285,
        "skills": [
            {
                "id": "st_normal",
                "name": "Soco Normal",
                "kind": "atk",
                "power": 7600,
                "cooldown": 1,
                "ai": 1.9,
                "shortName": "Normal"
            },
            {
                "id": "st_serious",
                "name": "Soco Sério",
                "kind": "bigAtk",
                "power": 13500,
                "cooldown": 3,
                "ai": 2.6,
                "shortName": "Sério",
                "cinematic": true
            },
            {
                "id": "st_table",
                "name": "Virada de Mesa Séria",
                "kind": "bigAtk",
                "power": 19800,
                "cooldown": 6,
                "startCd": 4,
                "ai": 3.1,
                "targeting": "aoe",
                "aoeScale": 0.8,
                "cinematic": true,
                "shortName": "Mesa Séria"
            },
            {
                "id": "st_omni",
                "name": "Soco Sério Omnidirecional",
                "kind": "bigAtk",
                "power": 39000,
                "cooldown": 12,
                "startCd": 5,
                "ai": 4.2,
                "targeting": "aoe",
                "aoeScale": 1,
                "cinematic": true,
                "shortName": "Omnidirecional"
            },
            {
                "id": "st_steps",
                "name": "Saltos Sérios Lateralmente",
                "kind": "perfectDodge",
                "turns": 3,
                "cooldown": 9,
                "ai": 2.8,
                "shortName": "Saltos"
            }
        ]
    },
    "sung_jinwoo": {
        "id": "sung_jinwoo",
        "name": "Sung Jin-Woo",
        "rarity": "Exclusiva",
        "exTier": "EX1",
        "hp": 18000,
        "atk": 1450,
        "def": 980,
        "spd": 245,
        "skills": [
            {
                "id": "sjw_stealth",
                "name": "Furtividade",
                "kind": "perfectDodge",
                "turns": 2,
                "cooldown": 8,
                "startCd": 2,
                "ai": 2,
                "shortName": "Furtividade"
            },
            {
                "id": "sjw_dagger",
                "name": "Investida de Adaga",
                "kind": "bleedAtk",
                "power": 1850,
                "cooldown": 3,
                "ai": 1.55,
                "bleed": {
                    "chance": 0.7,
                    "dmg": 260,
                    "turns": 3
                }
            },
            {
                "id": "sjw_mutilation",
                "name": "Mutilação",
                "kind": "bigAtk",
                "power": 2950,
                "cooldown": 5,
                "ai": 2.1,
                "multiHit": 4,
                "cinematic": true
            },
            {
                "id": "sjw_ruler",
                "name": "Toque do Dominador",
                "kind": "bigAtk",
                "power": 4300,
                "cooldown": 7,
                "startCd": 2,
                "ai": 2.55,
                "cinematic": true
            },
            {
                "id": "sjw_dash",
                "name": "Dash",
                "kind": "buffAtkSpd",
                "atkUp": 160,
                "spdUp": 80,
                "turns": 2,
                "cooldown": 5,
                "ai": 1.35
            },
            {
                "id": "sjw_igris",
                "name": "Invocação: Cavaleiro Vermelho Igris",
                "kind": "summon",
                "cooldown": 99,
                "startCd": 3,
                "ai": 2.6,
                "oncePerBattle": true,
                "summonTemplate": {
                    "id": "igris_shadow",
                    "name": "Igris",
                    "artText": "IGRIS",
                    "img": "igris",
                    "imgFit": "contain",
                    "imgPos": "50% 50%",
                    "imgZoom": 1,
                    "stats": {
                        "hpMax": 9200,
                        "atk": 980,
                        "def": 620,
                        "spd": 198
                    },
                    "moves": [
                        {
                            "id": "ig_cut",
                            "name": "Corte de Espada",
                            "kind": "bleedAtk",
                            "power": 1350,
                            "cd": 0,
                            "ai": 1.1,
                            "bleed": {
                                "chance": 0.55,
                                "dmg": 180,
                                "turns": 2
                            }
                        },
                        {
                            "id": "ig_combo",
                            "name": "Sequência de Cortes",
                            "kind": "bleedAtk",
                            "power": 2100,
                            "cd": 3,
                            "ai": 1.7,
                            "bleed": {
                                "chance": 0.7,
                                "dmg": 240,
                                "turns": 3
                            }
                        }
                    ],
                    "turns": 999
                }
            },
            {
                "id": "sjw_iron",
                "name": "Invocação: Iron",
                "kind": "summon",
                "cooldown": 99,
                "startCd": 3,
                "ai": 2.35,
                "oncePerBattle": true,
                "summonTemplate": {
                    "id": "iron_shadow",
                    "name": "Iron",
                    "artText": "IRON",
                    "img": "iron",
                    "imgFit": "contain",
                    "imgPos": "50% 50%",
                    "imgZoom": 1,
                    "stats": {
                        "hpMax": 11800,
                        "atk": 640,
                        "def": 1160,
                        "spd": 106
                    },
                    "moves": [
                        {
                            "id": "ir_shield",
                            "name": "Ataque com Escudo",
                            "kind": "atk",
                            "power": 1050,
                            "cd": 0,
                            "ai": 1
                        },
                        {
                            "id": "ir_bash",
                            "name": "Investida de Escudo",
                            "kind": "bigAtk",
                            "power": 1650,
                            "cd": 3,
                            "ai": 1.45
                        },
                        {
                            "id": "ir_taunt",
                            "name": "Grito de Provocação",
                            "kind": "taunt",
                            "cd": 6,
                            "startCd": 1,
                            "ai": 2.2,
                            "turns": 3
                        }
                    ],
                    "turns": 999
                }
            },
            {
                "id": "sjw_tusk",
                "name": "Invocação: Tusk",
                "kind": "summon",
                "cooldown": 99,
                "startCd": 3,
                "ai": 2.35,
                "oncePerBattle": true,
                "summonTemplate": {
                    "id": "tusk_shadow",
                    "name": "Tusk",
                    "artText": "TUSK",
                    "img": "tusk",
                    "imgFit": "contain",
                    "imgPos": "50% 50%",
                    "imgZoom": 1,
                    "stats": {
                        "hpMax": 12500,
                        "atk": 740,
                        "def": 980,
                        "spd": 98
                    },
                    "moves": [
                        {
                            "id": "tk_fire",
                            "name": "Bola de Fogo",
                            "kind": "fire",
                            "power": 1300,
                            "cd": 0,
                            "ai": 1.1,
                            "burn": {
                                "chance": 0.65,
                                "dmg": 210,
                                "turns": 3
                            }
                        },
                        {
                            "id": "tk_spell",
                            "name": "Magia Flamejante",
                            "kind": "fire",
                            "power": 2100,
                            "cd": 4,
                            "ai": 1.7,
                            "targeting": "aoe",
                            "aoeScale": 0.72,
                            "burn": {
                                "chance": 0.55,
                                "dmg": 240,
                                "turns": 3
                            }
                        }
                    ],
                    "turns": 999
                }
            },
            {
                "id": "sjw_domain",
                "name": "Domínio do Monarca",
                "kind": "shadowBuff",
                "atkUp": 360,
                "defUp": 260,
                "cooldown": 99,
                "startCd": 6,
                "ai": 2.8,
                "oncePerBattle": true,
                "cinematic": true
            }
        ]
    },
    "luffy": {
        "id": "luffy",
        "name": "Monkey D. Luffy",
        "rarity": "Comum",
        "hp": 5350,
        "atk": 245,
        "def": 190,
        "spd": 120,
        "skills": [
            {
                "id": "l_pistol",
                "name": "Pistol",
                "kind": "atk",
                "power": 370,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "l_bazooka",
                "name": "Bazooka",
                "kind": "atk",
                "power": 455,
                "cooldown": 1,
                "ai": 1.1
            },
            {
                "id": "l_bullet",
                "name": "Bullet",
                "kind": "bigAtk",
                "power": 820,
                "cooldown": 4,
                "ai": 1.8
            },
            {
                "id": "l_buff",
                "name": "Rei dos Piratas!",
                "kind": "buffAtk",
                "atkUp": 72,
                "cooldown": 6,
                "ai": 1.2
            }
        ]
    },
    "escanor": {
        "id": "escanor",
        "name": "Escanor",
        "rarity": "Comum",
        "hp": 3900,
        "atk": 118,
        "def": 105,
        "spd": 96,
        "skills": [
            {
                "id": "esc_tapa",
                "name": "Tapa educado",
                "kind": "atk",
                "power": 170,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "esc_vinho",
                "name": "Oferecer vinho",
                "kind": "debuff",
                "power": 0,
                "cooldown": 3,
                "ai": 1.5,
                "defDownPct": 0.08,
                "slow": {
                    "factor": 0.18,
                    "turns": 2
                },
                "confuse": {
                    "chance": 0.18,
                    "turns": 2
                }
            },
            {
                "id": "esc_desculpa",
                "name": "Pedido de desculpa",
                "kind": "evasionBuff",
                "cooldown": 2,
                "ai": 1.35,
                "dodgeTurns": 2,
                "atkDown": 45,
                "turns": 2
            }
        ]
    },
    "ochako": {
        "id": "ochako",
        "name": "Ochako Uraraka",
        "rarity": "Comum",
        "hp": 5200,
        "atk": 224,
        "def": 205,
        "spd": 126,
        "skills": [
            {
                "id": "och_obj",
                "name": "Arremesso de objetos",
                "kind": "atk",
                "power": 310,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "och_zero",
                "name": "Gravidade Zero",
                "kind": "debuff",
                "power": 0,
                "cooldown": 3,
                "ai": 1.55,
                "slow": {
                    "factor": 0.3,
                    "turns": 3
                }
            },
            {
                "id": "och_chuva",
                "name": "Chuva de destroços",
                "kind": "bigAtk",
                "targeting": "aoe",
                "power": 370,
                "aoeScale": 0.7,
                "cooldown": 5,
                "ai": 1.45,
                "stunChance": 0.1,
                "stunTurns": 1
            },
            {
                "id": "och_gunhead",
                "name": "Artes Marciais Gunhead",
                "kind": "bigAtk",
                "power": 920,
                "cooldown": 7,
                "ai": 1.85
            }
        ]
    },
    "nobara": {
        "id": "nobara",
        "name": "Nobara Kugisaki",
        "rarity": "Raro",
        "hp": 6000,
        "atk": 315,
        "def": 230,
        "spd": 132,
        "skills": [
            {
                "id": "nb_martelo",
                "name": "Martelada com pregos",
                "kind": "bleedAtk",
                "power": 500,
                "cooldown": 1,
                "ai": 1.1,
                "bleed": {
                    "chance": 0.22,
                    "dmg": 85,
                    "turns": 2
                }
            },
            {
                "id": "nb_hairpin",
                "name": "Hairpin",
                "kind": "bleedAtk",
                "targeting": "aoe",
                "power": 430,
                "aoeScale": 0.68,
                "cooldown": 3,
                "ai": 1.55,
                "bleed": {
                    "chance": 0.48,
                    "dmg": 110,
                    "turns": 3
                },
                "defDownPct": 0.05
            },
            {
                "id": "nb_boneco",
                "name": "Técnica amaldiçoada: Boneco de Palha",
                "kind": "bleedAtk",
                "power": 1050,
                "cooldown": 4,
                "ai": 1.9,
                "bleed": {
                    "chance": 0.55,
                    "dmg": 130,
                    "turns": 3
                },
                "defDownPct": 0.15
            },
            {
                "id": "nb_res",
                "name": "Ressonância",
                "kind": "bigAtk",
                "power": 1580,
                "cooldown": 6,
                "startCd": 3,
                "ai": 2.15,
                "cinematic": true
            },
            {
                "id": "nb_autores",
                "name": "Autoressonância",
                "kind": "bleedAtk",
                "power": 1320,
                "cooldown": 7,
                "startCd": 4,
                "ai": 2.05,
                "bleed": {
                    "chance": 1,
                    "dmg": 190,
                    "turns": 3
                },
                "defDownPct": 0.2,
                "recoil": {
                    "mode": "hpPct",
                    "value": 0.08
                }
            }
        ]
    },
    "nami": {
        "id": "nami",
        "name": "Nami",
        "rarity": "Comum",
        "hp": 5350,
        "atk": 210,
        "def": 200,
        "spd": 125,
        "skills": [
            {
                "id": "nm_clima",
                "name": "Bastão Clima-Tact",
                "kind": "atk",
                "power": 290,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "nm_mirage",
                "name": "Mirage Tempo",
                "kind": "evasionBuff",
                "cooldown": 4,
                "ai": 1.55,
                "dodgeTurns": 2,
                "dodgeChance": 0.5
            },
            {
                "id": "nm_thunder",
                "name": "Thunderbolt Tempo",
                "kind": "stun",
                "power": 820,
                "cooldown": 5,
                "startCd": 2,
                "stunTurns": 2,
                "ai": 1.95
            },
            {
                "id": "nm_cyclone",
                "name": "Cyclone Tempo",
                "kind": "bigAtk",
                "targeting": "aoe",
                "power": 420,
                "aoeScale": 0.7,
                "cooldown": 4,
                "startCd": 1,
                "ai": 1.5
            }
        ]
    },
    "meliodas": {
        "id": "meliodas",
        "name": "Meliodas",
        "rarity": "Épico",
        "hp": 6250,
        "atk": 325,
        "def": 215,
        "spd": 136,
        "skills": [
            {
                "id": "ml_dragon",
                "name": "Corte do Punho do Dragão",
                "kind": "bleedAtk",
                "power": 480,
                "cooldown": 0,
                "ai": 1.05,
                "bleed": {
                    "chance": 0.05,
                    "dmg": 75,
                    "turns": 2
                }
            },
            {
                "id": "ml_hellblaze",
                "name": "Hellblaze",
                "kind": "fire",
                "power": 790,
                "cooldown": 3,
                "ai": 1.75,
                "burn": {
                    "chance": 1,
                    "dmg": 135,
                    "turns": 3
                }
            },
            {
                "id": "ml_mark",
                "name": "Marca Demoníaca",
                "kind": "buffAtkSpd",
                "atkUp": 32,
                "spdUp": 10,
                "turns": 3,
                "cooldown": 5,
                "startCd": 3,
                "ai": 1.45
            },
            {
                "id": "ml_full_counter",
                "name": "Reação Total",
                "kind": "fullCounter",
                "cooldown": 7,
                "startCd": 4,
                "ai": 2.7,
                "multiplier": 2,
                "cinematic": true
            }
        ]
    },
    "meliodas_berserk": {
        "id": "meliodas_berserk",
        "name": "Meliodas (Berserk)",
        "rarity": "Épico",
        "hp": 6900,
        "atk": 390,
        "def": 235,
        "spd": 142,
        "skills": [
            {
                "id": "mb_claws",
                "name": "Garras das Trevas",
                "kind": "atk",
                "power": 520,
                "cooldown": 0,
                "ai": 1.1
            },
            {
                "id": "mb_charge",
                "name": "Investida Demoníaca",
                "kind": "bigAtk",
                "power": 860,
                "cooldown": 3,
                "ai": 1.8
            },
            {
                "id": "mb_fury",
                "name": "Fúria Berserk",
                "kind": "bigAtk",
                "power": 1750,
                "cooldown": 6,
                "startCd": 3,
                "ai": 2.45,
                "recoil": {
                    "mode": "hpPct",
                    "value": 0.05
                },
                "selfBuffAfter": {
                    "atkUp": 20,
                    "turns": 2
                },
                "cinematic": true
            }
        ]
    },
    "naruto": {
        "id": "naruto",
        "name": "Naruto Uzumaki",
        "rarity": "Comum",
        "hp": 5250,
        "atk": 225,
        "def": 198,
        "spd": 129,
        "skills": [
            {
                "id": "n_kunai",
                "name": "Kunai",
                "kind": "atk",
                "power": 325,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "n_clones",
                "name": "Clone das Sombras",
                "kind": "summon",
                "cooldown": 5,
                "ai": 1.25,
                "summonTemplate": {
                    "id": "naruto_shadow_clone",
                    "name": "Naruto (Clone das Sombras)",
                    "artText": "CLONE",
                    "img": "naruto",
                    "stats": {
                        "hpMax": 2625,
                        "atk": 112,
                        "def": 99,
                        "spd": 129
                    },
                    "moves": [
                        {
                            "id": "n_clone_kunai",
                            "name": "Kunai",
                            "kind": "atk",
                            "power": 260,
                            "cd": 0,
                            "ai": 1
                        }
                    ],
                    "turns": 3
                }
            },
            {
                "id": "n_rasen",
                "name": "Rasengan",
                "kind": "bigAtk",
                "power": 940,
                "cooldown": 4,
                "ai": 1.9
            },
            {
                "id": "n_barrage",
                "name": "Barragem",
                "kind": "bigAtk",
                "power": 1220,
                "cooldown": 7,
                "ai": 2.2
            }
        ]
    },
    "sasuke": {
        "id": "sasuke",
        "name": "Sasuke Uchiha",
        "rarity": "Incomum",
        "hp": 5300,
        "atk": 250,
        "def": 205,
        "spd": 127,
        "skills": [
            {
                "id": "s_corte",
                "name": "Corte Rápido",
                "kind": "atk",
                "power": 323,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "s_sharingan",
                "name": "Sharingan",
                "kind": "buffAtkSpd",
                "atkUp": 65,
                "spdUp": 24,
                "cooldown": 6,
                "ai": 1.3
            },
            {
                "id": "s_phoenix",
                "name": "Estilo Fogo: Técnica Flor de Fênix",
                "kind": "fire",
                "power": 446,
                "cooldown": 3,
                "ai": 1.45,
                "burn": {
                    "chance": 0.45,
                    "dmg": 75,
                    "turns": 2
                }
            },
            {
                "id": "s_fire",
                "name": "Bola de Fogo",
                "kind": "fire",
                "power": 608,
                "cooldown": 4,
                "ai": 1.7,
                "burn": {
                    "chance": 0.6,
                    "dmg": 105,
                    "turns": 3
                }
            },
            {
                "id": "s_gen",
                "name": "Genjutsu",
                "kind": "stun",
                "cooldown": 7,
                "stunTurns": 1,
                "ai": 1.6
            },
            {
                "id": "s_chidori",
                "name": "Chidori",
                "kind": "bigAtk",
                "power": 1254,
                "cooldown": 8,
                "ai": 2.4
            }
        ]
    },
    "sasuke_curse": {
        "id": "sasuke_curse",
        "name": "Sasuke Uchiha (Marca da Maldição)",
        "rarity": "Exclusiva",
        "hp": 6900,
        "atk": 335,
        "def": 270,
        "spd": 148,
        "skills": [
            {
                "id": "sc_taijutsu",
                "name": "Golpe de Taijutsu",
                "kind": "atk",
                "power": 405,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "sc_sharingan",
                "name": "Sharingan",
                "kind": "buffAtkSpd",
                "atkUp": 78,
                "spdUp": 32,
                "cooldown": 6,
                "ai": 1.35
            },
            {
                "id": "sc_phoenix",
                "name": "Estilo Fogo: Técnica Flor de Fênix",
                "kind": "fire",
                "power": 560,
                "cooldown": 3,
                "ai": 1.5,
                "burn": {
                    "chance": 0.5,
                    "dmg": 90,
                    "turns": 2
                }
            },
            {
                "id": "sc_fire",
                "name": "Bola de Fogo",
                "kind": "fire",
                "power": 780,
                "cooldown": 4,
                "ai": 1.8,
                "burn": {
                    "chance": 0.65,
                    "dmg": 120,
                    "turns": 3
                }
            },
            {
                "id": "sc_gen",
                "name": "Genjutsu",
                "kind": "stun",
                "cooldown": 7,
                "stunTurns": 1,
                "ai": 1.55
            },
            {
                "id": "sc_chidori",
                "name": "Chidori",
                "kind": "bigAtk",
                "power": 1580,
                "cooldown": 8,
                "ai": 2.45
            }
        ]
    },
    "sasuke_curse_v2": {
        "id": "sasuke_curse_v2",
        "name": "Sasuke Uchiha (Marca da Maldição V2)",
        "rarity": "Exclusiva",
        "hp": 8200,
        "atk": 420,
        "def": 325,
        "spd": 168,
        "skills": [
            {
                "id": "sc2_taijutsu",
                "name": "Golpe de Taijutsu",
                "kind": "atk",
                "power": 485,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "sc2_sharingan",
                "name": "Sharingan",
                "kind": "buffAtkSpd",
                "atkUp": 95,
                "spdUp": 42,
                "cooldown": 6,
                "ai": 1.35
            },
            {
                "id": "sc2_fire",
                "name": "Bola de Fogo",
                "kind": "fire",
                "power": 880,
                "cooldown": 4,
                "ai": 1.75,
                "burn": {
                    "chance": 0.68,
                    "dmg": 130,
                    "turns": 3
                }
            },
            {
                "id": "sc2_chidori_onix",
                "name": "Chidori Onix",
                "kind": "bigAtk",
                "power": 2300,
                "cooldown": 9,
                "ai": 2.9,
                "cinematic": true
            }
        ]
    },
    "sakura": {
        "id": "sakura",
        "name": "Sakura Haruno",
        "rarity": "Comum",
        "hp": 5550,
        "atk": 170,
        "def": 248,
        "spd": 108,
        "skills": [
            {
                "id": "sk_hit",
                "name": "Golpe Preciso",
                "kind": "atk",
                "power": 290,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "sk_guard",
                "name": "Aprendiz da Tsunade",
                "kind": "buffAtkDef",
                "atkUp": 0,
                "defUp": 70,
                "cooldown": 5,
                "ai": 1.35
            },
            {
                "id": "sk_heal",
                "name": "Ninjutsu Médico",
                "kind": "teamHeal",
                "heal": 310,
                "cooldown": 6,
                "ai": 2.2
            },
            {
                "id": "sk_hot",
                "name": "Recuperação",
                "kind": "hot",
                "hot": {
                    "perTurn": 115,
                    "turns": 3
                },
                "cooldown": 7,
                "ai": 1.8
            }
        ]
    },
    "kakashi": {
        "id": "kakashi",
        "name": "Kakashi Hatake",
        "rarity": "Raro",
        "hp": 5750,
        "atk": 280,
        "def": 228,
        "spd": 132,
        "skills": [
            {
                "id": "kk_kunai",
                "name": "Corte de Kunai",
                "kind": "atk",
                "power": 370,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "kk_water",
                "name": "Dragão de Água",
                "kind": "bigAtk",
                "power": 1120,
                "cooldown": 5,
                "ai": 1.9
            },
            {
                "id": "kk_share",
                "name": "Sharingan",
                "kind": "buffAtkDef",
                "atkUp": 75,
                "defUp": 55,
                "cooldown": 7,
                "ai": 1.25
            },
            {
                "id": "kk_raikiri",
                "name": "Raikiri",
                "kind": "bigAtk",
                "power": 1390,
                "cooldown": 6,
                "ai": 2.2
            }
        ]
    },
    "rock_lee": {
        "id": "rock_lee",
        "name": "Rock Lee",
        "rarity": "Raro",
        "hp": 5850,
        "atk": 305,
        "def": 218,
        "spd": 154,
        "skills": [
            {
                "id": "lee_taijutsu",
                "name": "Taijutsu",
                "kind": "atk",
                "power": 390,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "lee_hurricane",
                "name": "Grande Furacão da Folha",
                "kind": "bigAtk",
                "power": 1130,
                "cooldown": 5,
                "ai": 1.9
            },
            {
                "id": "lee_lotus",
                "name": "Lótus Oculta",
                "kind": "bigAtk",
                "power": 1680,
                "cooldown": 8,
                "ai": 2.45,
                "cinematic": true
            },
            {
                "id": "lee_gate",
                "name": "Quinto Portão de Chakra",
                "kind": "transformSelf",
                "transformTo": "rock_lee_gate",
                "cooldown": 99,
                "startCd": 7,
                "ai": 2.9,
                "once": true,
                "cinematic": true
            }
        ]
    },
    "rock_lee_gate": {
        "id": "rock_lee_gate",
        "name": "Rock Lee (5º Portão)",
        "rarity": "Exclusiva",
        "hp": 6900,
        "atk": 445,
        "def": 265,
        "spd": 205,
        "skills": [
            {
                "id": "leeg_taijutsu",
                "name": "Taijutsu",
                "kind": "atk",
                "power": 500,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "leeg_hurricane",
                "name": "Grande Furacão da Folha",
                "kind": "bigAtk",
                "power": 1450,
                "cooldown": 5,
                "ai": 2
            },
            {
                "id": "leeg_lotus",
                "name": "Lótus Oculta",
                "kind": "bigAtk",
                "power": 2320,
                "cooldown": 8,
                "ai": 2.75,
                "cinematic": true
            }
        ]
    },
    "neji": {
        "id": "neji",
        "name": "Neji Hyuuga",
        "rarity": "Incomum",
        "hp": 5400,
        "atk": 258,
        "def": 245,
        "spd": 134,
        "skills": [
            {
                "id": "nj_gentle",
                "name": "Punho Suave",
                "kind": "atk",
                "power": 455,
                "cooldown": 1,
                "ai": 1.15
            },
            {
                "id": "nj_byakugan",
                "name": "Byakugan",
                "kind": "buffAtkDef",
                "atkUp": 0,
                "defUp": 82,
                "turns": 4,
                "cooldown": 6,
                "ai": 1.25
            },
            {
                "id": "nj_rotation",
                "name": "Oito Trigramas: Palma Rotativa",
                "kind": "bigAtk",
                "power": 1040,
                "cooldown": 5,
                "ai": 1.85
            },
            {
                "id": "nj_64",
                "name": "Oito Trigramas: Sessenta e Quatro Palmas",
                "kind": "bigAtk",
                "power": 1550,
                "cooldown": 8,
                "ai": 2.35,
                "cinematic": true
            }
        ]
    },
    "bakugou": {
        "id": "bakugou",
        "name": "Katsuki Bakugou",
        "rarity": "Incomum",
        "hp": 5480,
        "atk": 284,
        "def": 176,
        "spd": 138,
        "skills": [
            {
                "id": "bg_blast",
                "name": "Golpe explosivo",
                "kind": "atk",
                "power": 430,
                "cooldown": 0,
                "ai": 1.05
            },
            {
                "id": "bg_ap",
                "name": "AP Shot",
                "kind": "bigAtk",
                "power": 880,
                "cooldown": 2,
                "ai": 1.45
            },
            {
                "id": "bg_stun",
                "name": "Stun Grenade",
                "kind": "daze",
                "power": 520,
                "cooldown": 5,
                "ai": 1.35,
                "daze": {
                    "turns": 2,
                    "factor": 0.42
                }
            },
            {
                "id": "bg_howitzer",
                "name": "Howitzer Impact",
                "kind": "bigAtk",
                "power": 1760,
                "cooldown": 8,
                "startCd": 4,
                "ai": 2.55,
                "targeting": "aoe",
                "aoeScale": 0.72,
                "cinematic": true
            }
        ]
    },
    "gojo": {
        "id": "gojo",
        "name": "Satoru Gojo",
        "rarity": "Épico",
        "hp": 6120,
        "atk": 312,
        "def": 238,
        "spd": 148,
        "skills": [
            {
                "id": "gj_blue",
                "name": "Lapso Azul",
                "kind": "bigAtk",
                "power": 1120,
                "cooldown": 3,
                "ai": 1.65
            },
            {
                "id": "gj_red",
                "name": "Reversão de Feitiço – Vermelho",
                "kind": "bigAtk",
                "power": 1380,
                "cooldown": 5,
                "ai": 1.9
            },
            {
                "id": "gj_six",
                "name": "Seis Olhos",
                "kind": "gojoSixEyes",
                "cooldown": 6,
                "ai": 1.55,
                "gaugeBoost": 1.55,
                "defUp": 85,
                "turns": 3
            },
            {
                "id": "gj_combo",
                "name": "Combate",
                "kind": "atk",
                "power": 460,
                "cooldown": 0,
                "ai": 1
            }
        ]
    },
    "geto": {
        "id": "geto",
        "name": "Suguru Geto",
        "rarity": "Épico",
        "hp": 5980,
        "atk": 145,
        "def": 224,
        "spd": 132,
        "skills": [
            {
                "id": "ge_strike",
                "name": "Rajada Amaldiçoada",
                "kind": "atk",
                "power": 345,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "ge_anky",
                "name": "Manipulação de Espíritos: Ancilóstomo",
                "kind": "summon",
                "cooldown": 10,
                "ai": 1.2,
                "summonTemplate": {
                    "id": "shiki_ankylostomus",
                    "name": "Ancilóstomo",
                    "artText": "ANCI",
                    "img": "shiki_ankylostomus",
                    "stats": {
                        "hpMax": 1880,
                        "atk": 250,
                        "def": 120,
                        "spd": 124
                    },
                    "moves": [
                        {
                            "id": "sk_a_bite",
                            "name": "Mordida Voraz",
                            "kind": "atk",
                            "power": 560,
                            "cd": 0,
                            "ai": 1
                        }
                    ],
                    "turns": 3
                }
            },
            {
                "id": "ge_rain",
                "name": "Manipulação de Espíritos: Dragão Arco-Íris",
                "kind": "summon",
                "cooldown": 10,
                "ai": 1.75,
                "summonTemplate": {
                    "id": "shiki_rainbow",
                    "name": "Dragão Arco-Íris",
                    "artText": "DRAG",
                    "img": "shiki_rainbow",
                    "stats": {
                        "hpMax": 2280,
                        "atk": 320,
                        "def": 150,
                        "spd": 116
                    },
                    "moves": [
                        {
                            "id": "sk_rain_crash",
                            "name": "Investida Prismática",
                            "kind": "bigAtk",
                            "power": 900,
                            "cd": 0,
                            "ai": 1.2
                        }
                    ],
                    "turns": 3
                }
            },
            {
                "id": "ge_kuchi",
                "name": "Manipulação de Espíritos: Kuchisake-Onna",
                "kind": "summon",
                "cooldown": 10,
                "ai": 1.32,
                "summonTemplate": {
                    "id": "shiki_kuchisake",
                    "name": "Kuchisake-Onna",
                    "artText": "KUCHI",
                    "img": "shiki_kuchisake",
                    "stats": {
                        "hpMax": 1960,
                        "atk": 248,
                        "def": 126,
                        "spd": 120
                    },
                    "moves": [
                        {
                            "id": "sk_kuchi_slash",
                            "name": "Talho da Fenda",
                            "kind": "atk",
                            "power": 600,
                            "cd": 0,
                            "ai": 1
                        }
                    ],
                    "turns": 3
                }
            },
            {
                "id": "ge_fungus",
                "name": "Manipulação de Espíritos: Maldição do Fungo",
                "kind": "summon",
                "cooldown": 10,
                "ai": 1.48,
                "summonTemplate": {
                    "id": "shiki_fungus",
                    "name": "Maldição do Fungo",
                    "artText": "FUNGO",
                    "img": "shiki_fungus",
                    "stats": {
                        "hpMax": 1840,
                        "atk": 170,
                        "def": 118,
                        "spd": 118
                    },
                    "moves": [
                        {
                            "id": "sk_fungus_stun",
                            "name": "Esporo Paralizante",
                            "kind": "stun",
                            "power": 180,
                            "cd": 0,
                            "stunTurns": 1,
                            "ai": 1.2
                        }
                    ],
                    "turns": 3
                }
            },
            {
                "id": "ge_wild",
                "name": "Manipulação de Espíritos: Maldição do Incêndio Florestal",
                "kind": "summon",
                "cooldown": 10,
                "ai": 1.62,
                "summonTemplate": {
                    "id": "shiki_wildfire",
                    "name": "Maldição do Incêndio Florestal",
                    "artText": "FIRE",
                    "img": "shiki_wildfire",
                    "stats": {
                        "hpMax": 2050,
                        "atk": 286,
                        "def": 132,
                        "spd": 122
                    },
                    "moves": [
                        {
                            "id": "sk_wildfire",
                            "name": "Chama da Mata",
                            "kind": "fire",
                            "power": 620,
                            "cd": 0,
                            "burn": {
                                "chance": 0.8,
                                "dmg": 110,
                                "turns": 2
                            },
                            "ai": 1.15
                        }
                    ],
                    "turns": 3
                }
            }
        ]
    },
    "gojo_rct": {
        "id": "gojo_rct",
        "name": "Satoru Gojo (Técnica Amaldiçoada Reversa)",
        "rarity": "Exclusiva",
        "hp": 7060,
        "atk": 382,
        "def": 304,
        "spd": 166,
        "skills": [
            {
                "id": "gr_blue",
                "name": "Lapso Azul",
                "kind": "bigAtk",
                "power": 1360,
                "cooldown": 3,
                "ai": 1.65
            },
            {
                "id": "gr_red",
                "name": "Reversão de Feitiço – Vermelho",
                "kind": "bigAtk",
                "power": 1660,
                "cooldown": 5,
                "ai": 1.95
            },
            {
                "id": "gr_purple",
                "name": "Vazio Roxo",
                "kind": "bigAtk",
                "power": 2640,
                "cooldown": 9,
                "ai": 3.1,
                "targeting": "aoe",
                "aoeScale": 0.78,
                "cinematic": true
            },
            {
                "id": "gr_rct",
                "name": "Energia Amaldiçoada Reversa",
                "kind": "selfHeal",
                "heal": 1500,
                "cooldown": 10,
                "ai": 1.35
            }
        ]
    },
    "toji": {
        "id": "toji",
        "name": "Fushiguro Toji",
        "rarity": "Exclusiva",
        "hp": 8750,
        "atk": 440,
        "def": 305,
        "spd": 160,
        "skills": [
            {
                "id": "tj_combat",
                "name": "Combate",
                "kind": "atk",
                "power": 515,
                "cooldown": 0,
                "ai": 1.02
            },
            {
                "id": "tj_spear",
                "name": "Lança Invertida do Céu",
                "kind": "bigAtk",
                "power": 1440,
                "cooldown": 3,
                "ai": 2.15,
                "removeBuff": true,
                "bypassInfinity": true
            },
            {
                "id": "tj_katana",
                "name": "Katana da Alma Dividida",
                "kind": "bleedAtk",
                "power": 900,
                "cooldown": 4,
                "ai": 1.86,
                "bleed": {
                    "chance": 0.9,
                    "dmg": 130,
                    "turns": 3
                }
            },
            {
                "id": "tj_chain",
                "name": "Corrente de Mil Milhas",
                "kind": "stun",
                "power": 320,
                "cooldown": 5,
                "ai": 1.52,
                "stunTurns": 1
            },
            {
                "id": "tj_gun",
                "name": "Tiro de Pistola",
                "kind": "bleedAtk",
                "power": 560,
                "cooldown": 1,
                "ai": 1.16,
                "bleed": {
                    "chance": 0.55,
                    "dmg": 60,
                    "turns": 2
                }
            }
        ]
    },
    "usopp": {
        "id": "usopp",
        "name": "Usopp",
        "rarity": "Comum",
        "hp": 4700,
        "atk": 165,
        "def": 155,
        "spd": 118,
        "skills": [
            {
                "id": "us_kaen",
                "name": "Kaen Boshi",
                "kind": "fire",
                "power": 300,
                "cooldown": 1,
                "ai": 1.2,
                "burn": {
                    "chance": 0.55,
                    "dmg": 78,
                    "turns": 2
                }
            },
            {
                "id": "us_kayaku",
                "name": "Kayaku Boshi",
                "kind": "atk",
                "power": 430,
                "cooldown": 2,
                "ai": 1.28
            },
            {
                "id": "us_kemuri",
                "name": "Kemuri Boshi",
                "kind": "daze",
                "power": 235,
                "cooldown": 3,
                "ai": 1.34,
                "daze": {
                    "chance": 0.8,
                    "turns": 2,
                    "factor": 0.45
                }
            },
            {
                "id": "us_nemuri",
                "name": "Nemuri Boshi",
                "kind": "stun",
                "cooldown": 4,
                "stunTurns": 1,
                "ai": 1.42
            },
            {
                "id": "us_pound",
                "name": "Usopp Pound",
                "kind": "bigAtk",
                "power": 760,
                "cooldown": 7,
                "ai": 1.7
            }
        ]
    },
    "deku": {
        "id": "deku",
        "name": "Izuku Midoriya",
        "rarity": "Comum",
        "hp": 5250,
        "atk": 222,
        "def": 202,
        "spd": 123,
        "skills": [
            {
                "id": "d_shoot",
                "name": "Shoot Style",
                "kind": "atk",
                "power": 340,
                "cooldown": 0,
                "ai": 1,
                "recoil": {
                    "mode": "flat",
                    "value": 55
                }
            },
            {
                "id": "d_del",
                "name": "Delaware Smash",
                "kind": "atk",
                "power": 580,
                "cooldown": 2,
                "ai": 1.2,
                "recoil": {
                    "mode": "flat",
                    "value": 90
                }
            },
            {
                "id": "d_det",
                "name": "Detroit Smash",
                "kind": "bigAtk",
                "power": 1060,
                "cooldown": 5,
                "ai": 1.9,
                "recoil": {
                    "mode": "flat",
                    "value": 150
                }
            },
            {
                "id": "d_buff",
                "name": "Herói Número 1",
                "kind": "buffAtk",
                "atkUp": 68,
                "cooldown": 7,
                "ai": 1.15
            }
        ]
    },
    "asta": {
        "id": "asta",
        "name": "Asta",
        "rarity": "Incomum",
        "hp": 5900,
        "atk": 268,
        "def": 225,
        "spd": 121,
        "skills": [
            {
                "id": "a_thrust",
                "name": "Corte de Espada",
                "kind": "atk",
                "power": 560,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "a_slash",
                "name": "Corte Anti-Magia",
                "kind": "atk",
                "power": 760,
                "cooldown": 2,
                "ai": 1.2
            },
            {
                "id": "a_buff",
                "name": "Rei Mago!",
                "kind": "buffAtk",
                "atkUp": 100,
                "cooldown": 7,
                "ai": 1.15
            },
            {
                "id": "a_break",
                "name": "Estocada do Touro",
                "kind": "bigAtk",
                "power": 1180,
                "cooldown": 6,
                "ai": 2
            }
        ]
    },
    "zoro": {
        "id": "zoro",
        "name": "Roronoa Zoro",
        "rarity": "Incomum",
        "hp": 5550,
        "atk": 280,
        "def": 212,
        "spd": 114,
        "skills": [
            {
                "id": "z_dual",
                "name": "Corte Santoryu",
                "kind": "atk",
                "power": 390,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "z_dash",
                "name": "Investida",
                "kind": "atk",
                "power": 455,
                "cooldown": 1,
                "ai": 1.05
            },
            {
                "id": "z_buff",
                "name": "Melhor espadachim!",
                "kind": "buffAtk",
                "atkUp": 85,
                "cooldown": 6,
                "ai": 1.1
            },
            {
                "id": "z_oni",
                "name": "Oni Giri",
                "kind": "bigAtk",
                "power": 1110,
                "cooldown": 7,
                "ai": 2.1
            }
        ]
    },
    "itadori": {
        "id": "itadori",
        "name": "Itadori Yuji",
        "rarity": "Raro",
        "hp": 6250,
        "atk": 302,
        "def": 242,
        "spd": 128,
        "skills": [
            {
                "id": "y_soco",
                "name": "Soco",
                "kind": "atkCrit",
                "power": 520,
                "cooldown": 0,
                "ai": 1,
                "crit": {
                    "chance": 0.2,
                    "bonus": 360,
                    "label": "Kokusen"
                }
            },
            {
                "id": "y_combo",
                "name": "Socos Consecutivos",
                "kind": "atk",
                "power": 780,
                "cooldown": 2,
                "ai": 1.2
            },
            {
                "id": "y_div",
                "name": "Punho Divergente",
                "kind": "bigAtk",
                "power": 1260,
                "cooldown": 5,
                "ai": 2
            },
            {
                "id": "y_buff",
                "name": "Receptáculo do Sukuna",
                "kind": "buffAtk",
                "atkUp": 95,
                "cooldown": 7,
                "ai": 1.1
            }
        ]
    },
    "naruto_1tail": {
        "id": "naruto_1tail",
        "name": "Naruto (1 Cauda)",
        "rarity": "Lendária",
        "hp": 7200,
        "atk": 375,
        "def": 300,
        "spd": 130,
        "skills": [
            {
                "id": "k_air",
                "name": "Soco",
                "kind": "atk",
                "power": 760,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "k_dash",
                "name": "Investida",
                "kind": "atk",
                "power": 960,
                "cooldown": 1,
                "ai": 1.1
            },
            {
                "id": "k_buff",
                "name": "Poder da Kurama",
                "kind": "buffAtkDef",
                "atkUp": 135,
                "defUp": 80,
                "cooldown": 7,
                "ai": 1.15
            },
            {
                "id": "k_vras",
                "name": "Vermillion Rasengan",
                "kind": "bigAtk",
                "power": 2700,
                "cooldown": 10,
                "ai": 2.8
            }
        ]
    },
    "asta_black": {
        "id": "asta_black",
        "name": "Asta (Forma Negra)",
        "rarity": "Lendária",
        "hp": 6350,
        "atk": 355,
        "def": 275,
        "spd": 134,
        "skills": [
            {
                "id": "ab_thrust",
                "name": "Estocada do Touro",
                "kind": "atk",
                "power": 760,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "ab_tornado",
                "name": "Furacão Negro",
                "kind": "bigAtk",
                "power": 1380,
                "cooldown": 4,
                "ai": 1.7
            },
            {
                "id": "ab_meteor",
                "name": "Meteorito Negro",
                "kind": "bigAtk",
                "power": 1850,
                "cooldown": 7,
                "ai": 2.1
            },
            {
                "id": "ab_regen",
                "name": "Regeneração Demoníaca",
                "kind": "hot",
                "hot": {
                    "perTurn": 220,
                    "turns": 3
                },
                "cooldown": 7,
                "ai": 1.6
            }
        ]
    },
    "sukuna": {
        "id": "sukuna",
        "name": "Ryomen Sukuna",
        "rarity": "Lendária",
        "hp": 7400,
        "atk": 390,
        "def": 315,
        "spd": 124,
        "skills": [
            {
                "id": "su_kick",
                "name": "Chute",
                "kind": "atk",
                "power": 720,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "su_cut",
                "name": "Cortar",
                "kind": "bigAtk",
                "power": 1450,
                "cooldown": 4,
                "ai": 1.6
            },
            {
                "id": "su_dism",
                "name": "Desmantelar",
                "kind": "bleedAtk",
                "power": 1520,
                "cooldown": 6,
                "ai": 1.95,
                "bleed": {
                    "chance": 0.35,
                    "dmg": 135,
                    "turns": 3
                }
            },
            {
                "id": "su_fire",
                "name": "Flecha de Fogo",
                "kind": "fire",
                "power": 1720,
                "cooldown": 7,
                "ai": 2,
                "burn": {
                    "chance": 0.65,
                    "dmg": 115,
                    "turns": 3
                }
            },
            {
                "id": "su_buff",
                "name": "Reconheço a sua força",
                "kind": "buffAtkDef",
                "atkUp": 110,
                "defUp": 80,
                "cooldown": 8,
                "ai": 1.15
            },
            {
                "id": "su_domain",
                "name": "Santuário Malevolente",
                "kind": "bigAtk",
                "power": 2520,
                "cooldown": 12,
                "ai": 3.2,
                "startCd": 6,
                "targeting": "aoe",
                "aoeScale": 0.82,
                "cinematic": true,
                "shortName": "Domínio"
            }
        ]
    },
    "megumi": {
        "id": "megumi",
        "name": "Megumi Fushiguro",
        "rarity": "Raro",
        "hp": 5900,
        "atk": 290,
        "def": 232,
        "spd": 131,
        "skills": [
            {
                "id": "mg_wolf",
                "name": "Cães Divinos",
                "kind": "atk",
                "power": 430,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "mg_nue",
                "name": "Nue",
                "kind": "stun",
                "cooldown": 4,
                "stunTurns": 1,
                "ai": 1.6
            },
            {
                "id": "mg_toad",
                "name": "Sapo",
                "kind": "guard",
                "cooldown": 5,
                "ai": 1.4
            },
            {
                "id": "mg_snake",
                "name": "Grande Serpente",
                "kind": "bigAtk",
                "power": 1290,
                "cooldown": 5,
                "ai": 1.9
            },
            {
                "id": "mg_elephant",
                "name": "Elefante Máximo",
                "kind": "bigAtk",
                "power": 1540,
                "cooldown": 7,
                "ai": 2.2
            }
        ]
    },
    "tanjiro": {
        "id": "tanjiro",
        "name": "Tanjiro Kamado",
        "rarity": "Incomum",
        "hp": 5850,
        "atk": 272,
        "def": 238,
        "spd": 119,
        "skills": [
            {
                "id": "tk_surface",
                "name": "Primeira Forma: Corte da Superfície da Água",
                "kind": "atk",
                "power": 420,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "tk_wheel",
                "name": "Segunda Forma: Roda da Água",
                "kind": "atk",
                "power": 560,
                "cooldown": 1,
                "ai": 1.08
            },
            {
                "id": "tk_flow",
                "name": "Terceira Forma: Dança Fluida",
                "kind": "atk",
                "power": 760,
                "cooldown": 3,
                "ai": 1.35
            },
            {
                "id": "tk_tide",
                "name": "Quarta Forma: Maré Impactante",
                "kind": "bigAtk",
                "power": 980,
                "cooldown": 5,
                "ai": 1.8
            },
            {
                "id": "tk_whirlpool",
                "name": "Sexta Forma: Redemoinho Giratório",
                "kind": "bigAtk",
                "power": 1240,
                "cooldown": 7,
                "ai": 2.1
            }
        ]
    },
    "zenitsu": {
        "id": "zenitsu",
        "name": "Zenitsu Agatsuma",
        "rarity": "Épico",
        "hp": 4620,
        "atk": 270,
        "def": 154,
        "spd": 214,
        "skills": [
            {
                "id": "zn_first",
                "name": "Primeira Forma: Hekireki Issen",
                "kind": "atk",
                "power": 545,
                "cooldown": 0,
                "ai": 1.2,
                "shortName": "Hekireki"
            },
            {
                "id": "zn_seventh",
                "name": "Sétima Forma: Honoikazuchi no Kami",
                "kind": "bigAtk",
                "power": 1540,
                "cooldown": 8,
                "startCd": 4,
                "ai": 2.5,
                "shortName": "7ª Forma",
                "cinematic": true
            }
        ]
    },
    "kuririn": {
        "id": "kuririn",
        "name": "Kuririn",
        "rarity": "Comum",
        "hp": 4100,
        "atk": 148,
        "def": 120,
        "spd": 116,
        "skills": [
            {
                "id": "kr_punch",
                "name": "Golpe de Artes Marciais",
                "kind": "atk",
                "power": 215,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "kr_combo",
                "name": "Sequência do Mestre Kame",
                "kind": "atk",
                "power": 290,
                "cooldown": 2,
                "ai": 1.12
            },
            {
                "id": "kr_guard",
                "name": "Postura de Treino",
                "kind": "guard",
                "cooldown": 5,
                "ai": 1.1
            }
        ]
    },
    "goku": {
        "id": "goku",
        "name": "Goku",
        "rarity": "Comum",
        "hp": 5050,
        "atk": 208,
        "def": 168,
        "spd": 122,
        "skills": [
            {
                "id": "gk_staff",
                "name": "Golpe com Bastão",
                "kind": "atk",
                "power": 320,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "gk_rush",
                "name": "Investida do Bastão",
                "kind": "atk",
                "power": 430,
                "cooldown": 2,
                "ai": 1.15
            },
            {
                "id": "gk_kame",
                "name": "Kamehameha",
                "kind": "bigAtk",
                "power": 760,
                "cooldown": 6,
                "ai": 1.65
            }
        ]
    },
    "oozaru": {
        "id": "oozaru",
        "name": "Oozaru",
        "rarity": "Exclusiva",
        "hp": 8600,
        "atk": 390,
        "def": 280,
        "spd": 80,
        "skills": [
            {
                "id": "oz_smash",
                "name": "Esmagamento Selvagem",
                "kind": "atk",
                "power": 720,
                "cooldown": 0,
                "ai": 1
            },
            {
                "id": "oz_crush",
                "name": "Pisotear Brutal",
                "kind": "bigAtk",
                "power": 1320,
                "cooldown": 4,
                "ai": 1.7
            },
            {
                "id": "oz_roar",
                "name": "Rugido Primitivo",
                "kind": "buffAtk",
                "atkUp": 95,
                "cooldown": 6,
                "ai": 1.2
            }
        ]
    },
    "sanji": {
        "id": "sanji",
        "name": "Sanji",
        "rarity": "Épico",
        "hp": 5900,
        "atk": 360,
        "def": 245,
        "spd": 158,
        "skills": [
            {
                "id": "sj_collier",
                "name": "Collier Shoot",
                "kind": "fire",
                "power": 520,
                "cooldown": 1,
                "ai": 1.2,
                "burn": {
                    "chance": 0.15,
                    "dmg": 90,
                    "turns": 1
                }
            },
            {
                "id": "sj_hachis",
                "name": "Extra Hachis",
                "kind": "bigAtk",
                "power": 820,
                "cooldown": 4,
                "startCd": 2,
                "ai": 1.75,
                "hits": 3,
                "burn": {
                    "chance": 0.05,
                    "dmg": 80,
                    "turns": 2
                }
            },
            {
                "id": "sj_flambage",
                "name": "Flambage Shot",
                "kind": "fire",
                "power": 1120,
                "cooldown": 5,
                "startCd": 2,
                "ai": 2.05,
                "burn": {
                    "chance": 1,
                    "dmg": 150,
                    "turns": 3
                },
                "stunChance": 0.2,
                "stunTurns": 2
            },
            {
                "id": "sj_mouton",
                "name": "Mouton Shot",
                "kind": "bigAtk",
                "power": 920,
                "cooldown": 4,
                "startCd": 1,
                "ai": 1.8
            }
        ]
    },
    "sogeking": {
        "id": "sogeking",
        "name": "Sogeking",
        "rarity": "Raro",
        "hp": 4300,
        "atk": 285,
        "def": 185,
        "spd": 142,
        "skills": [
            {
                "id": "sg_star",
                "name": "Estrela Explosiva",
                "kind": "fire",
                "power": 330,
                "cooldown": 0,
                "ai": 1.1,
                "burn": {
                    "chance": 0.5,
                    "dmg": 80,
                    "turns": 2
                }
            },
            {
                "id": "sg_smoke",
                "name": "Estrela de Fumaça",
                "kind": "stun",
                "power": 280,
                "cooldown": 3,
                "ai": 1.35,
                "stunChance": 0.5,
                "stunTurns": 1
            },
            {
                "id": "sg_firebird",
                "name": "Firebird Star",
                "kind": "fire",
                "power": 680,
                "cooldown": 5,
                "startCd": 3,
                "ai": 1.8,
                "burn": {
                    "chance": 1,
                    "dmg": 130,
                    "turns": 2
                }
            },
            {
                "id": "sg_impact",
                "name": "Impact Dial",
                "kind": "bigAtk",
                "power": 1080,
                "cooldown": 6,
                "startCd": 4,
                "ai": 2.05,
                "recoil": {
                    "mode": "hpPct",
                    "value": 0.08
                }
            },
            {
                "id": "sg_kabuto",
                "name": "Kabuto: Disparo Preciso",
                "kind": "bigAtk",
                "power": 760,
                "cooldown": 4,
                "ai": 1.65
            }
        ]
    },
    "luffy_gear_second": {
        "id": "luffy_gear_second",
        "name": "Luffy Gear Second",
        "rarity": "Exclusiva",
        "hp": 8600,
        "atk": 455,
        "def": 315,
        "spd": 185,
        "skills": [
            {
                "id": "g2_jet_pistol",
                "name": "Jet Pistol",
                "kind": "bigAtk",
                "power": 1300,
                "cooldown": 1,
                "ai": 1.7,
                "gearRecoil": true
            },
            {
                "id": "g2_jet_gatling",
                "name": "Jet Gatling",
                "kind": "bigAtk",
                "power": 1900,
                "cooldown": 4,
                "startCd": 2,
                "ai": 2.25,
                "hits": 5,
                "gearRecoil": true
            },
            {
                "id": "g2_giant_pistol",
                "name": "Giant Pistol",
                "kind": "bigAtk",
                "power": 2100,
                "cooldown": 5,
                "startCd": 2,
                "ai": 2.15,
                "spdDownPct": 0.1,
                "turns": 2
            },
            {
                "id": "g2_jet_bazooka",
                "name": "Jet Bazooka",
                "kind": "bigAtk",
                "power": 2050,
                "cooldown": 4,
                "startCd": 1,
                "ai": 2.2,
                "stunChance": 1,
                "stunTurns": 1,
                "gearRecoil": true
            },
            {
                "id": "g2_giant_whip",
                "name": "Giant Whip",
                "kind": "bigAtk",
                "power": 1250,
                "cooldown": 6,
                "startCd": 3,
                "ai": 2,
                "targeting": "aoe",
                "aoeScale": 0.7,
                "spdDownPct": 0.2,
                "turns": 3
            },
            {
                "id": "g2_jet_stamp",
                "name": "Jet Stamp",
                "kind": "bigAtk",
                "power": 1450,
                "cooldown": 3,
                "ai": 1.9,
                "gearRecoil": true
            }
        ]
    },
    "zoro_ashura": {
        "id": "zoro_ashura",
        "name": "Zoro (Ashura)",
        "rarity": "Exclusiva",
        "hp": 8800,
        "atk": 450,
        "def": 335,
        "spd": 165,
        "skills": [
            {
                "id": "za_onigiri",
                "name": "Oni Giri",
                "kind": "bleedAtk",
                "power": 850,
                "cooldown": 0,
                "ai": 1.15,
                "bleed": {
                    "chance": 0.2,
                    "dmg": 130,
                    "turns": 2
                }
            },
            {
                "id": "za_tatsumaki",
                "name": "Tatsu Maki",
                "kind": "bleedAtk",
                "power": 650,
                "cooldown": 3,
                "ai": 1.45,
                "targeting": "aoe",
                "aoeScale": 0.7
            },
            {
                "id": "za_shishi",
                "name": "Shishi Sonson",
                "kind": "bleedAtk",
                "power": 1420,
                "cooldown": 4,
                "startCd": 2,
                "ai": 2,
                "bleed": {
                    "chance": 1,
                    "dmg": 175,
                    "turns": 3
                }
            },
            {
                "id": "za_cannon",
                "name": "Nigiri Torre de Canhão",
                "kind": "bleedAtk",
                "power": 1680,
                "cooldown": 5,
                "startCd": 2,
                "ai": 2.1,
                "hits": 3,
                "bleed": {
                    "chance": 0.45,
                    "dmg": 150,
                    "turns": 2
                }
            },
            {
                "id": "za_ashura",
                "name": "Ashura",
                "kind": "bleedAtk",
                "power": 2800,
                "cooldown": 8,
                "startCd": 5,
                "ai": 2.8,
                "hits": 3,
                "bleed": {
                    "chance": 1,
                    "dmg": 220,
                    "turns": 4
                },
                "cinematic": true
            }
        ]
    },
    "escanor_ex": {
        "id": "escanor_ex",
        "name": "Escanor",
        "rarity": "Exclusiva",
        "exTier": "EX1",
        "hp": 15500,
        "atk": 1550,
        "def": 980,
        "spd": 210,
        "skills": [
            {
                "id": "ex_rhitta",
                "name": "Machado Divino Rhitta",
                "kind": "bigAtk",
                "power": 2450,
                "cooldown": 2,
                "ai": 1.8
            },
            {
                "id": "ex_cruel_sun",
                "name": "Sol Cruel",
                "kind": "fire",
                "power": 3450,
                "cooldown": 4,
                "startCd": 2,
                "ai": 2.25,
                "burn": {
                    "chance": 1,
                    "dmg": 420,
                    "turns": 3
                },
                "cinematic": true
            },
            {
                "id": "ex_pride_flare",
                "name": "Pride Flare",
                "kind": "fire",
                "power": 2700,
                "cooldown": 6,
                "startCd": 3,
                "ai": 2.35,
                "targeting": "aoe",
                "aoeScale": 0.85,
                "burn": {
                    "chance": 1,
                    "dmg": 380,
                    "turns": 3
                },
                "cinematic": true
            },
            {
                "id": "ex_heat_release",
                "name": "Rhitta: Liberação de calor",
                "kind": "fire",
                "power": 3300,
                "cooldown": 6,
                "startCd": 4,
                "ai": 2.25,
                "burn": {
                    "chance": 1,
                    "dmg": 450,
                    "turns": 4
                }
            },
            {
                "id": "ex_super_slash",
                "name": "Super Corte",
                "kind": "bigAtk",
                "power": 4700,
                "cooldown": 7,
                "startCd": 4,
                "ai": 2.75,
                "cinematic": true
            },
            {
                "id": "ex_pride_sin",
                "name": "Pecado do Orgulho",
                "kind": "debuff",
                "cooldown": 10,
                "startCd": 8,
                "ai": 2.5,
                "defDownPct": 0.5,
                "turns": 4,
                "quote": "Eu sou aquele que ocupa o topo dos clãs, dos sete pecados capitais, o pecado do orgulho do leão, Lord Escanor!"
            }
        ]
    }
};

const EXCLUSIVE_TEAM_GROUPS = [
    [
        "naruto",
        "naruto_1tail"
    ],
    [
        "sasuke",
        "sasuke_curse",
        "sasuke_curse_v2"
    ],
    [
        "asta",
        "asta_black"
    ]
];


const TEAM_SYNERGIES = [
    {
        id: "sinergia_time_7",
        name: "Time 7",
        mode: "count",
        members: ["naruto", "naruto_1tail", "sasuke", "sasuke_curse", "sasuke_curse_v2", "sakura", "kakashi"],
        count: 3,
        atkPct: 0.06,
        defPct: 0.06
    },
    {
        id: "sinergia_chapeus_de_palha",
        name: "Chapéus de Palha",
        mode: "count",
        members: ["luffy", "luffy_gear_second", "zoro", "zoro_ashura", "nami", "usopp", "sogeking", "sanji"],
        count: 3,
        atkPct: 0.08,
        defPct: 0.04
    },
    {
        id: "sinergia_gojo_geto",
        name: "Inventário Oculto",
        mode: "all",
        members: ["gojo", "geto"],
        atkPct: 0.05,
        defPct: 0.08
    }
];

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function validarDeck(deck) {
    if (!Array.isArray(deck) || deck.length !== 3) {
        return "Deck inválido. Escolha exatamente 3 cartas.";
    }

    const cartasUnicas = new Set(deck);
    if (cartasUnicas.size < 3) {
        return "Você não pode escolher cartas repetidas.";
    }

    for (const id of deck) {
        if (!cards[id]) {
            return "Carta não encontrada no battle.js: " + id;
        }
    }

    for (const grupo of EXCLUSIVE_TEAM_GROUPS) {
        const escolhidas = deck.filter(id => grupo.includes(id));
        if (escolhidas.length > 1) {
            return "Você não pode usar variações do mesmo personagem na mesma equipe: " + escolhidas.join(", ");
        }
    }

    return null;
}

function criarCarta(id) {
    const base = cards[id];

    if (!base) {
        throw new Error("Carta não encontrada no battle.js: " + id);
    }

    const carta = {
        id: base.id,
        name: base.name,
        rarity: base.rarity,
        exTier: base.exTier || null,
        hpMax: base.hp,
        hp: base.hp,
        baseAtk: base.atk,
        atk: base.atk,
        baseDef: base.def,
        def: base.def,
        baseSpd: base.spd || 100,
        spd: base.spd || 100,
        ativa: true,
        cooldowns: {},
        effects: [],
        usedOnce: {},
        bakugouStacks: 0,
        gearStacks: 0,
        skills: clone(base.skills)
    };

    for (const skill of carta.skills) {
        if (skill.startCd && skill.startCd > 0) {
            carta.cooldowns[skill.id] = skill.startCd;
        }
    }

    return carta;
}

function criarInvocacao(template) {
    if (!template || !template.stats) return null;

    const hpMax = template.stats.hpMax || template.stats.hp || 1;
    const summon = {
        id: template.id || "summon",
        name: template.name || "Invocação",
        artText: template.artText || "SUM",
        img: template.img || null,
        imgFit: template.imgFit || "contain",
        imgPos: template.imgPos || "50% 50%",
        imgZoom: template.imgZoom || 1,
        hpMax,
        hp: hpMax,
        baseAtk: template.stats.atk || 0,
        atk: template.stats.atk || 0,
        baseDef: template.stats.def || 0,
        def: template.stats.def || 0,
        baseSpd: template.stats.spd || 100,
        spd: template.stats.spd || 100,
        turns: template.turns ?? 3,
        cooldowns: {},
        effects: [],
        skills: clone(template.moves || template.skills || [])
    };

    for (const skill of summon.skills) {
        const startCd = skill.startCd || 0;
        if (startCd > 0) {
            summon.cooldowns[skill.id] = startCd;
        }
    }

    return summon;
}

function summonViva(player) {
    return player && player.summon && player.summon.hp > 0;
}

function tickCooldownsDaInvocacao(summon) {
    if (!summon || !summon.cooldowns) return;

    for (const id in summon.cooldowns) {
        if (summon.cooldowns[id] > 0) {
            summon.cooldowns[id]--;
        }
    }
}

function escolherSkillInvocacao(summon) {
    if (!summon || !Array.isArray(summon.skills) || summon.skills.length === 0) {
        return null;
    }

    const disponiveis = summon.skills.filter(skill => (summon.cooldowns[skill.id] || 0) <= 0);
    if (disponiveis.length === 0) return null;

    return disponiveis
        .slice()
        .sort((a, b) => (b.ai || 1) - (a.ai || 1))[0];
}

function processarInvocacaoNoInicioDoTurno(partida, jogador) {
    const player = partida["player" + jogador];
    const inimigo = inimigoDe(jogador);
    const inimigoPlayer = partida["player" + inimigo];

    if (!summonViva(player)) return [];

    const summon = player.summon;
    const alvo = cartaAtual(partida, inimigo);
    const mensagens = [];

    tickCooldownsDaInvocacao(summon);

    if (summon.turns !== 999 && summon.turns !== undefined) {
        summon.turns--;
    }

    if (summon.turns !== undefined && summon.turns <= 0) {
        mensagens.push(summon.name + " desapareceu.");
        player.summon = null;
        return mensagens;
    }

    if (!alvo || alvo.hp <= 0) {
        return mensagens;
    }

    const skill = escolherSkillInvocacao(summon);
    if (!skill) {
        mensagens.push(summon.name + " aguarda uma abertura.");
        return mensagens;
    }

    const dano = calcularDano(summon, alvo, skill);
    alvo.hp = Math.max(0, alvo.hp - dano);

    summon.cooldowns[skill.id] = skill.cooldown ?? skill.cd ?? 0;

    let msg = summon.name + " usou " + skill.name + " e causou " + dano + " de dano em " + labelCarta(partida, inimigo, alvo) + ".";

    if (skill.kind === "fire" && skill.burn && chance(skill.burn.chance)) {
        adicionarEfeito(alvo, {
            type: "burn",
            turns: skill.burn.turns,
            dmg: skill.burn.dmg
        });
        msg += " Queimadura aplicada.";
    }

    if (skill.kind === "bleedAtk" && skill.bleed && chance(skill.bleed.chance ?? 1)) {
        adicionarEfeito(alvo, {
            type: "bleed",
            turns: skill.bleed.turns,
            dmg: skill.bleed.dmg
        });
        msg += " Sangramento aplicado.";
    }

    if (aplicarStunSeHouver(alvo, skill)) {
        msg += " Atordoamento aplicado.";
    }

    msg += aplicarFullCounterSeHouver(summon, alvo, dano);

    mensagens.push(msg);

    const antes = inimigoPlayer.ativa;
    passarParaProximaCartaViva(partida, inimigo);
    const depois = inimigoPlayer.ativa;

    if (antes !== depois) {
        mensagens.push(nomeJogador(partida, inimigo) + " enviou " + inimigoPlayer.deck[depois].name + " para a batalha.");
    }

    return mensagens;
}

function aplicarDanoEmInvocacao(partida, jogadorDonoDaInvocacao, skill, danoBase) {
    const player = partida["player" + jogadorDonoDaInvocacao];

    if (!summonViva(player)) return "";

    const summon = player.summon;
    const danoSummon = Math.max(0, Math.floor((danoBase || skill.power || 0) * (skill.aoeScale || 0.55) + (skill.power || 0) * 0.15 - summon.def * 0.20));

    summon.hp = Math.max(0, summon.hp - danoSummon);

    if (summon.hp <= 0) {
        const nome = summon.name;
        player.summon = null;
        return " " + nome + " recebeu " + danoSummon + " de dano e foi derrotado.";
    }

    return " " + summon.name + " recebeu " + danoSummon + " de dano.";
}


function possuiMembroSinergia(deckIds, membro) {
    return deckIds.includes(membro);
}

function sinergiaAtiva(deckIds, sinergia) {
    if (!sinergia || !Array.isArray(sinergia.members)) return false;

    if (sinergia.mode === "all") {
        return sinergia.members.every(membro => possuiMembroSinergia(deckIds, membro));
    }

    const total = sinergia.members.filter(membro => possuiMembroSinergia(deckIds, membro)).length;
    return total >= (sinergia.count || 3);
}

function aplicarSinergiasNoPlayer(player, deckOriginalIds) {
    if (!player || !Array.isArray(player.deck)) return [];

    const ids = Array.isArray(deckOriginalIds) ? deckOriginalIds : player.deck.map(c => c.id);
    const ativadas = [];

    for (const sinergia of TEAM_SYNERGIES) {
        if (!sinergiaAtiva(ids, sinergia)) continue;

        for (const carta of player.deck) {
            if (!carta || carta.hp <= 0) continue;
            carta.effects = carta.effects.filter(e => e.type !== "synergyBuff" || e.source !== sinergia.id);
            carta.effects.push({
                type: "synergyBuff",
                source: sinergia.id,
                name: sinergia.name,
                atkPct: sinergia.atkPct || 0,
                defPct: sinergia.defPct || 0
            });
            recalcularStats(carta);
        }

        ativadas.push(sinergia.name);
    }

    return ativadas;
}

function aplicarSinergias(partida, deck1, deck2) {
    partida.sinergias = {
        1: aplicarSinergiasNoPlayer(partida.player1, deck1),
        2: aplicarSinergiasNoPlayer(partida.player2, deck2)
    };
}

function criarPartida(deck1, deck2, opcoes = {}) {
    const erroDeck1 = validarDeck(deck1);
    if (erroDeck1) throw new Error("Player 1: " + erroDeck1);

    const erroDeck2 = validarDeck(deck2);
    if (erroDeck2) throw new Error("Player 2: " + erroDeck2);

    const partida = {
        turno: 1,
        finalizada: false,
        vencedor: null,
        sinergias: { 1: [], 2: [] },
        playerNames: {
            1: opcoes.player1Name || opcoes.nome1 || "Player 1",
            2: opcoes.player2Name || opcoes.nome2 || "Player 2"
        },
        player1: {
            nome: opcoes.player1Name || opcoes.nome1 || "Player 1",
            deck: deck1.map(criarCarta),
            ativa: 0,
            summon: null
        },
        player2: {
            nome: opcoes.player2Name || opcoes.nome2 || "Player 2",
            deck: deck2.map(criarCarta),
            ativa: 0,
            summon: null
        }
    };

    aplicarSinergias(partida, deck1, deck2);

    return partida;
}

function nomeJogador(partida, jogador) {
    return (
        partida?.playerNames?.[jogador] ||
        partida?.["player" + jogador]?.nome ||
        ("Player " + jogador)
    );
}

function labelCarta(partida, jogador, carta) {
    return nomeJogador(partida, jogador) + " (" + carta.name + ")";
}

function cartaAtual(partida, player) {
    return partida["player" + player].deck[partida["player" + player].ativa];
}

function inimigoDe(jogador) {
    return jogador === 1 ? 2 : 1;
}

function chance(valor) {
    return Math.random() < (valor ?? 1);
}

function adicionarEfeito(carta, efeito) {
    const existente = carta.effects.find(e => e.type === efeito.type);

    if (existente) {
        existente.turns = Math.max(existente.turns || 0, efeito.turns || 0);

        for (const chave in efeito) {
            if (chave !== "type") existente[chave] = efeito[chave];
        }
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
    carta.spd = carta.baseSpd || carta.spd || 100;

    // Passiva simples do Zoro Ashura:
    // quanto menos HP, mais ataque ele ganha.
    // Escala aproximada: +2.5% ATK a cada 10% de HP perdido.
    if (carta.id === "zoro_ashura" && carta.hpMax > 0) {
        const hpPerdidoPct = Math.max(0, 1 - (carta.hp / carta.hpMax));
        const bonusPct = Math.floor(hpPerdidoPct * 10) * 0.025;
        carta.atk += Math.floor(carta.baseAtk * bonusPct);
    }

    // Passiva simples do Bakugou:
    // stacks acumulados aumentam o ATK.
    if (carta.id === "bakugou" && carta.bakugouStacks) {
        carta.atk += carta.bakugouStacks * 10;
    }

    // Gear Second: stacks pequenos de pressão dão ATK/SPD.
    if (carta.id === "luffy_gear_second" && carta.gearStacks) {
        carta.atk += Math.floor(carta.baseAtk * 0.01 * carta.gearStacks);
        carta.spd += Math.floor(carta.baseSpd * 0.02 * carta.gearStacks);
    }

    for (const efeito of carta.effects) {
        if (efeito.type === "atkBuff") carta.atk += efeito.amount || 0;
        if (efeito.type === "defBuff") carta.def += efeito.amount || 0;
        if (efeito.type === "spdBuff") carta.spd += efeito.amount || 0;

        if (efeito.type === "synergyBuff") {
            if (efeito.atkPct) carta.atk += Math.floor(carta.baseAtk * efeito.atkPct);
            if (efeito.defPct) carta.def += Math.floor(carta.baseDef * efeito.defPct);
        }

        if (efeito.type === "atkDefBuff") {
            carta.atk += efeito.atkUp || 0;
            carta.def += efeito.defUp || 0;
        }

        if (efeito.type === "atkSpdBuff") {
            carta.atk += efeito.atkUp || 0;
            carta.spd += efeito.spdUp || 0;
        }

        if (efeito.type === "defDown") {
            carta.def = Math.max(0, Math.floor(carta.def * (1 - (efeito.value || 0))));
        }

        if (efeito.type === "atkDown") {
            carta.atk = Math.max(0, carta.atk - (efeito.amount || 0));
        }

        if (efeito.type === "spdDown") {
            carta.spd = Math.max(1, Math.floor(carta.spd * (1 - (efeito.value || 0))));
        }
    }
}
function calcularDano(atacante, defensor, skill) {
    const poder = skill.power || 0;

    const evasao = pegarEfeito(defensor, "evasion");
    if (evasao && chance(evasao.chance || 0.5)) {
        return 0;
    }

    let dano = Math.floor(
        poder +
        atacante.atk * 0.35 -
        defensor.def * 0.30
    );

    // Multi-hit/hits agora têm impacto real sem explodir o balanceamento:
    // cada hit extra adiciona 12% do dano base.
    const hits = skill.hits || skill.multiHit || 1;
    if (hits > 1) {
        dano = Math.floor(dano * (1 + ((hits - 1) * 0.12)));
    }

    if (skill.multiplier && skill.kind !== "fullCounter") {
        dano = Math.floor(dano * skill.multiplier);
    }

    if (skill.crit && chance(skill.crit.chance)) {
        dano += skill.crit.bonus || 0;
    }

    if (temEfeito(defensor, "guard")) {
        dano = Math.floor(dano * 0.70);
        removerEfeito(defensor, "guard");
    }

    return Math.max(0, dano);
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

function processarInicioTurno(carta) {
    let mensagens = [];

    // Bakugou acumula poder explosivo por turno.
    if (carta.id === "bakugou") {
        carta.bakugouStacks = Math.min(6, (carta.bakugouStacks || 0) + 1);
        recalcularStats(carta);
        mensagens.push(carta.name + " acumulou poder explosivo (" + carta.bakugouStacks + "/6).");
    }

    // Rock Lee no 5º Portão perde HP por turno.
    if (carta.id === "rock_lee_gate") {
        const danoGate = Math.max(1, Math.floor(carta.hpMax * 0.06));
        carta.hp = Math.max(1, carta.hp - danoGate);
        mensagens.push(carta.name + " sofreu " + danoGate + " pelo esforço do 5º Portão.");
    }

    // Gear Second pressiona o corpo e escala levemente.
    if (carta.id === "luffy_gear_second") {
        carta.gearStacks = Math.min(10, (carta.gearStacks || 0) + 1);
        recalcularStats(carta);
        mensagens.push(carta.name + " acelerou o fluxo do Gear Second (" + carta.gearStacks + "/10).");
    }

    const burn = pegarEfeito(carta, "burn");
    if (burn) {
        carta.hp = Math.max(0, carta.hp - burn.dmg);
        mensagens.push(carta.name + " sofreu " + burn.dmg + " de queimadura.");
    }

    const bleed = pegarEfeito(carta, "bleed");
    if (bleed) {
        carta.hp = Math.max(0, carta.hp - bleed.dmg);
        mensagens.push(carta.name + " sofreu " + bleed.dmg + " de sangramento.");
    }

    const hot = pegarEfeito(carta, "hot");
    if (hot) {
        const cura = hot.perTurn || 0;
        carta.hp = Math.min(carta.hpMax, carta.hp + cura);
        mensagens.push(carta.name + " recuperou " + cura + " HP.");
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

function aplicarRecoil(atacante, skill) {
    if (!skill.recoil) return 0;

    let danoRecoil = 0;

    if (skill.recoil.mode === "flat") {
        danoRecoil = skill.recoil.value || 0;
    }

    if (skill.recoil.mode === "hpPct") {
        danoRecoil = Math.floor(atacante.hpMax * (skill.recoil.value || 0));
    }

    atacante.hp = Math.max(0, atacante.hp - danoRecoil);
    return danoRecoil;
}

function aplicarDebuffs(defensor, skill) {
    let msg = "";

    if (skill.defDownPct) {
        adicionarEfeito(defensor, {
            type: "defDown",
            value: skill.defDownPct,
            turns: skill.turns || 2
        });
        msg += " Defesa reduzida.";
    }

    if (skill.spdDownPct) {
        adicionarEfeito(defensor, {
            type: "spdDown",
            value: skill.spdDownPct,
            turns: skill.turns || 2
        });
        msg += " Velocidade reduzida.";
    }

    if (skill.slow) {
        adicionarEfeito(defensor, {
            type: "spdDown",
            value: skill.slow.factor || 0.2,
            turns: skill.slow.turns || 2
        });
        msg += " Lentidão aplicada.";
    }

    return msg;
}

function aplicarStunSeHouver(defensor, skill) {
    const chanceStun = skill.stunChance ?? (skill.kind === "stun" ? 1 : null);

    if (chanceStun !== null && chance(chanceStun)) {
        adicionarEfeito(defensor, {
            type: "stun",
            turns: skill.stunTurns || 1
        });
        return true;
    }

    if (skill.daze && chance(skill.daze.chance ?? 1)) {
        adicionarEfeito(defensor, {
            type: "stun",
            turns: skill.daze.turns || 1
        });
        return true;
    }

    return false;
}


function aplicarFullCounterSeHouver(atacante, defensor, danoCausado) {
    const counter = pegarEfeito(defensor, "fullCounter");

    if (!counter || danoCausado <= 0 || atacante.hp <= 0) {
        return "";
    }

    const danoCounter = Math.max(1, Math.floor(danoCausado * (counter.multiplier || 2)));
    atacante.hp = Math.max(0, atacante.hp - danoCounter);
    removerEfeito(defensor, "fullCounter");

    return " Reação Total ativada: " + defensor.name + " devolveu " + danoCounter + " de dano.";
}

function aplicarRemoveBuffSeHouver(defensor, skill) {
    if (!skill.removeBuff) return "";

    const antes = defensor.effects.length;
    defensor.effects = defensor.effects.filter(e => ![
        "atkBuff",
        "defBuff",
        "spdBuff",
        "atkDefBuff",
        "atkSpdBuff",
        "guard",
        "evasion",
        "hot"
    ].includes(e.type));

    if (defensor.effects.length !== antes) {
        recalcularStats(defensor);
        return " Buffs removidos.";
    }

    return "";
}

function aplicarSelfBuffAfter(atacante, skill) {
    if (!skill.selfBuffAfter) return "";

    adicionarEfeito(atacante, {
        type: "atkBuff",
        amount: skill.selfBuffAfter.atkUp || 0,
        turns: skill.selfBuffAfter.turns || 2
    });

    return " " + atacante.name + " ganhou força após o ataque.";
}

function aplicarGearRecoil(atacante, skill) {
    if (!skill.gearRecoil) return 0;

    const dano = Math.max(1, Math.floor(atacante.hpMax * 0.04));
    atacante.hp = Math.max(0, atacante.hp - dano);
    atacante.gearStacks = Math.min(10, (atacante.gearStacks || 0) + 1);
    recalcularStats(atacante);

    return dano;
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
    const atacanteLabel = labelCarta(partida, jogador, atacante);
    const defensorLabel = labelCarta(partida, inimigoDe(jogador), defensor);

    if (atacante.hp <= 0) {
        return { erro: "Sua carta ativa está derrotada." };
    }

    if (temEfeito(atacante, "stun")) {
        removerEfeito(atacante, "stun");
        partida.turno = inimigoDe(jogador);
        tickCooldownsDoPlayer(partida, partida.turno);

        const mensagensInvocacao = processarInvocacaoNoInicioDoTurno(partida, partida.turno);
        verificarDerrota(partida);

        return {
            sucesso: true,
            tipo: "stun_skip",
            mensagem: atacanteLabel + " está paralisado e perdeu o turno." + (mensagensInvocacao.length ? " " + mensagensInvocacao.join(" ") : ""),
            turno: partida.turno,
            finalizada: partida.finalizada,
            vencedor: partida.vencedor
        };
    }

    const skill = atacante.skills.find(s => s.id === skillId);

    if (!skill) {
        return { erro: "Skill não encontrada: " + skillId };
    }

    const cdAtual = atacante.cooldowns[skill.id] || 0;

    if (cdAtual > 0) {
        return { erro: "Skill em cooldown: " + cdAtual };
    }

    if ((skill.once || skill.oncePerBattle) && atacante.usedOnce && atacante.usedOnce[skill.id]) {
        return { erro: "Essa habilidade só pode ser usada uma vez por batalha." };
    }

    let dano = 0;
    let cura = 0;
    let mensagem = atacanteLabel + " usou " + skill.name + ".";

    const damageKinds = new Set([
        "atk", "bigAtk", "fire", "bleedAtk", "atkCrit", "daze", "stun",
        "taunt", "debuff"
    ]);

    if (damageKinds.has(skill.kind) || skill.power) {
        dano = calcularDano(atacante, defensor, skill);
        defensor.hp = Math.max(0, defensor.hp - dano);

        mensagem = atacanteLabel + " usou " + skill.name + " e causou " + dano + " de dano em " + defensorLabel + ".";

        if (skill.kind === "atkCrit" && skill.crit && dano > 0) {
            mensagem += " Chance de crítico aplicada.";
        }

        if (skill.kind === "fire" && skill.burn && chance(skill.burn.chance)) {
            adicionarEfeito(defensor, {
                type: "burn",
                turns: skill.burn.turns,
                dmg: skill.burn.dmg
            });

            mensagem += " Queimadura aplicada.";
        }

        if (skill.kind === "bleedAtk" && skill.bleed && chance(skill.bleed.chance ?? 1)) {
            adicionarEfeito(defensor, {
                type: "bleed",
                turns: skill.bleed.turns,
                dmg: skill.bleed.dmg
            });

            mensagem += " Sangramento aplicado.";
        }

        if (aplicarStunSeHouver(defensor, skill)) {
            mensagem += " Atordoamento aplicado.";
        }

        mensagem += aplicarDebuffs(defensor, skill);
        mensagem += aplicarRemoveBuffSeHouver(defensor, skill);
        mensagem += aplicarFullCounterSeHouver(atacante, defensor, dano);

        if (skill.targeting === "aoe") {
            mensagem += aplicarDanoEmInvocacao(partida, inimigoDe(jogador), skill, dano);
        }
    }

    if (skill.kind === "fullCounter") {
        adicionarEfeito(atacante, {
            type: "fullCounter",
            multiplier: skill.multiplier || 2,
            turns: skill.turns || 2
        });

        mensagem = atacanteLabel + " preparou Reação Total.";
    }

    if (skill.kind === "heal" || skill.kind === "selfHeal") {
        cura = skill.heal || 0;
        atacante.hp = Math.min(atacante.hpMax, atacante.hp + cura);
        mensagem = atacanteLabel + " usou " + skill.name + " e recuperou " + cura + " HP.";
    }

    if (skill.kind === "teamHeal") {
        cura = skill.heal || 0;
        const player = partida["player" + jogador];

        for (const carta of player.deck) {
            if (carta.hp > 0) {
                carta.hp = Math.min(carta.hpMax, carta.hp + cura);
            }
        }

        mensagem = atacanteLabel + " usou " + skill.name + " e curou a equipe em " + cura + " HP.";
    }

    if (skill.kind === "hot") {
        adicionarEfeito(atacante, {
            type: "hot",
            perTurn: skill.hot?.perTurn || skill.heal || 100,
            turns: skill.hot?.turns || skill.turns || 3
        });

        mensagem = atacanteLabel + " ativou regeneração.";
    }

    if (skill.kind === "guard" || skill.kind === "taunt") {
        adicionarEfeito(atacante, {
            type: "guard",
            turns: skill.turns || 1
        });

        mensagem = atacanteLabel + " entrou em defesa.";
    }

    if (skill.kind === "perfectDodge" || skill.kind === "evasionBuff") {
        adicionarEfeito(atacante, {
            type: "evasion",
            chance: skill.dodgeChance || 1,
            turns: skill.turns || skill.dodgeTurns || 1
        });

        mensagem = atacanteLabel + " aumentou a esquiva.";
    }

    if (skill.kind === "shadowBuff") {
        adicionarEfeito(atacante, {
            type: "atkDefBuff",
            atkUp: skill.atkUp || 0,
            defUp: skill.defUp || 0,
            turns: skill.turns || 3
        });

        const player = partida["player" + jogador];
        if (summonViva(player)) {
            adicionarEfeito(player.summon, {
                type: "atkDefBuff",
                atkUp: skill.atkUp || 0,
                defUp: skill.defUp || 0,
                turns: skill.turns || 3
            });
            mensagem = atacanteLabel + " fortaleceu a si mesmo e sua invocação.";
        } else {
            mensagem = atacanteLabel + " recebeu poder do Domínio do Monarca.";
        }
    }

    if (skill.kind === "buffAtk") {
        adicionarEfeito(atacante, {
            type: "atkBuff",
            amount: skill.atkUp || 0,
            turns: skill.turns || 3
        });

        mensagem = atacanteLabel + " recebeu aumento de ataque.";
    }

    if (skill.kind === "buffDef") {
        adicionarEfeito(atacante, {
            type: "defBuff",
            amount: skill.defUp || 0,
            turns: skill.turns || 3
        });

        mensagem = atacanteLabel + " recebeu aumento de defesa.";
    }

    if (skill.kind === "gojoSixEyes") {
        adicionarEfeito(atacante, {
            type: "atkDefBuff",
            atkUp: skill.atkUp || 0,
            defUp: skill.defUp || 0,
            turns: skill.turns || 3
        });

        const reducaoAtk = skill.atkDown || 75;
        adicionarEfeito(defensor, {
            type: "atkDown",
            amount: reducaoAtk,
            turns: skill.turns || 3
        });

        mensagem = atacanteLabel + " ativou Seis Olhos, aumentou sua defesa e reduziu o ataque de " + defensorLabel + ".";
    }

    if (skill.kind === "buffAtkDef") {
        adicionarEfeito(atacante, {
            type: "atkDefBuff",
            atkUp: skill.atkUp || 0,
            defUp: skill.defUp || 0,
            turns: skill.turns || 3
        });

        mensagem = atacanteLabel + " recebeu aumento de ataque e defesa.";
    }

    if (skill.kind === "buffAtkSpd") {
        adicionarEfeito(atacante, {
            type: "atkSpdBuff",
            atkUp: skill.atkUp || 0,
            spdUp: skill.spdUp || 0,
            turns: skill.turns || 3
        });

        mensagem = atacanteLabel + " recebeu aumento de ataque e velocidade.";
    }

    if (skill.kind === "transformSelf") {
        const player = partida["player" + jogador];
        const atual = player.ativa;
        const hpPercent = atacante.hp / atacante.hpMax;
        const novaCarta = criarCarta(skill.transformTo);

        novaCarta.hp = Math.max(1, Math.floor(novaCarta.hpMax * hpPercent));
        novaCarta.usedOnce = { ...(atacante.usedOnce || {}) };
        novaCarta.effects = (atacante.effects || []).filter(e => e.type === "synergyBuff").map(e => ({ ...e }));
        recalcularStats(novaCarta);
        novaCarta.transformedFrom = atacante.id;
        player.deck[atual] = novaCarta;

        mensagem = nomeJogador(partida, jogador) + " transformou " + atacante.name + " em " + novaCarta.name + ".";
    }

    if (skill.kind === "summon") {
        const player = partida["player" + jogador];

        if (summonViva(player)) {
            return { erro: "Você já possui uma invocação ativa." };
        }

        const summon = criarInvocacao(skill.summonTemplate);

        if (!summon) {
            return { erro: "Invocação inválida." };
        }

        player.summon = summon;

        mensagem = atacanteLabel + " usou " + skill.name + " e invocou " + summon.name + ".";
    }

    let danoRecoil = aplicarRecoil(atacante, skill);

    const danoGear = aplicarGearRecoil(atacante, skill);
    if (danoGear > 0) {
        danoRecoil += danoGear;
    }

    if (atacante.id === "bakugou" && (skill.kind === "bigAtk" || skill.cinematic) && (atacante.bakugouStacks || 0) > 4) {
        const extra = 165;
        atacante.hp = Math.max(0, atacante.hp - extra);
        danoRecoil += extra;
        atacante.bakugouStacks = Math.max(0, (atacante.bakugouStacks || 0) - 2);
        recalcularStats(atacante);
        mensagem += " O excesso de explosão consumiu stacks de Bakugou.";
    }

    if (danoRecoil > 0) {
        mensagem += " " + atacanteLabel + " sofreu " + danoRecoil + " de recoil.";
    }

    mensagem += aplicarSelfBuffAfter(atacante, skill);

    if ((skill.once || skill.oncePerBattle) && atacante.usedOnce) {
        atacante.usedOnce[skill.id] = true;
    }

    atacante.cooldowns[skill.id] = skill.cooldown || 0;

    const mensagensInicioTurno = processarInicioTurno(defensor);

    const inimigoPlayer = inimigoDe(jogador);
    const antes = partida["player" + inimigoPlayer].ativa;

    passarParaProximaCartaViva(partida, inimigoPlayer);

    const depois = partida["player" + inimigoPlayer].ativa;

    let trocaAutomatica = null;

    if (antes !== depois) {
        trocaAutomatica = partida["player" + inimigoPlayer].deck[depois].name;
    }

    verificarDerrota(partida);

    let mensagensInvocacao = [];

    if (!partida.finalizada) {
        partida.turno = inimigoDe(jogador);
        tickCooldownsDoPlayer(partida, partida.turno);
        mensagensInvocacao = processarInvocacaoNoInicioDoTurno(partida, partida.turno);

        passarParaProximaCartaViva(partida, jogador);
        passarParaProximaCartaViva(partida, inimigoDe(jogador));
        verificarDerrota(partida);
    }

    processarFimTurno(atacante);

    if (mensagensInicioTurno.length > 0) {
        mensagem += " " + mensagensInicioTurno.join(" ");
    }

    if (mensagensInvocacao.length > 0) {
        mensagem += " " + mensagensInvocacao.join(" ");
    }

    return {
        sucesso: true,
        mensagem,
        dano,
        cura,
        trocaAutomatica,
        turno: partida.turno,
        finalizada: partida.finalizada,
        vencedor: partida.vencedor,
        jogadorNome: nomeJogador(partida, jogador),
        inimigoNome: nomeJogador(partida, inimigoDe(jogador))
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

    if (player.ativa === novoIndice) {
        return { erro: "Essa carta já está ativa." };
    }

    player.ativa = novoIndice;
    partida.turno = inimigoDe(jogador);
    tickCooldownsDoPlayer(partida, partida.turno);

    const mensagensInvocacao = processarInvocacaoNoInicioDoTurno(partida, partida.turno);
    passarParaProximaCartaViva(partida, jogador);
    passarParaProximaCartaViva(partida, inimigoDe(jogador));
    verificarDerrota(partida);

    return {
        sucesso: true,
        mensagem: nomeJogador(partida, jogador) + " trocou para " + player.deck[novoIndice].name + "." + (mensagensInvocacao.length ? " " + mensagensInvocacao.join(" ") : ""),
        turno: partida.turno,
        finalizada: partida.finalizada,
        vencedor: partida.vencedor,
        jogadorNome: nomeJogador(partida, jogador)
    };
}

function listarCartasOnline() {
    return Object.values(cards).map(c => ({
        id: c.id,
        name: c.name,
        rarity: c.rarity,
        exTier: c.exTier || null,
        hp: c.hp,
        atk: c.atk,
        def: c.def,
        spd: c.spd,
        skills: c.skills
    }));
}
function tickCooldownsDoPlayer(partida, jogador) {
    const player = partida["player" + jogador];

    if (!player || !Array.isArray(player.deck)) return;

    for (const carta of player.deck) {
        if (!carta || !carta.cooldowns) continue;

        for (const id in carta.cooldowns) {
            if (carta.cooldowns[id] > 0) {
                carta.cooldowns[id]--;
            }
        }
    }

    if (player.summon) {
        tickCooldownsDaInvocacao(player.summon);
    }
}

module.exports = {
    cards,
    EXCLUSIVE_TEAM_GROUPS,
    TEAM_SYNERGIES,
    criarPartida,
    usarSkill,
    trocarCarta,
    cartaAtual,
    listarCartasOnline,
    validarDeck,
    nomeJogador
};
