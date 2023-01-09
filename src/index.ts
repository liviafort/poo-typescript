//poo - jogo
import { Personagem } from "./Personagem";

//criar sem construtor -> (sem instancia)
let ash : Personagem;
//criar a partir de construtor --> (instacia do objeto)
ash = new Personagem();
//acessar atributos
ash.nome = "ash";
ash.ataque = 70;
ash.defesa = 50;
ash.energia = 90;
ash.vida = 100;

console.log(ash.ataque)
//acessar meotodo
ash.treinarAtaque();
console.log(ash.ataque);