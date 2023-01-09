//poo - jogo
import { Personagem } from "./Personagem";

//criar sem construtor -> (sem instancia)
let ash : Personagem;
//criar a partir de construtor --> (instacia do objeto)
ash = new Personagem("ash", 70, 50, 90, 100);
console.log(ash.ataque)
//acessar meotodo
ash.treinarAtaque();
console.log(ash.ataque);