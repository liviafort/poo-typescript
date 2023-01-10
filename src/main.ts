import { Character } from "./Character";
import { Mage } from "./Mage";
import { Priest } from "./Priest";
import { Warrior } from "./Warrior";

const mage: Character = new Mage("lux");
const warrior: Character = new Warrior("sion");
const priest: Character = new Priest("seraphine")

console.log(mage, warrior, priest);
