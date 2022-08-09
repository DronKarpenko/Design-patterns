"use strict";
exports.__esModule = true;
var Soldier = /** @class */ (function () {
    function Soldier(set, number) {
        this.equipmentSet = set;
        this.number = number;
        console.log("\u041D\u043E\u0432\u044B\u0439 \u0441\u043E\u043B\u0434\u0430\u0442 ".concat(number));
    }
    Soldier.prototype.move = function (location) {
        console.log("\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A ".concat(location));
    };
    Soldier.prototype.shoot = function (target, location) {
        console.log("\u041D\u0430\u043D\u0435\u043D\u0441\u0442\u0438 \u0443\u0440\u043E\u043D ".concat(target, " \u0432 ").concat(location));
    };
    Soldier.prototype.cure = function (mate, location) {
        console.log("\u0412\u044B\u043B\u0435\u0447\u0438\u0442\u044C ".concat(mate, " \u0432 ").concat(location));
    };
    return Soldier;
}());
var SoldierAcademy = /** @class */ (function () {
    function SoldierAcademy() {
    }
    SoldierAcademy.getSoldier = function (set, num) {
        var soldier = SoldierAcademy.groups[set];
        if (!soldier) {
            soldier = new Soldier(set, num);
            SoldierAcademy.groups[set] = soldier;
        }
        else {
            soldier.number = num;
            console.log("\u043E\u0431\u0449\u0438\u0439 \u0441\u043E\u043B\u0434\u0430\u0442 ".concat(soldier.number));
        }
        return soldier;
    };
    SoldierAcademy.groups = {};
    return SoldierAcademy;
}());

var start = Math.floor(Date.now());
for (var i = 0; i < 1000; i++) {
    SoldierAcademy.getSoldier('normal-set', i);
}
var end = Math.floor(Date.now());
console.log(end - start);
