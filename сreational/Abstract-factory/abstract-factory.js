"use strict";
// Конкретные фабрики относятся каждая к своему бренду продуктов (Apple / Xiaomi) 
// Реализуют методы абстрактной фабрики, позволяя создавать все продукты определённого бренда.
// AppleStore
var AppleStore = /** @class */ (function () {
    function AppleStore() {
    }
    AppleStore.prototype.addClock = function () {
        return new AppleWatch();
    };
    AppleStore.prototype.addHeadphones = function () {
        return new AirPods();
    };
    return AppleStore;
}());
// XiaomiStore
var XiaomiStore = /** @class */ (function () {
    function XiaomiStore() {
    }
    XiaomiStore.prototype.addClock = function () {
        return new MiBand();
    };
    XiaomiStore.prototype.addHeadphones = function () {
        return new AirDots();
    };
    return XiaomiStore;
}());
// Конкретные продукты — большой набор классов, 
// которые относятся к различным абстрактным продуктам (часы / наушники), 
// но они одного бренда (Apple/Xiaomi)
// Apple
var AppleWatch = /** @class */ (function () {
    function AppleWatch() {
        this.name = "Apple Watch";
    }
    AppleWatch.prototype.showClock = function () {
        return "".concat(this.name, " \u0433\u043E\u0442\u043E\u0432\u043E \u043A \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0443");
    };
    return AppleWatch;
}());
var AirPods = /** @class */ (function () {
    function AirPods() {
        this.name = "Air Pods";
    }
    AirPods.prototype.showHeadphones = function () {
        return "".concat(this.name, " \u0433\u043E\u0442\u043E\u0432\u043E \u043A \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0443");
    };
    AirPods.prototype.searchBrand = function (collaborator) {
        var result = collaborator.showClock();
        return "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u044B \u0435\u0449\u0435 (".concat(result, ") - \u044D\u0442\u043E \u0447\u0430\u0441\u044B \u043E\u0442 \u043D\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430");
    };
    return AirPods;
}());
// Xiaomi
var MiBand = /** @class */ (function () {
    function MiBand() {
        this.name = "Mi Band";
    }
    MiBand.prototype.showClock = function () {
        return "".concat(this.name, " \u0433\u043E\u0442\u043E\u0432\u043E \u043A \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0443");
    };
    return MiBand;
}());
var AirDots = /** @class */ (function () {
    function AirDots() {
        this.name = "Air Dots";
    }
    AirDots.prototype.showHeadphones = function () {
        return "".concat(this.name, " \u0433\u043E\u0442\u043E\u0432\u043E \u043A \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0443");
    };
    AirDots.prototype.searchBrand = function (collaborator) {
        var result = collaborator.showClock();
        return "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u044B \u0435\u0449\u0435 (".concat(result, ") - \u044D\u0442\u043E \u0447\u0430\u0441\u044B \u043E\u0442 \u043D\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430");
    };
    return AirDots;
}());
// Проверочная функция
function showAccessories(accessories) {
    var clock = accessories.addClock();
    var headphones = accessories.addHeadphones();
    console.log(clock.showClock());
    console.log(headphones.showHeadphones());
    console.log(headphones.searchBrand(clock));
}
console.log('Test Apple...');
showAccessories(new AppleStore());
console.log('Test Xiaomi...');
showAccessories(new XiaomiStore());
