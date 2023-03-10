"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
const Util_1 = require("./Util");
class Mage extends Character_1.Character {
    constructor(nome) {
        super(nome);
        this._armadura = Util_1.Util.randomizar(100, 1000);
        this._vidaMaxima = Util_1.Util.randomizar(200, 1000);
        this._vidaAtual = Util_1.Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util_1.Util.randomizar(100, 1000);
        this._velocidade = Util_1.Util.randomizar(10, 2000);
    }
    atacar() {
        return "Ataque do mago";
    }
}
exports.Mage = Mage;
