"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode = /** @class */ (function () {
    function StatusCode(error, message) {
        this.isOK = error;
        this.message = message || '';
    }
    StatusCode.prototype.getErrorMessage = function () {
        return this.message;
    };
    StatusCode.prototype.checkError = function () {
        return !this.isOK;
    };
    StatusCode.prototype.checkOK = function () {
        return this.isOK;
    };
    return StatusCode;
}());
exports.StatusCode = StatusCode;
