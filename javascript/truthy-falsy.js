if ('' === true) {
    console.log('trueee');
}

if ('' === false) {
    console.log('falsee');
}

// neither of the above statements will print the message, that's because there's a difference between true/false and truthy/falsy, every value is truthy or falsy, but only booleans are true or false.

// but you can force the conversion to boolean by some methods:
// 1 - ! or !!
if (!'' === true) {
    console.log('trueee');
}

if (!!'' === false) {
    console.log('falsee');
}

// 2 - Boolean()

if (Boolean('a') === true) {
    console.log('boolean constructor trueee');
}

if (Boolean('') === false) {
    console.log('boolean constructor falsee');
}

// so the definition:
// truthy is is a value that was evaluated as true after the boolean conversion process
// falsy is a value that was evaluated as false, after the boolean conversion process 
