"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
const Util_1 = require("./Util");
class Warrior extends Character_1.Character {
    constructor(nome) {
        super(nome);
        this._armadura = Util_1.Util.randomizar(1000, 10000);
        this._vidaMaxima = Util_1.Util.randomizar(200, 10000);
        this._vidaAtual = Util_1.Util.randomizar(20, this._vidaMaxima);
        this._vidaAtual = 100;
        this._forca = Util_1.Util.randomizar(100, 1000);
        this._agilidade = Util_1.Util.randomizar(100, 1000);
    }
    atacar() {
        return "Ataque do guerreiro";
    }
}
exports.Warrior = Warrior;
