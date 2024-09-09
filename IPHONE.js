class Phone {
    constructor(model, releaseYear, storage, price) {
        this.model = model;
        this.releaseYear = releaseYear;
        this.storage = storage;
        this.price = price;
    }

    getDetails() {
        return `Model: ${this.model}\nRelease Year: ${this.releaseYear}\nStorage: ${this.storage}\nPrice: $${this.price.toFixed(2)}`;
    }
}


class iPhone11 extends Phone {
    constructor() {
        super("iPhone 11", 2019, "64GB / 128GB / 256GB", 699);
    }
}


class iPhone12 extends Phone {
    constructor() {
        super("iPhone 12", 2020, "64GB / 128GB / 256GB", 799);
    }
}


class iPhone13 extends Phone {
    constructor() {
        super("iPhone 13", 2021, "128GB / 256GB / 512GB", 899);
    }
}


class PhoneSelectionSystem {
    constructor() {
        this.phones = {
            "1": new iPhone11(),
            "2": new iPhone12(),
            "3": new iPhone13()
        };
    }

    displayOptions() {
        console.log("Select a phone model:");
        console.log("1: iPhone 11");
        console.log("2: iPhone 12");
        console.log("3: iPhone 13");
    }

    getPhoneDetails(option) {
        const phone = this.phones[option];
        return phone ? phone.getDetails() : "Phone model not found.";
    }
}


const phoneSystem = new PhoneSelectionSystem();


function handleUserSelection(option) {
    console.log(phoneSystem.getPhoneDetails(option));
}


function startSelectionProcess() {
    phoneSystem.displayOptions();
    
   
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the number of the phone you want to select: ', (option) => {
        handleUserSelection(option);
        readline.close();
    });
}


startSelectionProcess();