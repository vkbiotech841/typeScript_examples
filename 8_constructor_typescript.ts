// Constructor: is a method inside a class. 
// Constructor is called, when we create an instance of that class.
// Constructor is used when we have multiple instances of a class.

// Class
class PointOne {
    c: number;
    d: number;

    // Constructor method inside PointOne class..
    constructor(c?: number, d?: number) {   // constructor method can have  parametes (in this case,  c and d). ? : says now parametes are optional.
        this.c = c;                         // Initializing constructor fields.
        this.d = d;
    }
    // draw is a method here.
    draw() {
        console.log('c:' + this.c + 'd:' + this.d);
    }
}

// pointOne is an object (instance of PointOne class).
// Since, here, we are making an instance of class hence, constructor is called.
// Here, we to supply the value of the constructor parameters. These values will be used by draw method.
let pointOne: PointOne = new PointOne(1, 2);

// Accessing method of PointOne class by making PointOne class's object (pointOne).
pointOne.draw()

// what if we need to accesses multiple 
