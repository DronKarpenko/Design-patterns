export {};
// Шаблонный метод — это поведенческий паттерн проектирования, 
// который определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы. 
// Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.

abstract class Eating {

    public stagesOfEating(): void {
        this.toWashHands();
        this.sitAtTheTable();
        this.firstCource();
        this.snack();
        this.drink();
        this.getUpFromTable();
        this.wentToSleep();
    }

    protected toWashHands(): void{
        console.log('Помыл руки.');
    }

    protected sitAtTheTable(): void{
        console.log('Сел за стол.');
    }

    protected abstract firstCource(): void;

    protected abstract snack(): void;

    protected abstract drink(): void;

    protected getUpFromTable(): void {
        console.log('Встал из-за стола.');
    }

    protected wentToSleep(): void {
        console.log('Пошел спать.');
    }
}

class UkraineEating extends Eating {

    protected firstCource(): void{
        console.log('Налил большую тарелку борща.');
    }

    protected snack(): void{
        console.log('Нарезал много сала.');
    }

    protected drink(): void{
        console.log('Налил и выпил чарочку самогончика');
    }
}

class USAEating extends Eating {

    protected firstCource(): void{
        console.log('Взял два бургера.');
    }

    protected snack(): void{
        console.log('И картошки фри.');
    }

    protected drink(): void{
        console.log('Налил и выпил Кока-колы.');
    }
}


// ------------------ПРОВЕРКА----------
function test(eating: Eating) {
    eating.stagesOfEating();
}

console.log('Украинская версия принятия пищи..');
test(new UkraineEating());

console.log('Американская версия принятия пищи..');
test(new USAEating());