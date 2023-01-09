export class Personagem{
  //atributos
  nome;
  energia;
  vida;
  ataque;
  defesa;
  //construtor
  constructor(){
    this.nome = "";
    this.energia = 0;
    this.vida = 0;
    this.ataque = 0;
    this.defesa = 0;
  }
  //metodos
  treinarAtaque() : number{
    let ganho: number = Math.random() * (10 - 1) + 1;
    return this.ataque+=ganho;
  }
}