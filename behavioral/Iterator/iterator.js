"use strict";
// exports.__esModule = true;
var Component = /** @class */ (function () {
    function Component(name) {
        this.name = name;
    }
    return Component;
}());
var Frame = /** @class */ (function () {
    function Frame(name, components) {
        this.name = name;
        this.components = components;
        this.pointer = 0;
    }
    Frame.prototype.next = function () {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    return Frame;
}());
// -------------ПРОВЕРКА
var frame = new Frame('Test', [
    new Component('top'),
    new Component('bottom'),
    new Component('left'),
    new Component('right'),
]);
var iteratorResult1 = frame.next();
console.log(iteratorResult1);
var iteratorResult2 = frame.next();
console.log(iteratorResult2);
var iteratorResult3 = frame.next();
console.log(iteratorResult3);
var iteratorResult4 = frame.next();
console.log(iteratorResult4);
var iteratorResult5 = frame.next();
console.log(iteratorResult5);
//Получаем значение результата итерации через value свойство:
var component = iteratorResult3.value;
console.log(component);
// { done: false, value: Component { name: 'top' } }
// { done: false, value: Component { name: 'bottom' } }
// { done: false, value: Component { name: 'left' } }
// { done: false, value: Component { name: 'right' } }
// { done: true, value: null }
// Component { name: 'left' }
