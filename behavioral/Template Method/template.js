"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Шаблонный метод — это поведенческий паттерн проектирования, 
// который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы. 
// Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.
var Eating = /** @class */ (function () {
    function Eating() {
    }
    Eating.prototype.stagesOfEating = function () {
        this.toWashHands();
        this.sitAtTheTable();
        this.firstCource();
        this.snack();
        this.drink();
        this.getUpFromTable();
        this.wentToSleep();
    };
    Eating.prototype.toWashHands = function () {
        console.log('Помыл руки.');
    };
    Eating.prototype.sitAtTheTable = function () {
        console.log('Сел за стол.');
    };
    Eating.prototype.getUpFromTable = function () {
        console.log('Встал из-за стола.');
    };
    Eating.prototype.wentToSleep = function () {
        console.log('Пошел спать.');
    };
    return Eating;
}());
var UkraineEating = /** @class */ (function (_super) {
    __extends(UkraineEating, _super);
    function UkraineEating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UkraineEating.prototype.firstCource = function () {
        console.log('Налил большую тарелку борща.');
    };
    UkraineEating.prototype.snack = function () {
        console.log('Нарезал много сала.');
    };
    UkraineEating.prototype.drink = function () {
        console.log('Налил и выпил чарочку самогончика');
    };
    return UkraineEating;
}(Eating));
var USAEating = /** @class */ (function (_super) {
    __extends(USAEating, _super);
    function USAEating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USAEating.prototype.firstCource = function () {
        console.log('Взял два бургера.');
    };
    USAEating.prototype.snack = function () {
        console.log('И картошки фри.');
    };
    USAEating.prototype.drink = function () {
        console.log('Налил и выпил Кока-колы.');
    };
    return USAEating;
}(Eating));
function test(eating) {
    eating.stagesOfEating();
}
console.log('Украинская версия принятия пищи..');
test(new UkraineEating());
console.log('Американская версия принятия пищи..');
test(new USAEating());
