"use strict";
// exports.__esModule = true;
var PlantCompany = /** @class */ (function () {
    function PlantCompany() {
        this.name = "Завод";
    }
    PlantCompany.prototype.accept = function (insurer) {
        insurer.visitPlant(this);
    };
    PlantCompany.prototype.exclusiveVisitPlant = function () {
        return "".concat(this.name);
    };
    return PlantCompany;
}());
var OfficeCompany = /** @class */ (function () {
    function OfficeCompany() {
        this.name = "Офис компании";
    }
    OfficeCompany.prototype.accept = function (insurer) {
        insurer.visitOffice(this);
    };
    OfficeCompany.prototype.exclusiveVisitOffice = function () {
        return "".concat(this.name);
    };
    return OfficeCompany;
}());
var FireInsurer = /** @class */ (function () {
    function FireInsurer() {
    }
    FireInsurer.prototype.visitPlant = function (element) {
        console.log("".concat(element.exclusiveVisitPlant(), " \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D \u043E\u0442 \u043F\u043E\u0436\u0430\u0440\u043E\u0432."));
    };
    FireInsurer.prototype.visitOffice = function (element) {
        console.log("".concat(element.exclusiveVisitOffice(), " \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D \u043E\u0442 \u043F\u043E\u0436\u0430\u0440\u043E\u0432."));
    };
    return FireInsurer;
}());
var RobberyInsurer = /** @class */ (function () {
    function RobberyInsurer() {
    }
    RobberyInsurer.prototype.visitPlant = function (element) {
        console.log("".concat(element.exclusiveVisitPlant(), " \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D \u043E\u0442 \u043E\u0433\u0440\u0430\u0431\u043B\u0435\u043D\u0438\u044F."));
    };
    RobberyInsurer.prototype.visitOffice = function (element) {
        console.log("".concat(element.exclusiveVisitOffice(), " \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D \u043E\u0442 \u043E\u0433\u0440\u0430\u0431\u043B\u0435\u043D\u0438\u044F."));
    };
    return RobberyInsurer;
}());
// ------------ПРОВЕРКА-----------
function clientCode(components, insurer) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(insurer);
    }
}
var components = [
    new PlantCompany(),
    new OfficeCompany(),
];
console.log('Работает страховщик от пожаров:');
var fireInsurer = new FireInsurer();
clientCode(components, fireInsurer);
console.log('');
console.log('Работает страховщик от ограблений:');
var robberyInsurer = new RobberyInsurer();
clientCode(components, robberyInsurer);
