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
// Состояние — это поведенческий паттерн проектирования,
// который позволяет объектам менять поведение в зависимости от своего состояния.
// Извне создаётся впечатление, что изменился класс объекта.
var Photo = /** @class */ (function () {
    function Photo() {
        this.setState(new NewStatePhoto());
    }
    Photo.prototype.getState = function () {
        return "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ".concat(this.state.name);
        // console.log()
    };
    Photo.prototype.setState = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    Photo.prototype.publishPhoto = function () {
        this.state.publish();
    };
    Photo.prototype.deletePhoto = function () {
        this.state["delete"]();
    };
    return Photo;
}());
var PhotoState = /** @class */ (function () {
    function PhotoState() {
    }
    PhotoState.prototype.setContext = function (item) {
        this.item = item;
    };
    return PhotoState;
}());
var NewStatePhoto = /** @class */ (function (_super) {
    __extends(NewStatePhoto, _super);
    function NewStatePhoto() {
        var _this = _super.call(this) || this;
        _this.name = 'NewStatePhoto';
        return _this;
    }
    NewStatePhoto.prototype.publish = function () {
        console.log("\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0444\u043E\u0442\u043E ".concat(this.item.photoTitle));
        this.item.setState(new PublishStatePhoto());
    };
    NewStatePhoto.prototype["delete"] = function () {
        console.log("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0444\u043E\u0442\u043E \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E");
    };
    return NewStatePhoto;
}(PhotoState));
var PublishStatePhoto = /** @class */ (function (_super) {
    __extends(PublishStatePhoto, _super);
    function PublishStatePhoto() {
        var _this = _super.call(this) || this;
        _this.name = 'PublishStatePhoto';
        return _this;
    }
    PublishStatePhoto.prototype.publish = function () {
        console.log("\u042D\u0442\u043E \u0444\u043E\u0442\u043E \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
    };
    PublishStatePhoto.prototype["delete"] = function () {
        console.log("\u0424\u043E\u0442\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E");
        this.item.setState(new NewStatePhoto());
    };
    return PublishStatePhoto;
}(PhotoState));
var item = new Photo();
item.photoTitle = 'Аватарка';
console.log(item.getState());
item.publishPhoto();
console.log(item.getState());
item.publishPhoto();
console.log(item.getState());
item.deletePhoto();
console.log(item.getState());
