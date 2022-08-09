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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request, amount) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request, amount);
        }
        console.log('Нет такой валюты!');
    };
    return AbstractHandler;
}());
var UsdHandler = /** @class */ (function (_super) {
    __extends(UsdHandler, _super);
    function UsdHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsdHandler.prototype.handle = function (request, amount) {
        if (request === 'USD') {
            console.log("\u0423 \u0432\u0430\u0441 \u0441\u043F\u0438\u0441\u0430\u043B\u0438 ".concat(amount, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432!"));
            return;
        }
        _super.prototype.handle.call(this, request, amount);
    };
    return UsdHandler;
}(AbstractHandler));
var EurHandler = /** @class */ (function (_super) {
    __extends(EurHandler, _super);
    function EurHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EurHandler.prototype.handle = function (request, amount) {
        if (request === 'EUR') {
            console.log("\u0423 \u0432\u0430\u0441 \u0441\u043F\u0438\u0441\u0430\u043B\u0438 ".concat(amount, " \u0435\u0432\u0440\u043E!"));
            return;
        }
        _super.prototype.handle.call(this, request, amount);
    };
    return EurHandler;
}(AbstractHandler));
var UahHandler = /** @class */ (function (_super) {
    __extends(UahHandler, _super);
    function UahHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UahHandler.prototype.handle = function (request, amount) {
        if (request === 'GRN') {
            console.log("\u0423 \u0432\u0430\u0441 \u0441\u043F\u0438\u0441\u0430\u043B\u0438 ".concat(amount, " \u0433\u0440\u0438\u0432\u0435\u043D!"));
            return;
        }
        _super.prototype.handle.call(this, request, amount);
    };
    return UahHandler;
}(AbstractHandler));
var usdHandler = new UsdHandler();
var uahHandler = new UahHandler();
var eurHandler = new EurHandler();
uahHandler.setNext(usdHandler).setNext(eurHandler);
function handlePurchase(handler, currency, amount) {
    handler.handle(currency, amount);
}
//   -------------ПРОВЕРКА-----------
handlePurchase(uahHandler, 'USD', 20);
handlePurchase(uahHandler, 'GRN', 30);
handlePurchase(usdHandler, 'EUR', 40);
handlePurchase(usdHandler, 'USD', 50);
handlePurchase(usdHandler, 'RUB', 50);
//   результат
// У вас списали 20 долларов!
// У вас списали 30 гривен!
// У вас списали 40 евро!
// У вас списали 50 долларов!
// Нет такой валюты!
