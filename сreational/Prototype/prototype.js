"use strict";
// export const __esModule = true;
var Smartphone = /** @class */ (function () {
    class Smartphone {
        constructor(brand, cpu, screenSize, ram) {
        }
        clone() {
            var clone = Object.create(this);
            return clone;
        }
    }
    return Smartphone;
}());
var redmiNote11 = new Smartphone("Xiaomi", "Qualcomm Snapdragon 680", 6.43, 64);
console.log(redmiNote11);
var redmi9A = redmiNote11.clone();
console.log(redmi9A);
var redmi10С = redmiNote11.clone();
console.log(redmi10С);
// -------------------ПРОВЕРКА------------------
if (redmiNote11.brand === redmi9A.brand) {
    console.log('Удачное клонирование');
}
else {
    console.log('Ошибка клонирования');
}
if (redmi9A.cpu === redmi10С.cpu) {
    console.log('Удачное клонирование');
}
else {
    console.log('Ошибка клонирования');
}
