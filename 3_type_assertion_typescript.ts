//  In order to use the method associated with variable type. we should give type of a variable.
// This allows us to use dot (.) notation to use the available method associated with that type.

let message = 'abc'; // In this case type of the message variable is a string.
let storeOne = message.endsWith('c');  // We can use dot notation method to use the method associated with string.


// If we assign type "any" to the variable then we can not use dot notation method.

let messageTwo;   // Type is any. we can not use dot notation
message = 'abc';
let storeTwo = (<string>messageTwo).endsWith('c'); // if type is any then use this method to bring the dot notation.
let storeThree = (messageTwo as string).endsWith('c'); //This is another method for dot method if type is not assigned.

