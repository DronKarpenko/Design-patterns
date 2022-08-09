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
var MobileShop = /** @class */ (function () {
    function MobileShop() {
    }
    MobileShop.prototype.sendOrderPhone = function () {
        var mobilePhone = this.addPhone();
        return mobilePhone.greetings() + ' ' + mobilePhone.answer();
    };
    return MobileShop;
}());
var AppleStore = /** @class */ (function (_super) {
    __extends(AppleStore, _super);
    function AppleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleStore.prototype.addPhone = function () {
        return new ApplePhone();
    };
    return AppleStore;
}(MobileShop));
var XiaomiStore = /** @class */ (function (_super) {
    __extends(XiaomiStore, _super);
    function XiaomiStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaomiStore.prototype.addPhone = function () {
        return new XiaomiPhone();
    };
    return XiaomiStore;
}(MobileShop));
var ApplePhone = /** @class */ (function () {
    function ApplePhone() {
        // public name: string;
        // constructor(name: string){}
        this.name = 'IPhone 13 Pro';
    }
    ApplePhone.prototype.greetings = function () {
        return "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432 AppleStore!";
    };
    ApplePhone.prototype.answer = function () {
        return "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 -  ".concat(this.name, ". \u0421\u043A\u043E\u0440\u043E \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F");
    };
    return ApplePhone;
}());
var XiaomiPhone = /** @class */ (function () {
    function XiaomiPhone() {
        // constructor(name: string){}
        // public name: string
        this.name = 'Redmi Note 11';
    }
    XiaomiPhone.prototype.greetings = function () {
        return "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u043B\u0438\u0441\u044C \u0432 XiaomiStore!";
    };
    XiaomiPhone.prototype.answer = function () {
        return "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 -  ".concat(this.name, ". \u0421\u043A\u043E\u0440\u043E \u0441 \u0412\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F");
    };
    return XiaomiPhone;
}());
function test(creator) {
    console.log(creator.sendOrderPhone());
}
test(new AppleStore());
console.log('');
test(new XiaomiStore());
