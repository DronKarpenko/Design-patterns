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
// Адаптер — это структурный паттерн, который позволяет подружить несовместимые объекты.
// Адаптер выступает прослойкой между двумя объектами, превращая вызовы одного в вызовы понятные другому.
var UahPrice = /** @class */ (function () {
    function UahPrice(uahPrice) {
        this.uahPrice = uahPrice;
    }
    UahPrice.prototype.myPrice = function () {
        return "\u041C\u043E\u044F \u0446\u0435\u043D\u0430 - ".concat(this.uahPrice, " \u0433\u0440\u0438\u0432\u0435\u043D!");
    };
    return UahPrice;
}());
var DollarPrice = /** @class */ (function () {
    function DollarPrice(dollarPrice) {
        this.dollarPrice = dollarPrice;
    }
    DollarPrice.prototype.myPrice = function () {
        return "\u041C\u043E\u044F \u0446\u0435\u043D\u0430 - ".concat(this.dollarPrice, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432!");
    };
    return DollarPrice;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(convert) {
        var _this = _super.call(this, 0) || this;
        _this.convert = convert;
        return _this;
    }
    Adapter.prototype.myPrice = function () {
        var result = this.convert.dollarPrice * 30;
        return "\u041C\u043E\u044F \u0446\u0435\u043D\u0430 (\u043F\u043E \u043A\u0443\u0440\u0441\u0443 \u041D\u0411\u0423) - ".concat(result, " \u0433\u0440\u0438\u0432\u0435\u043D");
    };
    return Adapter;
}(UahPrice));
// ------------------ПРОВЕРКА----------
function testPrice(price) {
    console.log(price.myPrice());
}
console.log('Сколько стоит?');
var priceUah = new UahPrice(30);
testPrice(priceUah);
console.log('');
var priceDollar = new DollarPrice(15);
testPrice(priceDollar);
console.log('Я не понимаю в долларах!');
console.log('');
var priceConvert = new Adapter(priceDollar);
testPrice(priceConvert);
console.log('Спасибо Адаптеру, теперь все ясно!');
