"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    //construtor
    constructor() {
        this.nome = "";
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
    }
    //metodos
    treinarAtaque() {
        let ganho = Math.random() * (10 - 1) + 1;
        return this.ataque += ganho;
    }
}
exports.Personagem = Personagem;
