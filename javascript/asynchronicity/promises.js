// promises:
// resolve and reject cases, .then to do something with success case, .catch when failure
// resolve doesn't need .then though, you can direct write return resolve(console.log('success'))
const func1 = () => console.log('load script1');

const func2async = async () => new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
    if (number >= 5) {
        return resolve('success')
    }
    reject('failure')
})
.then((value) => console.log(value))
.catch((e) => console.log(e));

const func3 = () => console.log('load script3');



func1()
func2async()
func3()

// execution order:
// load script1
// load script3
// sucess / failure
