"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name || '';
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getClassName = function () {
        var dataClass = this.constructor.toString().match(/\w+/g);
        return dataClass[1];
    };
    Animal.prototype.toString = function () {
        return "\tName: " + this.getName() + "\n\tClassification: " + this.getClassName();
    };
    return Animal;
}());
exports.Animal = Animal;
