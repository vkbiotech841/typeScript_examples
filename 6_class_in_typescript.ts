// Classes allow us to create 'blueprints' for objects
// In Angular, we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class

class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle(): void {
        this.speed--;
    }

    getSpeed(): void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let car = new Car(5);

// Method call:
car.accelerate();
car.getSpeed();


console.log(Car.numberOfWheels());



// Cohesin priciple: Variable and functin those are related, should be the part of one unit.
// Class: Groups variable(properties) and functions (methods) that are highly related.
// When a function inside a class, they are called as a method.

class Point {     // Point is a class. Which contains fields(e.g. x, y draw and getDistance method.)
    x: number;    // field: variable with number type
    y: number;    // field: variable with number type

    draw() {      // field: draw method

    };

    getDistance(another: Point) {    // field: getDistance method

    };
};

