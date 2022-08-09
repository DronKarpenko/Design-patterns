export {};
// Декоратор — это структурный паттерн проектирования, 
// который позволяет динамически добавлять объектам новую функциональность, 
// оборачивая их в полезные «обёртки».
// Шаблон декоратора добавляет расширяемость без изменения исходного объекта.

abstract class Human {

    abstract power(): void
}

abstract class Superpower extends Human {
    protected comp: Human
    
    constructor(decoratedHuman: Human) {
        super()
        this.comp = decoratedHuman
    }
    
    abstract power(): void
}

class Boy extends Human {

    public power():void {
        console.log("Я обычный парень")
    }
}

class FlyingBoy extends Superpower {

    public power():void {
        console.log("Теперь я могу летать!!!");
    }
}

class InvisibleBoy extends Superpower {

    public power():void {
        console.log("Теперь я могу стать невидимым!!!")
    }
}


// ------------------ПРОВЕРКА--------------
const boy = new Boy()

console.log("-----без способностей----")
boy.power()

console.log("--- суперспособность летать подключена --- ")
const flyingBoy =  new FlyingBoy(boy)
flyingBoy.power()

console.log("--- суперспособность невидимки подключена --- ")
const invisibleBoy =  new InvisibleBoy(boy)
invisibleBoy.power()

/*
-----без способностей----
Я обычный парень
--- суперспособность летать подключена --- 
Теперь я могу летать!!!
--- суперспособность невидимки подключена --- 
Теперь я могу стать невидимым!!!
*/