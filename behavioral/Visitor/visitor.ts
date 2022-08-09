export {};
// Посетитель — это поведенческий паттерн проектирования, 
// который позволяет добавлять в программу новые операции, не изменяя классы объектов, 
// над которыми эти операции могут выполняться.


 interface Company {
    name: string;
    accept(insurer: Insurer): void;
}

class PlantCompany implements Company {
    name = "Завод";
    public accept(insurer: Insurer): void {
        insurer.visitPlant(this);
    }

    public exclusiveVisitPlant(): string {
        return `${this.name}`;
    }
}

class OfficeCompany implements Company {
    name = "Офис компании";
    public accept(insurer: Insurer): void {
        insurer.visitOffice(this);
    }

    public exclusiveVisitOffice(): string {
        return `${this.name}`;
    }
}

interface Insurer {
    visitPlant(element: PlantCompany): void;

    visitOffice(element: OfficeCompany): void;
}

class FireInsurer implements Insurer {
    public visitPlant(element: PlantCompany): void {
        console.log(`${element.exclusiveVisitPlant()} застрахован от пожаров.`);
    }

    public visitOffice(element: OfficeCompany): void {
        console.log(`${element.exclusiveVisitOffice()} застрахован от пожаров.`);
    }
}

class RobberyInsurer implements Insurer {
    public visitPlant(element: PlantCompany): void {
        console.log(`${element.exclusiveVisitPlant()} застрахован от ограбления.`);
    }

    public visitOffice(element: OfficeCompany): void {
        console.log(`${element.exclusiveVisitOffice()} застрахован от ограбления.`);
    }
}

// ------------ПРОВЕРКА-----------
function clientCode(components: Company[], insurer: Insurer) {
    for (const component of components) {
        component.accept(insurer);
    }
}

const components = [
    new PlantCompany(),
    new OfficeCompany(),
];

console.log('Работает страховщик от пожаров:');
const fireInsurer = new FireInsurer();
clientCode(components, fireInsurer);
console.log('');

console.log('Работает страховщик от ограблений:');
const robberyInsurer = new RobberyInsurer();
clientCode(components, robberyInsurer);