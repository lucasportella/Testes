const func1 = () => console.log('load script1');

// ignore the vscode 3 dots warning under the await word, it makes all the difference here, an async function works synchronously with there is no await inside it. But if there is an await inside it, it work asynchronously, even if the await makes no sense, like this case.
const func2 = async () => {
    console.log('load script 1.5')
    const a = await 0 // till here, it will run synchronously, lines below run async
    console.log('load script2');
};

const func3 = () => console.log('load script3');

func1()
func2()
func3()

// execution order:
// load script1
// load script3
// load script2