"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mediated = /** @class */ (function () {
    function Mediated() {
    }
    Mediated.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return Mediated;
}());
var Notifications = /** @class */ (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notifications.prototype.send = function () {
        console.log('Отправляю уведомление');
    };
    return Notifications;
}(Mediated));
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Log.prototype.log = function (message) {
        console.log('message', message);
    };
    return Log;
}(Mediated));
var EventHandler = /** @class */ (function (_super) {
    __extends(EventHandler, _super);
    function EventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventHandler.prototype.MyEvent = function () {
        this.mediator.notify('EventHandler', 'myEvent');
    };
    return EventHandler;
}(Mediated));
var NotificationMediator = /** @class */ (function () {
    function NotificationMediator(notifications, log, eventHandler) {
        this.notifications = notifications;
        this.log = log;
        this.eventHandler = eventHandler;
    }
    NotificationMediator.prototype.notify = function (sender, event) {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.log.log('Отправлено');
                break;
        }
    };
    return NotificationMediator;
}());
var handler = new EventHandler();
var logger = new Log();
var notifications = new Notifications();
var test = new NotificationMediator(notifications, logger, handler);
console.log(handler.setMediator(test));
console.log(handler.MyEvent());
