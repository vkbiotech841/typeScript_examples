// Access modifiers in contructor:

class PointFour {

    // Instead of writing access modifiers separately, we can directly write in the constructo itself.
    constructor(public c?: number, private d?: number) {
        // this.c = c;        // if in the constructor fields are prefixed with access modifiers. then it automatically intializes those fields as well. Hence, no need to initialize thes field.
        // this.d = d;  
    }
    draw() {
        console.log('c:' + this.c + 'd:' + this.d);
    }
}

let pointFour = new PointFour();
pointFour.c    // only c field is accessible using dot notation because it public but not d.
pointFour.draw()