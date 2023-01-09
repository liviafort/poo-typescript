export class Personagem{
  //atributos direto no construtor
  constructor(public nome: string, public energia: number, public vida: number, public ataque: number, public defesa: number){
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
  //metodos
  treinarAtaque() : number{
    if(this.ataque!==100){
      return this.ataque+=Math.random() * (10 - 1) + 1;
    }
    return this.ataque;
  }
}