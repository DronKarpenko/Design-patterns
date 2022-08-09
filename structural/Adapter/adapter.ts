export {};
// Адаптер — это структурный паттерн, который позволяет подружить несовместимые объекты.
// Адаптер выступает прослойкой между двумя объектами, превращая вызовы одного в вызовы понятные другому.

class UahPrice{
    uahPrice: number;
    constructor (uahPrice: number){
        this.uahPrice = uahPrice;
    }
    public myPrice(): string{
        return `Моя цена - ${this.uahPrice} гривен!`
    }
}

class DollarPrice{
    dollarPrice: number;
    constructor (dollarPrice: number){
        this.dollarPrice = dollarPrice;
    }
    public myPrice(): string{
        return `Моя цена - ${this.dollarPrice} долларов!`
    }
}

class Adapter extends UahPrice {
    private convert: DollarPrice;

    constructor(convert: DollarPrice) {
        super(0);
        this.convert = convert;
    }

    public myPrice(): string {
        const result = this.convert.dollarPrice *30;
        return `Моя цена (по курсу НБУ) - ${result} гривен`;
    }
}

// ------------------ПРОВЕРКА----------
function testPrice(price) {
    console.log(price.myPrice());
}

console.log('Сколько стоит?');
const priceUah = new UahPrice(30);
testPrice(priceUah);

console.log('');

const priceDollar = new DollarPrice(15);
testPrice(priceDollar);
console.log('Я не понимаю в долларах!');

console.log('');

const priceConvert = new Adapter(priceDollar);
testPrice(priceConvert);
console.log('Спасибо Адаптеру, теперь все ясно!');