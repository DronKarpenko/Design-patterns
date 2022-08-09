export {};
 
 abstract class MobileShop {

    public abstract addPhone(): MobilePhone;

    public sendOrderPhone() {
        const mobilePhone = this.addPhone();
        return mobilePhone.greetings() + ' ' + mobilePhone.answer();
    }
}

class AppleStore extends MobileShop {

    public addPhone(): MobilePhone {
        return new ApplePhone();
    }
}

class XiaomiStore extends MobileShop {
    public addPhone(): MobilePhone {
        return new XiaomiPhone();
    }
}

interface MobilePhone {
    name: string;
    greetings(): string;
    answer(): string;
}

class ApplePhone implements MobilePhone {
    // public name: string;
    // constructor(name: string){}
    name = 'IPhone 13 Pro';
    public greetings(): string {
        return `Спасибо, что обратились в AppleStore!`;
    }
    public answer(): string {
        return `Ваш заказ -  ${this.name}. Скоро с Вами свяжутся`;
    }
}

class XiaomiPhone implements MobilePhone {
    // constructor(name: string){}
    // public name: string
    name = 'Redmi Note 11';
    public greetings(): string {
        return `Спасибо, что обратились в XiaomiStore!`;
    }
    public answer(): string {
        return `Ваш заказ -  ${this.name}. Скоро с Вами свяжутся`;
    }
}

function test(creator: MobileShop) {
    console.log(creator.sendOrderPhone());
}

test(new AppleStore());
console.log('');
test(new XiaomiStore());