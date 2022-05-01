// setInterval and setTimeout are asynchronous:

const func1 = () => console.log('load script1');
const func2 = () => setTimeout(() => console.log('load script2'), 0);
const func3 = () => console.log('load script3');


func1()
func2()
func3()

// execution order:
// load script1
// load script3
// load script2
