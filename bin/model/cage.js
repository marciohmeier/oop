"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode_1 = require("./statusCode");
var Cage = /** @class */ (function () {
    function Cage(maxCapacity, animalType) {
        this.maxCapacity = maxCapacity;
        this.animalType = animalType;
        this.animalsList = [];
    }
    Cage.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
    };
    Cage.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    Cage.prototype.setAnimalType = function (animalType) {
        this.animalType = animalType;
    };
    Cage.prototype.getAnimalType = function () {
        return this.animalType;
    };
    Cage.prototype.getAnimalListSize = function () {
        return this.animalsList.length;
    };
    Cage.prototype.validateCage = function () {
        if (this.getMaxCapacity() < 1) {
            return new statusCode_1.StatusCode(false, "Cage's capacity should be at least 1");
        }
        return new statusCode_1.StatusCode(true);
    };
    Cage.prototype.addAnimalToCage = function (animal) {
        if (!(animal instanceof this.getAnimalType())) {
            return new statusCode_1.StatusCode(false, "Animal " + typeof animal + " is not allowed in this cage");
        }
        if (this.getAnimalListSize() >= this.getMaxCapacity()) {
            return new statusCode_1.StatusCode(false, "Cage is already full");
        }
        this.animalsList.push(animal);
        return new statusCode_1.StatusCode(true, "Animal added with success");
    };
    Cage.prototype.toString = function () {
        return "The cage capacity: " + this.maxCapacity + "\nType of animal: " + this.animalType.name + "\n\nAnimalList:\n\n    " + this.animalsList.map(function (animal, i) {
            return "\tAnimal " + (i + 1) + ":\n" + animal.toString() + "\n\n";
        }).toString().replace(",", "") + "\n      ";
    };
    return Cage;
}());
exports.Cage = Cage;
