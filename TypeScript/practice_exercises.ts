// EXERCISE 1 - BASIC TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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