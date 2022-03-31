"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personAge = void 0;
// void --> indica que função não retorna nada (undefined)
function sayHelloWorld() {
    console.log("Hello World!");
}
// função com parâmetro que não retornada nada
function sumNumbersAndPrint(x, y) {
    console.log(x + y);
}
// função que retorna string
function formatString(myString) {
    return myString.toUpperCase();
}
// função que deve receber array de números e retornar um array de números
function sumArray(numbers) {
    return numbers.map((number) => number * 2);
}
// OU
// type Greeter = (message: string) => void;
function sayHi(callback) {
    callback('Hi!');
}
// função com const
const personAge = (name, age) => `${name} tem ${age} anos!`;
exports.personAge = personAge;
