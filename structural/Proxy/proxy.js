"use strict";
exports.__esModule = true;
var RealSubject = /** @class */ (function () {
    function RealSubject() {
        this.enormousData = [1, 2, 3, 23, 45, 12];
    }
    RealSubject.prototype.request = function () {
        return this.enormousData;
    };
    return RealSubject;
}());
var ProxySubject = /** @class */ (function () {
    function ProxySubject() {
        this.enormousData = [];
        this.realSubject = new RealSubject();
    }
    ProxySubject.prototype.request = function () {
        if (this.enormousData.length === 0) {
            console.log('извлечение данных из RealSubject');
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log('извлечение данных из Proxy cache');
        return this.enormousData;
    };
    return ProxySubject;
}());
// ----------ПРОВЕРКА----------
var test = new ProxySubject();
console.log(test.request());
console.log(test.request());
