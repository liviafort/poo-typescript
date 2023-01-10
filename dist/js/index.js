"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//poo - jogo
const Personagem_1 = __importDefault(require("./Personagem"));
const prompt_sync_1 = __importDefault(require("prompt-sync")); //pra ler dados do terminal
//criar sem construtor -> (sem instancia)
//criar a partir de construtor --> (instacia do objeto)
let ash = new Personagem_1.default("ash", 70, 50, 90, 100);
//menu
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Descansar                      |");
    console.log("|4. Imprimir atributos             |");
    console.log("|5. Batalhar                       |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");
    option = +teclado("Escolha uma ação -> ");
    switch (option) {
        case 1:
            ash.treinarAtaque();
            ash.consumoEnergia();
            console.log(ash.imprimirAtributos());
            if (ash.perdeuJogo(false)) {
                option = 9.;
            }
            ;
            break;
        case 2:
            ash.treinarDefesa();
            ash.consumoEnergia();
            console.log(ash.imprimirAtributos());
            if (ash.perdeuJogo(false)) {
                option = 9.;
            }
        case 3:
            let horas = +teclado("Quantas horas o guerreiro ash deve descansar?");
            ash.aumentoDeEnergia(horas);
            console.log(ash.imprimirAtributos());
            break;
        case 4:
            console.log(ash.imprimirAtributos());
        case 5:
            ash.batalha();
            console.log(ash.imprimirAtributos());
            if (ash.perdeuJogo(false)) {
                option = 9.;
            }
            else {
                console.log(`Você ganhou a batalha. Parabéns guerreiro ${ash.nome}!`);
            }
        default:
            break;
    }
}
console.log("Fim de jogo, você morreu");
