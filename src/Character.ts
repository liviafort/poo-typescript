import { Util } from "./Util";

export class Character{
  protected _nome: string;
  protected _armadura: number;
  protected _vidaMaxima: number;
  protected _vidaAtual: number;
  constructor(nome: string) {
    this._nome = nome;
    this._armadura = Util.randomizar(100, 1_000);
    this._vidaMaxima = Util.randomizar(20, 1_000);
    this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
}
}