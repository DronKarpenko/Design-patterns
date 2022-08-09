"use strict";
exports.__esModule = true;
var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: (".concat(this.payload, ")"));
    };
    return SimpleCommand;
}());
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    ComplexCommand.prototype.execute = function () {
        console.log('ComplexCommand: Passing to the receiving object!');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    };
    return ComplexCommand;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("Receiver: Working on (".concat(a, ".)"));
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("Receiver: Also working on (".concat(b, ".)"));
    };
    return Receiver;
}());
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    Invoker.prototype.workCheck = function () {
        console.log('Invoker: Begin work');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log('Invoker: Finish work');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return Invoker;
}());
// ПРОВЕРКА
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Some text ...!'));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send phone', 'Save report'));
invoker.workCheck();
// Invoker: Begin work
// SimpleCommand: (Some text ...!)
// Invoker: Finish work
// ComplexCommand: Passing to the receiving object!
// Receiver: Working on (Send phone.)
// Receiver: Also working on (Save report.)
