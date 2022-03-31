// boolean
let yes: boolean = true
let no: boolean = false

// number
let y: number = 0;
let x: number = 123.213
let z: number; // esse último não funciona com const

// string
let empty: string = '';
let abc: string = 'abc';

//null e undefined --> subtipos de todos os outros tipos
let nullValue = null
let undefinedValue = undefined;

// any (deve-se evitar usar, pois o typescript nasceu justamente pra evitar váriaveis com qualquer tipo)
var something = "Hello World!";
something = 23; // ele até compila, mas indica erro por causa da typagem por inferência(nesse caso, string)
something = true;
let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
