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
var Phone = /** @class */ (function () {
    function Phone(color) {
        this.color = color;
    }
    Phone.prototype.describeMe = function () {
        console.log("\u042F ".concat(this.color.describe(), " \u0442\u0435\u043B\u0435\u0444\u043E\u043D."));
    };
    return Phone;
}());
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.describe = function () {
        return 'красный';
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.describe = function () {
        return 'синий';
    };
    return Blue;
}());
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone(color) {
        return _super.call(this, color) || this;
    }
    Iphone.prototype.describeMe = function () {
        console.log("\u042F ".concat(this.color.describe(), " \u0410\u0439\u0444\u043E\u043D."));
    };
    return Iphone;
}(Phone));
var Xiaomi = /** @class */ (function (_super) {
    __extends(Xiaomi, _super);
    function Xiaomi(color) {
        return _super.call(this, color) || this;
    }
    return Xiaomi;
}(Phone));
// -------------ПРОВЕРКА-----------
var ihpone = new Iphone(new Red());
var xiaomi = new Xiaomi(new Blue());
ihpone.describeMe();
xiaomi.describeMe();
