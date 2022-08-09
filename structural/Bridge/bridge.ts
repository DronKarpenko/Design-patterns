export {};
// Мост — это структурный паттерн проектирования,
// который разделяет один или несколько классов на две отдельные иерархии — 
// абстракцию и реализацию, позволяя изменять их независимо друг от друга.

interface Color {
    describe(): string;
}

abstract class Phone {
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    describeMe() {
        console.log(`Я ${this.color.describe()} телефон.`);
    }
}

class Red implements Color {
    describe() {
        return 'красный';
    }
}

class Blue implements Color {
    describe() {
        return 'синий';
    }
}

class Iphone extends Phone {
    constructor(color: Color) {
        super(color);
    }

    describeMe() {
        console.log(`Я ${this.color.describe()} Айфон.`);
    }
}

class Xiaomi extends Phone {
    constructor(color: Color) {
        super(color);
    }
}

// -------------ПРОВЕРКА-----------
const ihpone = new Iphone(new Red());
const xiaomi = new Xiaomi(new Blue());

ihpone.describeMe();

xiaomi.describeMe();