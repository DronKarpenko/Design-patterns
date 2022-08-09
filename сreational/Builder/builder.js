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
    function Phone(builder) {
        this.brand = builder.brand,
            this.color = builder.color,
            this.priceTo = builder.priceTo,
            this.screenSize = builder.screenSize,
            this.yearOfIssue = builder.yearOfIssue,
            this.simCart = builder.simCart || 1,
            this.nfc = builder.nfc || false,
            this.radio = builder.radio || false;
    }
    return Phone;
}());
var PhoneSearch = /** @class */ (function (_super) {
    __extends(PhoneSearch, _super);
    function PhoneSearch(brand) {
        var _this = _super.call(this, brand) || this;
        _this.brand = brand;
        return _this;
    }
    PhoneSearch.prototype.chooseColor = function (color) {
        this.color = color;
        return this;
    };
    PhoneSearch.prototype.chooseMaxPrice = function (priceTo) {
        this.priceTo = "\u0434\u043E ".concat(priceTo, " \u0433\u0440\u043D");
        return this;
    };
    PhoneSearch.prototype.chooseScreenSize = function (screenSize) {
        this.screenSize = screenSize;
        return this;
    };
    PhoneSearch.prototype.chooseYearOfIssue = function (yearOfIssue) {
        this.yearOfIssue = yearOfIssue;
        return this;
    };
    PhoneSearch.prototype.numberOfSimCards = function (count) {
        this.simCart = count;
        return this;
    };
    PhoneSearch.prototype.presenceNFC = function () {
        this.nfc = true;
        return this;
    };
    PhoneSearch.prototype.presenceFMradio = function () {
        this.radio = true;
        return this;
    };
    PhoneSearch.prototype.build = function () {
        return new Phone(this);
    };
    return PhoneSearch;
}(Phone));
var mobilePhone = new PhoneSearch('Самсунг')
    .chooseColor('Белый')
    .chooseMaxPrice(3900)
    .chooseScreenSize(5)
    .chooseYearOfIssue(2022)
    .presenceNFC()
    .presenceFMradio()
    .numberOfSimCards(2)
    .build();

let iphone = new PhoneSearch('iPhone')
.chooseColor('Розовый')
.chooseMaxPrice(40000)
.chooseScreenSize(5.5)
.chooseYearOfIssue(2017)

console.log(iphone);