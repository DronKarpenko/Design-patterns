export {};

class Phone{
    brand: string;
    color: string;
    priceTo: string;
    screenSize: number;
    yearOfIssue: number;
    simCart: number;
    nfc: boolean;
    radio: boolean;
    constructor(builder){
        this.brand = builder.brand,
        this.color = builder.color,
        this.priceTo = builder.priceTo,
        this.screenSize = builder.screenSize,    
        this.yearOfIssue = builder.yearOfIssue,
        this.simCart = builder.simCart || 1,
        this.nfc = builder.nfc || false,
        this.radio = builder.radio || false
    }
}

class PhoneSearch extends Phone{
  
    constructor(brand) {
      super(brand);
      this.brand = brand;
    }

    chooseColor(color) {
        this.color = color;
        return this;
    }
  
    chooseMaxPrice(priceTo) {
      this.priceTo = `до ${priceTo} грн`;
        return this;
    }

    chooseScreenSize(screenSize) {
        this.screenSize = screenSize;
        return this;
    }
  
    chooseYearOfIssue(yearOfIssue) {
      this.yearOfIssue = yearOfIssue;
      return this;
    }

    numberOfSimCards(count) {
        this.simCart = count;
        return this;
      }

    presenceNFC() {
        this.nfc = true;
        return this;
    }

    presenceFMradio() {
        this.radio = true;
        return this;
    }
  
    build() {
      return new Phone(this);
    }
}

  const mobilePhone = new PhoneSearch('Xiaomi')
                    .chooseColor('Синий')
                    .chooseMaxPrice(5000)
                    .chooseScreenSize(5)
                    .chooseYearOfIssue(2020)
                    .presenceNFC()
                    .numberOfSimCards(2)
                    .build();

  console.log(mobilePhone)