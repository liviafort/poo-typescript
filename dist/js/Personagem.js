"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    //atributos direto no construtor
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    //metodos
    treinarAtaque() {
        if (this.ataque !== 100) {
            return this.ataque += Math.random() * (10 - 1) + 1;
        }
        return this.ataque;
    }
}
exports.Personagem = Personagem;
