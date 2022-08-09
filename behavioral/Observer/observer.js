"use strict";
exports.__esModule = true;
var Lead = /** @class */ (function () {
    function Lead(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    return Lead;
}());
var NewLead = /** @class */ (function () {
    function NewLead() {
        this.observers = [];
    }
    NewLead.prototype.attach = function (observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    };
    NewLead.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    };
    NewLead.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return NewLead;
}());
var Subscriber1 = /** @class */ (function () {
    function Subscriber1() {
    }
    Subscriber1.prototype.update = function (subject) {
        console.log('Subscriber1 получил уведомление');
        console.log(subject);
    };
    return Subscriber1;
}());
var Subscriber2 = /** @class */ (function () {
    function Subscriber2() {
    }
    Subscriber2.prototype.update = function (subject) {
        console.log('Subscriber2 получил уведомление');
        console.log(subject);
    };
    return Subscriber2;
}());
var subject = new NewLead();
subject.state = new Lead('Andrey', '0972283416');
var s1 = new Subscriber1();
var s2 = new Subscriber2();
subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s1);
subject.notify();