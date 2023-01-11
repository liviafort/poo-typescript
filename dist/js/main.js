"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mage_1 = require("./Mage");
const Warrior_1 = require("./Warrior");
const mage = new Mage_1.Mage("lux");
const warrior = new Warrior_1.Warrior("sion");
const personagens = [];
personagens.push(mage);
personagens.push(warrior);
personagens.forEach(p => console.log(p instanceof Mage_1.Mage ? p.atacar() : p.atacar()));