const person = {
    firstName: "Sahin",
    lastName: "Islam",
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
};

console.log(person);
