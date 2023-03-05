const myArray = [1,2,3]
// Syntax
// splice(start)
// splice(start, deleteOrChangeCount)
// splice(start, deleteOrChangeCount, item1)
// splice(start, deleteOrChangeCount, item1, item2, itemN)

myArray.splice(1, 1, 'b', 'c')
console.log(myArray); // [ 1, 'b', 3 ]

myArray.splice(2,1,'d')
console.log(myArray) // [ 1, 'b', 'c' ] 

// test3