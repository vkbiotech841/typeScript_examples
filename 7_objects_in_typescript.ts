// Object: is an instance of class.

class PointTwo {     // Point is a class. Which contains fields(e.g. a, b draw and getDistance method.)
    a: number;    // field: variable with number type
    b: number;    // field: variable with number type

    draw() {      // field: draw method
        console.log('a:' + this.a + 'b:' + this.b);
    };

    getDistance(another: PointTwo) {    // field: getDistance method

    };
}

// A class can only be used by making its object or new instance of that class.
// Here, point is an object (instance of PointTwo class).
let point: PointTwo = new PointTwo();
// Here, we are storing PointTwo class at new object point. point should be allocated a new memory location, hence "new" keyword was used.
// Since,all field type of PointTwo is stored in point object. Then we can use dot notation method to access the their properties.

point.a = 1;
point.b = 2;
point.draw();


// Example: Think of Human as class. and vikram, ricky are objects of Human class.