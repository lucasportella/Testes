// is the act to declare the type of a variable with a value and not a type, ex:
let aaa: "hello" = "hello";

aaa = 'hell' // throws error

// very powerful if used with union types:

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
  printText("G'day, mate", "centre");

//   more at https://www.typescriptlang.org/docs/handbook/2/everyday-types.html literay types section