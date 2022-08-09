"use strict";
// exports.__esModule = true;
// Стратегия (англ. strategy) позволяет выбирать и даже менять алгоритм работы в зависимости от ситуации
var Counter = /** @class */ (function () {
    function Counter(operationsStrategy) {
        this.operationsStrategy = operationsStrategy;
    }
    Counter.prototype.setStrategy = function (operationsStrategy) {
        this.operationsStrategy = operationsStrategy;
    };
    Counter.prototype.calculateResult = function () {
        var result = this.operationsStrategy.operationOnNumbers();
        console.log(result);
    };
    return Counter;
}());
var MultiplicationNumbers = /** @class */ (function () {
    function MultiplicationNumbers(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    MultiplicationNumbers.prototype.operationOnNumbers = function () {
        return this.firstNumber * this.secondNumber;
    };
    return MultiplicationNumbers;
}());
var AdditionNumbers = /** @class */ (function () {
    function AdditionNumbers(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    AdditionNumbers.prototype.operationOnNumbers = function () {
        return this.firstNumber + this.secondNumber;
    };
    return AdditionNumbers;
}());
var SubtractionNumbers = /** @class */ (function () {
    function SubtractionNumbers(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    SubtractionNumbers.prototype.operationOnNumbers = function () {
        return this.firstNumber - this.secondNumber;
    };
    return SubtractionNumbers;
}());
// ---------ПРОВЕРКА
var counter = new Counter(new MultiplicationNumbers(5, 5));
counter.calculateResult();
counter.setStrategy(new AdditionNumbers(10, 20));
counter.calculateResult();
counter.setStrategy(new SubtractionNumbers(55, 10));
counter.calculateResult();
