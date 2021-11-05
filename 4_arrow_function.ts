// Normal function:

let log = function (message) {
    console.log(message);
};

// Arrow function:  => symbole instead of function keyword

let doLog = (message) => {
    console.log(message);
};

// Arrow function: if we have one parameter, we can even remove block scope {}

let doLogTwo = (message) => console.log(message);