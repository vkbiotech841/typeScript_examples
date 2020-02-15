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