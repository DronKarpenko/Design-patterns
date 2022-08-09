export {};
// Компоновщик — это структурный паттерн проектирования, 
// который позволяет сгруппировать множество объектов в древовидную структуру, 
// а затем работать с ней так, как будто это единичный объект.

interface IProduct {
    
    getName(): string
    getPrice(): number 
}

class Product implements IProduct {

    private price:number 
    private name:string
    
    constructor(name:string, price:number) {
        this.name = name
        this.price = price
    }
    
    public getPrice(): number {
        return this.price
    }
    
    public getName(): string {
        return this.name
    }
}

class Box implements IProduct {

    private products: IProduct[] = []
    
    contructor() {
        this.products = []
    }
    
    public getName(): string {
        return "Коробка с " + this.products.length + " аксессуарами"
    } 
    
    add(p: IProduct):void {
        console.log("Положить ", p.getName(), "в коробку")
        this.products.push(p)
    }

    getPrice(): number {
        return this.products.reduce( (curr: number, b: IProduct) => (curr + b.getPrice()),  0)
    }
}

// ------------ПРОВЕРКА-----------
const mainBox = new Box()
mainBox.add(new Product("Зарядное устройство", 300))
mainBox.add(new Product("Xiaomi Note 11", 15000))

const accessoriesBox = new Box()
accessoriesBox.add( new Product("Наушники Redmi AirDots 2 Black", 3000))
accessoriesBox.add( new Product("Чехол и защитное стекло", 800))
accessoriesBox.add( new Product("Смарт-часы Xiaomi Haylou Smart Watch", 1050))

mainBox.add(accessoriesBox)

console.log("Общая стоимость товара: ", mainBox.getPrice())