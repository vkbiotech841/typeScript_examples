// In typeScript: Variable can be declared using either var or let keyword.

var number = 2;
let count = 3;

// Using var keyword: Only scope to the nearest function

function doSomethingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally ' + i); // No error at i, because the scope of i is to the nearest function.
};
doSomethingVar();

// Using let keyword: Only present in the Typescript. Use always.

function doSomethingLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }                            // We are seeing an error bacause i is only scope to the for loop block not the nearest function.
    console.log('Finally ' + i); // error can be seen during the writing code or compile time.Hence,it is better to understand a code.
};

doSomethingLet();