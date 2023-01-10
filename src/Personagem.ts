export default class Personagem{
  //atributos direto no construtor
  constructor(public nome: string, public energia: number, public vida: number, public ataque: number, public defesa: number){
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
  //metodos
  ////////////////////////////AÇÕES//////////////////////////

  batalha() : void{
    this.consumoEnergia();
    this.consumoVida();
  }

  treinarAtaque() : number{
    if(this.ataque<=100){
      this.ataque+= Math.random() * 7;
    }
    if(this.ataque > 100)
      this.ataque = 100;
    return this.ataque;
  }

  treinarDefesa() : number{
    if(this.defesa<=100){
      this.defesa+= Math.random() * 7;
    }
    if(this.defesa > 100)
      this.defesa = 100;
    return this.defesa;
  }

  consumoVida() : number{
    this.vida -= Math.random() * 30
    return this.vida;
  }

  consumoEnergia() : number{
    this.energia -= Math.random() * 10
    return this.energia;
  }

  aumentoDeEnergia(dias: number) : number{
    this.energia += dias;
    if(this.energia > 100)
      this.energia = 100;
    return this.energia;
  }

  /////////////////////VERIFICAÇÕES///////////////////////////
  
  perdeuJogo(estado : boolean) : boolean {
    if(this.energia <= 0){
      estado = true;
    }
    return estado;
  }

  verificaPassouCemVida() {
    if(this.vida > 100)
      return this.vida = 100;
  }
  ////////////////CARACTERÍSTICAS DO PERSONAGEM/////////////////////
  imprimirAtributos() : string{
    return `
      Guerreiro: ${this.nome}
      Vida: ${this.vida.toFixed(1)}
      Energia: ${this.energia.toFixed(1)}
      Poder de Ataque: ${this.ataque.toFixed(1)}
      Poder de Defesa: ${this.defesa.toFixed(1)}
      `
  }
}