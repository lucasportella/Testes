// Arrays são um conjunto de valores de mesmo tipo:
let names: string[] = ["Mary Joe", "Alan Joe"]; // array de strings

// Se precisa de tipos diferentes, usar tupla:
let car: [string, string, number] = ["Ford", "F400", 10]; // array de vários tipos

// Type Aliases (apelidos de tipos) são utilizados para declarar a forma de um objeto nomeando o tipo, o que nos permite usar o mesmo tipo mais de uma vez e nos referir a ele através de um único nome. Um type alias é exatamente isso: um nome para qualquer tipo.
type Point = {
    x: number;
    y: number;
};

type character = {
    nickname: string;
    class: string;
    stats: { agi: number, str: number, int: number, hp: number, mp: number }
    createdAt: Date;
};

// aqui temos um array cujos valores são do tipo criado character
const characters: character[] = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
]

function printCoord(pt: Point) {
    console.log("O valor da coordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100


// Type Unions (união de tipos) é uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. 
// A função abaixo pode receber tanto um número quanto uma string.
function retornarCPF(cpf: number | string) {
    console.log("Seu CPF é: " + cpf);
}


// enum é com = (igual)
enum Color {
    black = "black",
    white = "white",
    red = "red",
    silver = "silver"
}

enum Door {
    door1 = 1,
    dorr2,
    door3,
    door4
}

enum Doors {
    two = 2,
    four = 4
}

enum Directions {
    right = "right",
    left = "left",
}

// interface é com : (dois pontos)
interface Car {
    _make: string;
    _color: Color;
    _doors: Doors;
}

// estendendo interface
interface EletricCar extends Car {
    _make: string;
    _color: Color;
    _doors: Doors;
    _voltage: number
}


// class sem tipagem dentro (cria-se uma interface daí - considero melhor - estamos usando a interface Car que criamos ali em cima)
class Car {
    constructor(make: string, color: Color, doors: Doors) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    honk(): void {
        console.log('Aciona a buzina. Beep!');
    }

    openTheDoor(door: Door): void {
        console.log(`Abrindo a porta ${door}.`)
    }

    closeTheDoor(door: Door): void {
        console.log(`Fechando a porta ${door}.`)
    }

    turn(direction: Directions): void {
        console.log(`Virando para a ${direction}`);

    }

}

// class com tipagem dentro
class Motorcycle {
    _make: string;
    _color: Color;
    _doors: number;

    constructor(make: string, color: Color, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
}

const car1 = new Car('Fiat', Color.black, 4)
console.log(car1.openTheDoor(Door.door3))

// Os Generics são modelos de código que você pode definir e reutilizar em toda a base de código, fornecem uma forma de informar a funções, classes ou interfaces que tipo você deseja usar ao chamá-las, além de nos ajudar a reduzir o uso do tipo any, que não é uma boa prática em TypeScript.
// Ao invés de fazermos assim?
function wrongGetArray(items : any[]) : any[] {
    return new Array().concat(items);
 }

// fazemos assim:
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
 }

//  Podemos passar quantas variáveis de tipo for necessário para nossos componentes genéricos:
 function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
 }
  
 let returnNumber = identity<number, string>(100, "Olá");
 let returnString = identity<string, string>("100", "Mundo");
 let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");


// Outra forma de uso comum para generics é com interfaces e classes :
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
 }
  
//  parametros T e U, sendo q o : T, significa retorno do T
 function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
 }
  
 let processor: ProcessIdentity<number, string> = processIdentity;
 let returnNumber2 = processor(100, "Olá");
 let returnString2 = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".
 
 
 class ProcessIdentity<T, U> {
    _value: T;
    _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
 }
  
 let processor2 = new ProcessIdentity<number, string>(100, "Olá");
 processor.getIdentity();  // imprime "Olá" e retorna 100
 