"use strict";
exports.__esModule = true;
// Фасад — это структурный паттерн проектирования, 
// который предоставляет простой интерфейс к сложной системе классов
var ScreenDiagnostics = /** @class */ (function () {
    function ScreenDiagnostics() {
    }
    ScreenDiagnostics.prototype.checkIntegrity = function () {
        console.log('Проверка экрана телефона...');
    };
    return ScreenDiagnostics;
}());
var DamageDiagnostics = /** @class */ (function () {
    function DamageDiagnostics() {
    }
    DamageDiagnostics.prototype.inspectTheBody = function () {
        console.log('Проверка на механические повреждения корпуса...');
    };
    return DamageDiagnostics;
}());
var BatteryDiagnostics = /** @class */ (function () {
    function BatteryDiagnostics() {
    }
    BatteryDiagnostics.prototype.inspectBattery = function () {
        console.log('Проверка батареи...');
    };
    return BatteryDiagnostics;
}());
var SoftwareDiagnostics = /** @class */ (function () {
    function SoftwareDiagnostics() {
    }
    SoftwareDiagnostics.prototype.inspectSoftware = function () {
        console.log('Проверка ПО...');
    };
    return SoftwareDiagnostics;
}());
var PhoneDiagnostics = /** @class */ (function () {
    function PhoneDiagnostics() {
        this.screen = new ScreenDiagnostics();
        this["case"] = new DamageDiagnostics();
        this.battery = new BatteryDiagnostics();
        this.software = new SoftwareDiagnostics();
    }
    PhoneDiagnostics.prototype.startDiagnostics = function () {
        this.screen.checkIntegrity();
        this["case"].inspectTheBody();
        this.battery.inspectBattery();
        this.software.inspectSoftware();
        console.log('Телефон прошел диагностику. Все в норме');
    };
    return PhoneDiagnostics;
}());
// ------------------ПРОВЕРКА-----------
var phone = new PhoneDiagnostics();
phone.startDiagnostics();
