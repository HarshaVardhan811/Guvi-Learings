class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address}`);
    }
}

let person1 = new Person("Harsha", 27, "Andhra Pradesh");
person1.displayInfo();