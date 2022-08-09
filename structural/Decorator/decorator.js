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
// Декоратор — это структурный паттерн проектирования, 
// который позволяет динамически добавлять объектам новую функциональность, 
// оборачивая их в полезные «обёртки».
// Шаблон декоратора добавляет расширяемость без изменения исходного объекта.
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Superpower = /** @class */ (function (_super) {
    __extends(Superpower, _super);
    function Superpower(decoratedHuman) {
        var _this = _super.call(this) || this;
        _this.comp = decoratedHuman;
        return _this;
    }
    return Superpower;
}(Human));
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boy.prototype.power = function () {
        console.log("Я обычный парень");
    };
    return Boy;
}(Human));
var FlyingBoy = /** @class */ (function (_super) {
    __extends(FlyingBoy, _super);
    function FlyingBoy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlyingBoy.prototype.power = function () {
        console.log("Теперь я могу летать!!!");
    };
    return FlyingBoy;
}(Superpower));
var InvisibleBoy = /** @class */ (function (_super) {
    __extends(InvisibleBoy, _super);
    function InvisibleBoy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvisibleBoy.prototype.power = function () {
        console.log("Теперь я могу стать невидимым!!!");
    };
    return InvisibleBoy;
}(Superpower));
var boy = new Boy();
console.log("-----без способностей----");
boy.power();
console.log("--- суперспособность летать подключена --- ");
var flyingBoy = new FlyingBoy(boy);
flyingBoy.power();
console.log("--- суперспособность невидимки подключена --- ");
var invisibleBoy = new InvisibleBoy(boy);
invisibleBoy.power();
