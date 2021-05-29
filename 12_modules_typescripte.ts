// Module: each file in typeScript is a module, if they are exportable.
// Writing a clean coe it an integral part of the coding. Hence, codes are separated into small parts. like Interface, class, variable.
// Many a times, one type of Module (Interface, class, variable) need to used by serveral other components of the application. They are created a one place and being used at several place.
// For this One type of Module need to exported and import were it has been used.
// E.g An Interface can be exported and imported in the a class.
// A class can be exported and imported into the another class.
// A collection of variables are ground into a single file and exported and imported into the another class.

// TypeScript is modular. we can divide our code up over several files
// In Angular, we then use  "import {} from ''" to access the code in these files

// We export a class, interface, variable, ... by adding 'export' keyword in front of it

export class ExportedClass {
    // This class is exported
}