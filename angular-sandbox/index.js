"use strict";
const somethingFun = 'Riding my bike is fun!';
console.log(somethingFun);
const sandwich = 'BLT'; // string
const orderNumber = 1738; // number
const delicious = true; // boolean
console.log(sandwich);
console.log(orderNumber);
console.log(delicious);
function orderFood(sandwich, orderNumber) {
    console.log('Your order number is ' + orderNumber + ' and constains a ' + sandwich + ' sandwich');
}
orderFood('Ham & Cheese', 32);
;
const ingredients = {
    numberOfItems: 3,
    ingredients: ['bacon', 'lettuce', 'tomato'],
    calories: 100
};
// Function to use the interface and variable we just made
function makeASandwich(ingredients) {
    console.log('Beep boop, the ' +
        ingredients.numberOfItems +
        ' items passed in have been combined into a sandwich containing ' +
        ingredients.calories +
        ' calories');
}
// Making a sandwich using the function, variable, and interface!
makeASandwich(ingredients);
class AppointmentDateFormatter {
    // notice that the constructor doesn't have return type annotation
    constructor(day, month, year) {
        this.currentTime = new Date(year, month, day);
    }
    printDate() {
        console.log(this.currentTime.toDateString());
    }
}
const dateOfAppointment = new AppointmentDateFormatter(12, 4, 2018);
dateOfAppointment.printDate();
// So any Triangle made needs to have number for sides and numbers for angles.
let equilateral = {};
equilateral.sides = 3;
equilateral.angles = [60, 60, 60];
console.log(equilateral);
class Bat {
    constructor(name) {
        this.name = name;
    }
    whoAmI() {
        console.log("I'm " + this.name + "!");
    }
    brushHair() {
        console.log("Brush brush! Must look purdy!");
    }
    fly() {
        console.log("Look mommy! I can fly!");
    }
}
let bat = new Bat("Bartok");
bat.whoAmI();
bat.brushHair();
bat.fly();
// Declaring a class example:
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    perimeter() {
        return this.height * 2 + this.width * 2;
    }
}
// Unnamed expression example: 
const Rectangle1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};
// Named expression example: 
const Rectangle2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};
// Square class - shows inheritance
class Square extends Rectangle {
    area() {
        return this.height * this.width;
    }
}
// Generic function that tells you the type of argument and it's value
function identity(argument) {
    let argType = '';
    switch (typeof argument) {
        case 'number':
            argType = 'number';
            break;
        case 'string':
            argType = 'string';
            break;
        default:
            argType = 'neither a number or string';
    }
    return 'You pass in a ' + argType + ' which value is ' + argument;
}
console.log(identity(42));
// Yay for decorators!!
function exampleDecorator(target, propertyKey, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`Calling ${propertyKey} with `, target);
        let value = oldValue.apply(null, [arguments[1], arguments[0]]);
        console.log(`Function is executed`);
        return value + '; Decorators are crazy!';
    };
    return descriptor;
}
class MyFunction {
    exampleFunction(arg1, arg2) {
        console.log(`Arguments Received: ${arg1} and ${arg2}`);
        return `${arg1} ${arg2}`;
    }
}
const run = new MyFunction();
console.log(run.exampleFunction('Hello', 'World'));
