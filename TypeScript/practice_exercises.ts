// EXERCISE 1 - BASIC TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("============================== Exercise 1 ==============================")

// Create a variable of type string and assign it the value "Hello, TypeScript!"
let greetingString: string = "Hello, Typescript!"
console.log(greetingString)

// Declare a variable of type number and assign it a floating-point value.
let myFloatNum: number = 123.43
console.log(myFloatNum)

// Define an array of strings and populate it with at least three city names.
let cityNames: string [] = ["London", "Mancehster", "Leeds"]
console.log(cityNames)

// EXERCISES 2 - FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("\n\n============================== Exercise 2 ==============================")

// Write a function that takes two parameters (numbers) and returns their sum.
function add(x: number, y:number): number {
  return x + y
}
let sum1: number = add(3,6)
console.log(sum1)


// Create a function that accepts a string and a number, and returns a new string that repeats the original string the given number of times.
function stringRepeat(stringInput: string, numberInput: number): string {
  let finalString:string = "";

  for (let i=0; i < numberInput; i++){
    finalString +=stringInput;
  }

  return finalString

}
let myString = stringRepeat("Hello", 7)
console.log(myString)

// Write a function that accepts an array of numbers and returns the sum of all the elements.
function sumOfArray(...numbers: number[]): number{
  let sum: number = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0)

  return sum;
}

let mySum = sumOfArray(1,2,3,4,5);
console.log(mySum);

// EXERCISE 3 - INTERFACES AND OBJECTS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("\n\n============================== Exercise 3 ==============================")

// Create an interface representing a person with properties for name, age, and address.
interface Person {
  name: string, 
  age: number, 
  address?: string,
}

// Write a function that takes an object implementing the person interface and prints out a greeting using the person's name and age.
function printGreeting(personObject: Person): void{
  console.log(`Hello ${personObject.name}! How does it feel to be ${personObject.age}?`)
}

let myPerson: Person = {
  name: "Nahdaa",
  age: 24, 
}
printGreeting(myPerson)

// Extend the previous interface to include an array of hobbies. Update the function to display the person's hobbies as well.

interface Interests extends Person {
  hobbies: string[],
}

function printGreeting2(personObject: Interests): void{
  console.log(`Hello ${personObject.name}! How does it feel to be ${personObject.age}? I heard you like:`);
  for (let i = 0; i < personObject.hobbies.length; i++){
    console.log(`- ${personObject.hobbies[i]},`);
  }
}

let myPerson2: Interests = {
  name: "Nahdaa",
  age: 24,
  hobbies: ["Nails", "Coding", "Gaming"]
};

printGreeting2(myPerson2);

// EXERCISE 4 - CLASSES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("\n\n============================== Exercise 4 ==============================")

// Create a class representing a basic calculator. It should have methods for addition, subtraction, multiplication, and division.
class Calculator {

  private result: number;

  constructor() {
    this.result = 0;    
  }

  add(...numbers: number[]): number {
    let totalValue: number = 0;

    for (let i = 0; i < numbers.length; i++){
      totalValue += numbers[i]
    }

    this.result = totalValue;
    return totalValue;
  }

  subtract(...numbers: number[]): number {
    let totalValue: number = numbers[0];

    for (let i = 1; i < numbers.length; i++){
      totalValue -= numbers[i]
    }

    this.result = totalValue;
    return totalValue;
  }

  multiply(...numbers: number[]): number {
    let totalValue: number = 1;

    for (let i = 0; i < numbers.length; i++){
      totalValue *= numbers[i]
    }

    this.result = totalValue;
    return totalValue;
  }

  divide(...numbers: number[]): number {
    let totalValue: number = numbers[0];

    for (let i = 1; i < numbers.length; i++){
      totalValue /= numbers[i]
    }

    this.result = totalValue;
    return totalValue;
  }
}

// Extend the calculator class to store the result of each operation and have a method to clear the result.

class ExtendedCalculator extends Calculator {

  private history: string[];

  constructor() {
    super();
    this.history = [];
  }

  add(...numbers: number[]): number {
    let totalValue: number = 0;
    let historyString: string = "";

    for (let i = 0; i < numbers.length; i++){
      totalValue += numbers[i]

      if (i < numbers.length-1){
        historyString += numbers[i].toString() + " + "
      }
      else {
        historyString += numbers[i].toString() + ` = ${totalValue}`
      }
    }

    this.history.push(historyString);
    return totalValue;
  }

  subtract(...numbers: number[]): number {
    let totalValue: number = numbers[0];
    let historyString: string = totalValue.toString() + " - ";

    for (let i = 1; i < numbers.length; i++){
      totalValue -= numbers[i];

      if (i < numbers.length-1){
        historyString += numbers[i].toString() + " - "
      }
      else {
        historyString += numbers[i].toString() + ` = ${totalValue}`
      }
    }

    this.history.push(historyString);
    return totalValue;
  }

  multiply(...numbers: number[]): number {
    let totalValue: number = 1;
    let historyString: string = "";

    for (let i = 0; i < numbers.length; i++){
      totalValue *= numbers[i]

      if (i < numbers.length-1){
        historyString += numbers[i].toString() + " x "
      }
      else {
        historyString += numbers[i].toString() + ` = ${totalValue}`
      }
    }

    this.history.push(historyString);
    return totalValue;
  }

  getHistory():void{
    if (this.history.length == 0){
      console.log("History Empty.");
      return;
    }
    console.log("Calculator History:")
    for (let i = 0; i < this.history.length; i++) {
      console.log(this.history[i]);
    }
  }

  clearHistory():void{
    this.history = [];
    console.log("History Cleared!")
  }

}

let calculatorInstance = new ExtendedCalculator();
let myAddition = calculatorInstance.add(1,2,3,45);
let mySubtraction = calculatorInstance.subtract(10, 5, 7, -3);
let myMultiplication = calculatorInstance.multiply(2, 6, 10);

let myHistory = calculatorInstance.getHistory();
let clearHistory = calculatorInstance.clearHistory();
let myHistory2 = calculatorInstance.getHistory();


// Create a class hierarchy for shapes with a base class Shape and subclasses Circle, Rectangle, and Triangle. 
// Add methods to calculate the area for each shape.

abstract class Shape {
  abstract CalculateArea(): number;
  abstract CalculatePerimeter(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius:number) {
    super();
    this.radius = radius;
  }

  CalculateArea(): number {
    // Pi * r^2
    let area: number = Math.PI * this.radius * this.radius;
    return area;
  }

  CalculatePerimeter(): number {
    // 2 * Pi * r
    let perimeter = Math.PI * 2 * this.radius;
    return perimeter;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  CalculateArea(): number {
    let area: number = this.height * this.width;
    return area;
  }

  CalculatePerimeter(): number {
    let perimeter = (2 * this.height) + (2 * this.width)
    return perimeter;
  }
}

let myCircle = new Circle(10);
let myCircleArea = myCircle.CalculateArea().toFixed(2);
let myCirclePerimeter = myCircle.CalculatePerimeter().toFixed(2);
console.log(`\nCircle Area: ${myCircleArea}\t\t\tCircle Perimeter: ${myCirclePerimeter}`)

let myRectangle = new Rectangle(10,5);
let myRectangleArea = myRectangle.CalculateArea().toFixed(2);
let myRectanglePerimeter = myRectangle.CalculatePerimeter().toFixed(2);
console.log(`Rectangle Area: ${myRectangleArea}\t\t\tRectangle Perimeter: ${myRectanglePerimeter}`)