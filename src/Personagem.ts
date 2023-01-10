export default class Personagem{
  //atributos direto no construtor
  constructor(private _nome: string, 
    private _energia: number, 
    private _vida: number, 
    public _ataque: number, 
    public _defesa: number){
  }
  //metodos
  ////////////////////////GETS E SETS////////////////////////
  public get nome(): string{
    return this._nome;
  }

  public set nome(nome: string){
    this._nome = nome;
  }
  ////////////////////////////AÇÕES//////////////////////////

  public batalha() : void{
    this.consumoEnergia();
    this.consumoVida();
  }

  public treinarAtaque() : number{
    if(this._ataque<=100){
      this._ataque+= this.randomizar(7);
    }
    if(this._ataque > 100)
      this._ataque = 100;
    return this._ataque;
  }

  public treinarDefesa() : number{
    if(this._defesa<=100){
      this._defesa+= this.randomizar(7);
    }
    if(this._defesa > 100)
      this._defesa = 100;
    return this._defesa;
  }

  public consumoVida() : number{
    this._vida -= this.randomizar(30);
    return this._vida;
  }

  public consumoEnergia() : number{
    this._energia -= this.randomizar(10);
    return this._energia;
  }

  public aumentoDeEnergia(dias: number) : number{
    this._energia += dias;
    if(this._energia > 100)
      this._energia = 100;
    return this._energia;
  }

  /////////////////////VERIFICAÇÕES///////////////////////////
  
  public perdeuJogo(estado : boolean) : boolean {
    if(this._energia <= 0){
      estado = true;
    }
    return estado;
  }

  public verificaPassouCemVida() {
    if(this._vida > 100)
      return this._vida = 100;
  }

  private randomizar(intervalo: number) : number{
    return Math.random() * intervalo;
  }
  ////////////////CARACTERÍSTICAS DO PERSONAGEM/////////////////////
  public imprimirAtributos() : string{
    return `
      Guerreiro: ${this._nome}
      Vida: ${this._vida.toFixed(1)}
      Energia: ${this._energia.toFixed(1)}
      Poder de Ataque: ${this._ataque.toFixed(1)}
      Poder de Defesa: ${this._defesa.toFixed(1)}
      `
  }
}