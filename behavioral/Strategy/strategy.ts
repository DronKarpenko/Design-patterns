export {};
// Стратегия (англ. strategy) позволяет выбирать и даже менять алгоритм работы в зависимости от ситуации
class Counter {
    private operationsStrategy: OperationsStrategy;

    constructor(operationsStrategy: OperationsStrategy) {
        this.operationsStrategy = operationsStrategy;
    }

    public setStrategy(operationsStrategy: OperationsStrategy) {
        this.operationsStrategy = operationsStrategy;
    }
    public calculateResult(): void {
        const result = this.operationsStrategy.operationOnNumbers();
        console.log(result);
    }
}

interface OperationsStrategy {    
    operationOnNumbers(): number;
}

class MultiplicationNumbers implements OperationsStrategy {
    firstNumber: number;
    secondNumber: number;

    constructor(firstNumber: number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    public operationOnNumbers(): number {
        return this.firstNumber*this.secondNumber;
    }
}

class AdditionNumbers implements OperationsStrategy {
    firstNumber: number;
    secondNumber: number;

    constructor(firstNumber: number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    public operationOnNumbers(): number {
        return this.firstNumber + this.secondNumber;
    }
}

class SubtractionNumbers implements OperationsStrategy {
    firstNumber: number;
    secondNumber: number;

    constructor(firstNumber: number, secondNumber: number){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    public operationOnNumbers(): number {
        return this.firstNumber - this.secondNumber;
    }
}

// ---------ПРОВЕРКА
const counter = new Counter(new MultiplicationNumbers(5, 5));
counter.calculateResult(); //25

counter.setStrategy(new AdditionNumbers(10, 20));
counter.calculateResult(); //30

counter.setStrategy(new SubtractionNumbers(55, 10));
counter.calculateResult(); //45