"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Box = /** @class */ (function () {
    function Box() {
        this.products = [];
    }
    Box.prototype.contructor = function () {
        this.products = [];
    };
    Box.prototype.getName = function () {
        return "Коробка с " + this.products.length + " аксессуарами";
    };
    Box.prototype.add = function (p) {
        console.log("Положить ", p.getName(), "в коробку");
        this.products.push(p);
    };
    Box.prototype.getPrice = function () {
        return this.products.reduce(function (curr, b) { return (curr + b.getPrice()); }, 0);
    };
    return Box;
}());
// ------------ПРОВЕРКА-----------
var mainBox = new Box();
mainBox.add(new Product("Зарядное устройство", 300));
mainBox.add(new Product("Xiaomi Note 11", 15000));
var accessoriesBox = new Box();
accessoriesBox.add(new Product("Наушники Redmi AirDots 2 Black", 3000));
accessoriesBox.add(new Product("Чехол и защитное стекло", 800));
accessoriesBox.add(new Product("Смарт-часы Xiaomi Haylou Smart Watch", 1050));
mainBox.add(accessoriesBox);
console.log("Общая стоимость товара: ", mainBox.getPrice());
