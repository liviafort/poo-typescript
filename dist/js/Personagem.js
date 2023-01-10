"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personagem {
    //atributos direto no construtor
    constructor(_nome, _energia, _vida, _ataque, _defesa) {
        this._nome = _nome;
        this._energia = _energia;
        this._vida = _vida;
        this._ataque = _ataque;
        this._defesa = _defesa;
    }
    //metodos
    ////////////////////////GETS E SETS////////////////////////
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    ////////////////////////////AÇÕES//////////////////////////
    batalha() {
        this.consumoEnergia();
        this.consumoVida();
    }
    treinarAtaque() {
        if (this._ataque <= 100) {
            this._ataque += this.randomizar(7);
        }
        if (this._ataque > 100)
            this._ataque = 100;
        return this._ataque;
    }
    treinarDefesa() {
        if (this._defesa <= 100) {
            this._defesa += this.randomizar(7);
        }
        if (this._defesa > 100)
            this._defesa = 100;
        return this._defesa;
    }
    consumoVida() {
        this._vida -= this.randomizar(30);
        return this._vida;
    }
    consumoEnergia() {
        this._energia -= this.randomizar(10);
        return this._energia;
    }
    aumentoDeEnergia(dias) {
        this._energia += dias;
        if (this._energia > 100)
            this._energia = 100;
        return this._energia;
    }
    /////////////////////VERIFICAÇÕES///////////////////////////
    perdeuJogo(estado) {
        if (this._energia <= 0) {
            estado = true;
        }
        return estado;
    }
    verificaPassouCemVida() {
        if (this._vida > 100)
            return this._vida = 100;
    }
    randomizar(intervalo) {
        return Math.random() * intervalo;
    }
    ////////////////CARACTERÍSTICAS DO PERSONAGEM/////////////////////
    imprimirAtributos() {
        return `
      Guerreiro: ${this._nome}
      Vida: ${this._vida.toFixed(1)}
      Energia: ${this._energia.toFixed(1)}
      Poder de Ataque: ${this._ataque.toFixed(1)}
      Poder de Defesa: ${this._defesa.toFixed(1)}
      `;
    }
}
exports.default = Personagem;
