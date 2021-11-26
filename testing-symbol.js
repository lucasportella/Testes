const s1 = Symbol()
console.log((typeof s1) === 'symbol');
// output true

const myObj = { [s1]: 'test', a: 'aaa'}

console.log(s1 in myObj)
// output true

console.log(Object.keys(myObj));
// output [ 'a' ]
// ignores symbol as object property

console.log(myObj.s1)
// output undefined

console.log(myObj[s1])
// output test

console.log(Reflect.ownKeys(myObj))
// output [ 'a', Symbol() ]




// https://medium.com/intrinsic-blog/javascript-symbols-but-why-6b02768f4a5c