//poo - jogo
import { Personagem } from "./Personagem";

//criar sem construtor -> (sem instancia)
let sansao : Personagem;
//criar a partir de construtor --> (instacia do objeto)
sansao = new Personagem("Ash", 30, 100, 60, 80);
console.log(sansao)