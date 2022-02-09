const somethingFun: string = 'Riding my bike is fun!';
console.log(somethingFun);

const sandwich: string = 'BLT'; // string
const orderNumber: number = 1738; // number
const delicious: boolean = true; // boolean
console.log(sandwich);
console.log(orderNumber);
console.log(delicious);

function orderFood(sandwich: string, orderNumber: number): void {
    console.log('Your order number is ' + orderNumber + ' and constains a ' + sandwich + ' sandwich');
}

orderFood('Ham & Cheese', 32);

// Using an interface!!! 
interface ingredientBasket {
    readonly numberOfItems: number;     // readonly makes numberOfItems not editable after creation of this interface
    ingredients: Array<string>;
    calories?: number;      // The ? denotes that the calories are not a required parameter    
}

// Variable for the interface
interface sandwichIngredients {
    numberOfItems: number;
    ingredients: ['bacon', 'lettuce', 'tomato'],
    calories: number;      
};
const ingredients = {
    numberOfItems: 3,
    ingredients: ['bacon', 'lettuce', 'tomato'],
    calories: 100      
};

// Function to use the interface and variable we just made
function makeASandwich(ingredients: ingredientBasket): void {
    console.log(
        'Beep boop, the ' + 
        ingredients.numberOfItems + 
        ' items passed in have been combined into a sandwich containing ' + 
        ingredients.calories + 
        ' calories'
    );
}

// Making a sandwich using the function, variable, and interface!
makeASandwich(ingredients);


// Below is an example of using an interface to enforce the structure of a class: 
interface Lifespan {
    currentTime: Date;
    printDate(): void;      // Ensures that the printDate() method doesn't return anything in the class
}

class AppointmentDateFormatter implements Lifespan {
    // notice that the constructor doesn't have return type annotation
    constructor(day: number, month: number, year: number) {
        this.currentTime = new Date(year, month, day);
    }

    currentTime: Date;

    printDate(): void {
        console.log(this.currentTime.toDateString());
    }
}

const dateOfAppointment = new AppointmentDateFormatter(12, 4, 2018);

dateOfAppointment.printDate();

// These next two interfaces show how extending interfaces works! 

interface Shape {
    sides: number;
}

interface Triangle extends Shape {
    angles: number[];
}

// So any Triangle made needs to have number for sides and numbers for angles.
let equilateral = <Triangle>{};
equilateral.sides = 3;
equilateral.angles = [60, 60, 60];

console.log(equilateral);

// Interfaces can extend multiple other interfaces! 
// Below, the interface Superhero extends both the Person and Flyable interfaces: 
interface Person {
    name: string;
}

interface Flyable {
    flyHeight: number;
}

interface SuperHero extends Person, Flyable {
    powers: string[];
}

// You can make classes implement multiple interfaces too! 
// Below the Bat class implements Mammal and WingedAnimal interfaces
interface Animal {
    name: string;
    whoAmI(): void;
}

interface Mammal extends Animal {
    brushHair(): void;
}

interface WingedAnimal extends Animal {
    fly(): void;
}

class Bat implements Mammal, WingedAnimal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    whoAmI(): void {
        console.log("I'm " + this.name + "!");
    }

    brushHair(): void {
        console.log("Brush brush! Must look purdy!");
    }

    fly(): void {
        console.log("Look mommy! I can fly!");
    }
}

let bat = new Bat("Bartok");
bat.whoAmI();
bat.brushHair();
bat.fly();

// Declaring a class example:
class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
}

// Unnamed expression example: 
const Rectangle1 = class {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return this.height * 2 + this.width * 2;
    }
};

// Named expression example: 
const Rectangle2 = class Rectangle2 {
    height: number;
    width: number;
    constructor(height: number, width: number) {
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
function identity<T>(argument: T): string {
    let argType: string = '';

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
function exampleDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor): any {
    let oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${propertyKey} with `, target);
        let value = oldValue.apply(null, [arguments[1], arguments[0]]);

        console.log(`Function is executed`);
        return value + '; Decorators are crazy!';
    };

    return descriptor;
}

class MyFunction { 
    exampleFunction(arg1: string, arg2: string) {
        console.log(`Arguments Received: ${arg1} and ${arg2}`);
        return `${arg1} ${arg2}`;
    }
}
const run = new MyFunction();
console.log(run.exampleFunction('Hello', 'World'));