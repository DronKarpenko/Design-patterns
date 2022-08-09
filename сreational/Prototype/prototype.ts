export {};

interface Prototype{
    clone()
}

class Smartphone implements Prototype{

    public brand: string;
    public cpu: string;
    private screenSize: number;
    public ram: number

    constructor( brand: string, cpu: string, screenSize: number, ram: number ){}
    public clone(): this {
        let clone = Object.create(this);        
        return clone;
    }
}

let redmiNote11 = new Smartphone("Xiaomi", "Qualcomm Snapdragon 680", 6.43, 64);
console.log(redmiNote11);

let redmi9A = redmiNote11.clone();
console.log(redmi9A);

let redmi10С = redmiNote11.clone();
console.log(redmi10С);

// -------------------ПРОВЕРКА------------------
if (redmiNote11.brand === redmi9A.brand) {
    console.log('Удачное клонирование');
} else {
    console.log('Ошибка клонирования');
}

if (redmi9A.cpu === redmi10С.cpu) {
    console.log('Удачное клонирование');
} else {
    console.log('Ошибка клонирования');
}