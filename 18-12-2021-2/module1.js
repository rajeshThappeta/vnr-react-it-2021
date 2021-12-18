export class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }

    printData() {
        console.log("Id :", this.id)
        console.log("Name :", this.name)
        console.log("City :", this.city)
    }
}


