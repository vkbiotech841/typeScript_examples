// Access modifiers: are keywords applyied to the member of class to control the access from the outside.
// There are three type of access modifiers in typescript:
// (1) public : used within a class.
// (2) private : used within a class.
// (3) protected : used when one class extends the properties of another classs, and uses its variable.
// By default, all members are public. that mean 
// We can apply access modifiers to : fields, properties or methods. 

class PointThree {     // class name should be with captal letter and follow pascal notation system.
    private c: number;
    public d: number;

    constructor(c?: number, d?: number) {   // constructor method. c and d are parametes. ? : says now parametes are optional.
        this.c = c;
        this.d = d;
    }

    draw() {
        console.log('c:' + this.c + 'd:' + this.d);
    }
}

let pointThree = new PointThree(1, 2);
// Since, d and draw method are public hence, we can access them outside of the class. but c is private. so we can not access c outside of the class using dot notation.
pointThree.d
pointThree.draw()
// Here, we can access only public members.Since, c and d are private, it can not be access outside of the class.



