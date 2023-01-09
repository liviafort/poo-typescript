export class Personagem{
  //atributos
  nome;
  energia;
  vida;
  ataque;
  defesa;
  //construtor
  constructor(nome: string, energia: number, vida: number, ataque: number, defesa: number){
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
  //metodos
  treinarAtaque(ataque: number) : number{
    return ataque;
  }
}