// TypeScript: is a superset of javaScript. Any valid javaScript code is also a valid typeScript code.
// TypeScript has: strong typing, object-oriented-programming features,and catches error during the compile time.
// During compilation (use tsc fileName), typeScript codes are transpile to a javascript code. 
// In Angular Cli, we write codes in TypeScript but under the hood, cli transpile all typeScript code to a valid javascript.

// Strong typing in typeScript:
// TypeScripts - well - strong typing allows us to define types for our variables and class members.
// The compiler is going to yell at us if we assign a value of a wrong type to such a variable or member.
// Javascript is a dynamacaly typied language. That means that initialy, if we assign a variable to number then later on we can change its type.
// wheras TypeScript is a statically typied language. That means that once we assign the type of variable later on we can not change. if we assign something else, it will show compile time error.

// Declaring a variable with a type
// Using the 'let' keyword to create a variable ('const' would define an immutable constant)

let myString: string;

myString = 'This is a string';

// Try to assign a number to a string => Error
//myString = 4;

// TypeScript can also infer types

let anotherString = 'This is a string without :string'; // => Type 'string' was inferred from the assigned value

// This will still resolve in a compilation error
// anotherString = 4;

// TypeScript may only infer values when those values are assigned at the declaration
// This does not work:

let yetAnotherString;

yetAnotherString = 'This is a string';

// TypeScript does not know the type, therefore we don't get an error ... but no we're also ignoring TypeScripts strength: Typing
yetAnotherString = 5;

// Other basic types

let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>; // This is a generic type => May only hold 'strings' in array, in this case
let anything: any; // Any can be used if we don't know the actual type => Use it rarely!
// We also got void (=> nothing) and enums (a set of numeric values)

