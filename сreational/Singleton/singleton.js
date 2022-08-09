"use strict";
// export const __esModule = true;
var Seal = /** @class */ (function () {
    class Seal {
        constructor() {
            this.count = 0;
        }
        static getInstance() {
            if (!Seal.instance) {
                Seal.instance = new Seal();
            }
            return Seal.instance;
        }
        getSeal() {
            return this.count++;
        }
        howManyStamped() {
            console.log("\u041F\u0435\u0447\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 ".concat(this.count, " \u0440\u0430\u0437"));
        }
    }
    return Seal;
}());
// -----------ПРОВЕРКА---------------
var seal1 = Seal.getInstance();
var seal2 = Seal.getInstance();
if (seal1 === seal2) {
    console.log('Все работает');
}
else {
    console.log('Ошибка');
}
seal1.getSeal();
seal1.getSeal();
seal2.getSeal();
seal2.getSeal();
seal1.howManyStamped();
seal2.howManyStamped();
