"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Character");
const Mage_1 = require("./Mage");
const Warrior_1 = require("./Warrior");
const mage = new Mage_1.Mage("lux");
const warrior = new Warrior_1.Warrior("sion");
const person = new Character_1.Character("livia");
const personagens = [];
personagens.push(mage, warrior, person);
personagens.forEach(p => 
//console.log(p instanceof Mage ? p.atacar(): (p as Warrior).atacar())
console.log(p.atacar()));
