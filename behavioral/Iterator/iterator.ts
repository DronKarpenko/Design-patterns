export {};
// -----------для перебора коллекций

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

interface IteratorResult<T> {
    done: boolean;
    value: T | null;
}

class Component {
    constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
    private pointer = 0;

    constructor(
        public name: string,
        public components: Component[]
    ) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++],
            };
        } else {
            return {
                done: true,
                value: null,
            };
        }
    }
}
// -------------ПРОВЕРКА
let frame = new Frame('Test', [
    new Component('top'),
    new Component('bottom'),
    new Component('left'),
    new Component('right'),
]);

let iteratorResult1 = frame.next();
console.log(iteratorResult1);

let iteratorResult2 = frame.next();
console.log(iteratorResult2);

let iteratorResult3 = frame.next();
console.log(iteratorResult3);

let iteratorResult4 = frame.next();
console.log(iteratorResult4);

let iteratorResult5 = frame.next();
console.log(iteratorResult5);

//Получаем значение результата итерации через value свойство:
let component = iteratorResult3.value;
console.log(component);

// { done: false, value: Component { name: 'top' } }
// { done: false, value: Component { name: 'bottom' } }
// { done: false, value: Component { name: 'left' } }
// { done: false, value: Component { name: 'right' } }
// { done: true, value: null }
// Component { name: 'left' }