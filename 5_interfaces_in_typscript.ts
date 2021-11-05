// A function can have multiple parameters.
// Some of those parameters could be related to each other. Hence, we group them together within an interface.
// Interface should also have a name. That follows a pascal notation system.
// So, instead of giving multiple parameters, we can create a custome interface and use them to other components..


// Crude method: assigning multiple parameter without creating an interface.
let drawPoint = (a, b, c, d, e, f) => {

}


// In line method: without interface- it works for simple cases with limited number of parameters.  
// point is an object with two parameters.
let drawPointTwo = (point: { x: number, y: number }) => {

}


// Using interface: Object-orient programming style. 

interface PointTwo {    // first we made an interface object with varaible
    x: number,          // Name of interface should follow pascal notation system. 
    y: number,
};

// Second, we used interface in a function.Here, pointTwo is a parameter whereas PointTwo is an interface type that contains two variables. 
let drawPointThree = (pointTwo: PointTwo) => {

};

// Interfaces allow us to create contracts other classes/ objects have to implement
// We can use them to define custom types without creating classes
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by our TypeScript compiler. 
// Hence, we can not have a function for calculating anything inside an interface. It does not mean that we can not have function inside an interface.
// We can have a function inside an interface. but it should return only void (function with its signature but without implementation logics).
// Interfaces are purely for declaration. functions of related type can not be moved inside an interface for implimentation. 
// Hence, if we wish to do so, then an interface becomes a class. Hence, concept of class are present.


// Example interface

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

let user: User;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};

// This value does satisfy the interface
user = { username: 'max', password: 'supersecret' };

// Interfaces can also contain functions (without the function body - as it only is a blueprint/ requirement)

interface CanDrive {
    accelerate(speed: number): void;
}

let car: CanDrive = {
    accelerate: function (speed: number) {
        // ...
    }
};