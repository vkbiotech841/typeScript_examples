// Properties in TypeScript:


class PointFour {

    constructor(private c?: number, private d?: number) {
    }

    draw() {
        console.log('c:' + this.c + 'd:' + this.d);
    }

    // Creating method for get c accessible outside of the class.(This is just a trick)
    getC() {
        return this.c;
    }

    // Create a method inside the class. the logically allow you to set the value.
    setC(value) {
        if (value < 0)
            throw new Error('value can not be less than 0.');
    }

    // Getter: This allow us to directly access the propertie instead of call a function.
    get C() {
        return this.c;
    }

    // Setter: This allow us to directly access the propertie instead of call a function.
    set C(value) {
        if (value < 0)
            throw new Error('value can not be less than 0.');
    }

};

let pointFour: PointFour = new PointFour(1, 2);   // here, 1 and 2 are initial values for c and d.

pointFour.draw()

// Problem 01: 
// In this case, c and d parameters are private, we can not access them outside of the class. 
// If wish the access them outside of the class how can we access them?


// solution 01:
// create a method to return c inside the class. Then this, method can be access from the outside of the class.

let c = pointFour.getC();


// Problem 02:
// In this case, initial value for c and d are fixed. what if we wish to change the value. How can we do this?

// Solution 02:
// Create a method inside the class. the logically allow you to set the value.

pointFour.setC(10);

// Combined solution:
// we can also use getter and setter to the solution 02. In this case, no need to call the function.
// we can directly access the field or properties.

pointFour.C      //  now, we can access c using dot method.


