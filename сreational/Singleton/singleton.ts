export {};

class Seal{
    private static instance: Seal;
    public count: number;
    private constructor () {
        this.count = 0;
    }
    public static getInstance(): Seal{
        if (!Seal.instance) {
            Seal.instance = new Seal();
        }
            return Seal.instance
    }
    getSeal(){
        return this.count++;
    }
    howManyStamped(){
        console.log(`Печать поставлена ${this.count} раз`);
    }
}
// -----------ПРОВЕРКА---------------
const seal1 = Seal.getInstance();
const seal2 = Seal.getInstance();
if (seal1 === seal2) {
    console.log('Все работает');
} else {
    console.log('Ошибка');
}

seal1.getSeal();
seal1.getSeal();
seal2.getSeal();
seal2.getSeal();

seal1.howManyStamped();
seal2.howManyStamped();