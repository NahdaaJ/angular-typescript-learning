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