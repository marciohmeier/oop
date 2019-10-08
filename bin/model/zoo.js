"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode_1 = require("./statusCode");
var Zoo = /** @class */ (function () {
    function Zoo(name) {
        this.name = name;
        this.listOfCage = [];
    }
    Zoo.prototype.setName = function (name) {
        this.name = name;
    };
    Zoo.prototype.getName = function () {
        return this.name;
    };
    Zoo.prototype.addCageToZoo = function (cage) {
        var status = cage.validateCage();
        if (status.checkError())
            return status;
        this.listOfCage.push(cage);
        return new statusCode_1.StatusCode(true);
    };
    Zoo.prototype.addAnimalToZoo = function (animal) {
        for (var i = 0; i < this.listOfCage.length; i++) {
            var cage = this.listOfCage[i];
            var status_1 = cage.addAnimalToCage(animal);
            if (status_1.checkOK()) {
                return status_1;
            }
        }
        return new statusCode_1.StatusCode(false, "Animal " + animal.getClassName() + " (" + animal.getName() + ") cannot be added to the zoo because it has no available cage");
    };
    Zoo.prototype.toString = function () {
        return "Zoo Name: " + this.getName() + "\nCage Quantity in Zoo: " + this.listOfCage.length + "\nType of Animal acceptable: " + this.listOfCage.map(function (cage, i) { return cage.getAnimalTypeToString(); }).toString().replace(/,/g, ", ") + "\n-----------------\nCages\n-----------------\n\n" + this.listOfCage.map(function (cage, i) { return "\rCage " + (i + 1) + ":\n\r\t" + cage.toString(); }).toString().replace(/,/g, "");
    };
    return Zoo;
}());
exports.Zoo = Zoo;
