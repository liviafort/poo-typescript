"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//poo - jogo
const Personagem_1 = require("./Personagem");
const prompt_sync_1 = __importDefault(require("prompt-sync")); //pra ler dados do terminal
//criar sem construtor -> (sem instancia)
//criar a partir de construtor --> (instacia do objeto)
let ash = new Personagem_1.Personagem("ash", 70, 50, 90, 100);
//menu
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Descansar                      |");
    console.log("|4. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");
    option = +teclado("Escolha uma ação -> ");
    switch (option) {
        case 1:
            ash.ataque += Math.random() * 7;
            ash.energia -= Math.random() * 10;
            ash.verificaPassouCemAtaque();
            ash.verificaPassouCemEnergia();
            ash.imprimirAtributos();
            ash.perdeuJogo(false);
            break;
        case 2:
            ash.defesa += Math.random() * 5;
            ash.energia -= Math.random() * 8;
            ash.verificaPassouCemDefesa();
            ash.verificaPassouCemEnergia();
            ash.imprimirAtributos();
            ash.perdeuJogo(false);
        case 3:
            ash.energia += Math.random() * 10;
            ash.verificaPassouCemEnergia();
            ash.imprimirAtributos();
            break;
        case 4:
            ash.imprimirAtributos();
        default:
            break;
    }
}
