"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//poo - jogo
const Personagem_1 = require("./Personagem");
//criar sem construtor -> (sem instancia)
let ash;
//criar a partir de construtor --> (instacia do objeto)
ash = new Personagem_1.Personagem("ash", 70, 50, 90, 100);
console.log(ash.ataque);
//acessar meotodo
ash.treinarAtaque();
console.log(ash.ataque);
