"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const Util_1 = require("./Util");
class Character {
    constructor(nome) {
        this._nome = nome;
        this._armadura = Util_1.Util.randomizar(100, 1000);
        this._vidaMaxima = Util_1.Util.randomizar(20, 1000);
        this._vidaAtual = Util_1.Util.randomizar(20, this._vidaMaxima);
    }
}
exports.Character = Character;
