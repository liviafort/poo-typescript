"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mage_1 = require("./Mage");
const Priest_1 = require("./Priest");
const Warrior_1 = require("./Warrior");
const mage = new Mage_1.Mage("lux");
const warrior = new Warrior_1.Warrior("sion");
const priest = new Priest_1.Priest("seraphine");
console.log(mage, warrior, priest);
