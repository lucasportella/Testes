// void --> indica que função não retorna nada (undefined)
function sayHelloWorld(): void {
    console.log("Hello World!");
  }

// função com parâmetro que não retornada nada
function sumNumbersAndPrint(x: number, y: number): void {
    console.log(x + y)
}

// função que retorna string
function formatString(myString: string): string {
    return myString.toUpperCase()
  }

// função que deve receber array de números e retornar um array de números
function sumArray(numbers: number[]): number[] {
    return numbers.map((number) => number * 2);
 }

// função que tem callback, tem q usar interface ou type para a callback
interface Greeter {
    (message: string): void;
  }
  // OU
// type Greeter = (message: string) => void;
function sayHi(callback: Greeter) {
    callback('Hi!')
  }

// função com const
export const personAge = (name: string, age: number):string => `${name} tem ${age} anos!`