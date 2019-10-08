"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zoo_1 = require("./model/zoo");
var cage_1 = require("./model/cage");
var mammal_1 = require("./model/mammal");
var reptile_1 = require("./model/reptile");
var bird_1 = require("./model/bird");
var status;
var zoo = new zoo_1.Zoo("Zoológico do cioMar & casLu");
status = zoo.addCageToZoo(new cage_1.Cage(4, mammal_1.Mammal));
status = zoo.addCageToZoo(new cage_1.Cage(2, reptile_1.Reptile));
status = zoo.addCageToZoo(new cage_1.Cage(6, bird_1.Bird));
status = zoo.addAnimalToZoo(new bird_1.Bird("Canarinho"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
status = zoo.addAnimalToZoo(new bird_1.Bird("Arara"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
status = zoo.addAnimalToZoo(new reptile_1.Reptile("Cascavel"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
status = zoo.addAnimalToZoo(new reptile_1.Reptile("Lagarto"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
status = zoo.addAnimalToZoo(new reptile_1.Reptile("Jacaré"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
status = zoo.addAnimalToZoo(new mammal_1.Mammal("Leão"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
status = zoo.addAnimalToZoo(new mammal_1.Mammal("Hipopótamo"));
if (status.checkError()) {
    console.log(status.getErrorMessage());
}
console.log(zoo.toString());
