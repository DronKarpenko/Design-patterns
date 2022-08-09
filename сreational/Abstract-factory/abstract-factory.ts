export {};

// Абстрактная фабрика объявляет методы создания различных абстрактных продуктов(часы / наушники)
interface MobileAccessories{
    addClock(): Clock;
    addHeadphones(): Headphones;
}

// Конкретные фабрики относятся каждая к своему бренду продуктов (Apple / Xiaomi) 
// Реализуют методы абстрактной фабрики, позволяя создавать все продукты определённого бренда.

// AppleStore
class AppleStore implements MobileAccessories{
    addClock(): Clock {
        return new AppleWatch();
    }
    addHeadphones(): Headphones {
        return new AirPods();
    }
}

// XiaomiStore
class XiaomiStore implements MobileAccessories{
    addClock(): Clock {
        return new MiBand();
    }
    addHeadphones(): Headphones {
        return new AirDots();
    }
}

// Абстрактные продукты объявляют интерфейсы одинаковых продуктов, но разных брендов
// Clock
interface Clock{
    name: string;
    showClock(): string;
}
// Headphones
interface Headphones{
    name: string;
    // Продукт способен работать самостоятельно
    showHeadphones(): string;
    // а также взаимодействовать с продуктами того же бренда
    searchBrand(collaborator: Clock): string;
}

// Конкретные продукты — большой набор классов, 
// которые относятся к различным абстрактным продуктам (часы / наушники), 
// но они одного бренда (Apple/Xiaomi)

// Apple
class AppleWatch implements Clock{
    name = "Apple Watch";
    showClock(): string{
        return `${this.name} готово к просмотру`;
    }
}

class AirPods implements Headphones{
    name = "Air Pods";
    showHeadphones(): string{
        return `${this.name} готово к просмотру`;
    }
    searchBrand(collaborator: Clock): string {
        const result = collaborator.showClock();
        return `Возможно Вам нужны еще (${result}) - это часы от нашего бренда`;
    }
}

// Xiaomi
class MiBand implements Clock{
    name = "Mi Band";
    showClock(): string{
        return `${this.name} готово к просмотру`;
    }
}

class AirDots implements Headphones{
    name = "Air Dots";
    showHeadphones(): string{
        return `${this.name} готово к просмотру`;
    }
    searchBrand(collaborator: Clock): string {
        const result = collaborator.showClock();
        return `Возможно Вам нужны еще (${result}) - это часы от нашего бренда`;
    }
}

// Проверочная функция
function showAccessories(accessories: MobileAccessories) {
    const clock = accessories.addClock();
    const headphones = accessories.addHeadphones();

    console.log(clock.showClock());
    console.log(headphones.showHeadphones());
    console.log(headphones.searchBrand(clock));
}

console.log('Test Apple...');
showAccessories(new AppleStore());

console.log('Test Xiaomi...');
showAccessories(new XiaomiStore());