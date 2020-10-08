// In Typescript it is necessary to declare the type of a varaible before writing any function.
// This is the way to write a type of a variable. In angular it is offen used to declar a variable.

// Types in typescript could be:
let a: number;   //Type is number
let b: boolean;  // Type is boolean
let c: string;    // type is string
let d: any;      // Type is any. It could be number,string, object or array. We assign any when we don't know the type of the variable before start.
let e: number[] = [1, 2, 3]; // Type is a number array
let f: any[] = [1, true, 'a', false]  // Type is a any array. 
let g: Array<number>; // Generic type:Generics are types which can hold/ use several types
let h: object = { age: 30 }; // Type is Object


// enum type: 
// Group of related variable are called as enum.

// Example 01: Group of related colors. Does not use itellisence.
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// Example 02: Group of related colores are grouped using enum. It uses itellisence.  
enum Color { Red = 0, Green = 1, Blue = 2 };
let backGroundColor = Color.Blue;


// Generics Type: 
// Generics are types which can hold/ use several types

// Consider an Array object

let numberArray: Array<number>; // This array will only accept numbers

// Try to initialize it with strings

numberArray = ['test']; // => Error
numberArray = [1, 2, 3];


// Example 03: Here, we are using different types to variable as an input parameter.

// First declare variables
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

// create function
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;                          // we should store the n1+n2 to result because they are numbers.
    if (showResult) {
        console.log(phrase + result);               // Here, phrase is string where a result is number. Since, phrase comes before result. Therefore, overall type will be string.
    } else {
        return result;
    }
}

// Call function
add(number1, number2, printResult, resultPhrase);


// Example 04: Object type

// This is an object without its type and with parameters. Widely used method.
let person = {           // Equals to symbol
    name: 'vikram',      // comma is present.
    age: 30,
};

console.log(person);

// This is an object with its type and without parameters.
let person1: {         // colon symbol
    name: string;      // comma is present.
    age: number;
};

console.log(person1);

// Actual object with type and parameters

let person2: {         // colon symbol
    name: string;      // comma is present.
    age: number;
} = {
    name: 'Vikram',
    age: 30
};

console.log(person2);


// Example 05: Array type

let hobbies: string[];

let person3 = {
    name: 'vikram',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

console.log(person3);

for (let hobby of person3.hobbies) {
    console.log(hobby.toUpperCase());
}

