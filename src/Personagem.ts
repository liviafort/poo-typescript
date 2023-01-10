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
  perdeuJogo(estado : boolean) : boolean {
    if(this.energia <= 0){
      estado = true;
      console.log("Fim de jogo, você morreu");
    }
    return estado;
  }
  verificaPassouCemAtaque() {
    if(this.ataque > 100)
      return this.ataque = 100;
  }
  verificaPassouCemDefesa() {
    if(this.defesa > 100)
      return this.defesa = 100;
  }
  verificaPassouCemEnergia() {
    if(this.energia > 100)
      return this.energia = 100;
  }
  verificaPassouCemVida() {
    if(this.vida > 100)
      return this.vida = 100;
  }
  imprimirAtributos(){
    console.log(
      `
      Guerreiro: ${this.nome}
      Vida: ${this.vida.toFixed(1)}
      Energia: ${this.energia.toFixed(1)}
      Poder de Ataque: ${this.ataque.toFixed(1)}
      Poder de Defesa: ${this.defesa.toFixed(1)}
      `
    )
  }
}