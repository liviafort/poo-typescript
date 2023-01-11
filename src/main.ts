import { Character } from "./Character";
import { Mage } from "./Mage";
import { Warrior } from "./Warrior";

const mage: Character = new Mage("lux");
const warrior: Character = new Warrior("sion");
const person: Character = new Character("livia");
const personagens: Character[] = [];
personagens.push(mage, warrior, person);

personagens.forEach(p => 
  //console.log(p instanceof Mage ? p.atacar(): (p as Warrior).atacar())
  console.log(p.atacar()))
