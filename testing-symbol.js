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

// testing with mongo(mocha chai test objectId from mongo):

    it('successfully gets all tasks', async () => {
      db.collection('tasks').insertMany(data);
      const response = await tasksModel.getTasks();
      expect(response).to.be.a('array');
      expect(response).to.have.lengthOf(3);
      response.forEach((task) => {
        expect(task).to.be.a('object');
        console.log(task);
        console.log(Reflect.ownKeys(task._id));
        console.log(task['_id']);
        const symbol = Reflect.ownKeys(task._id)[0]
        expect(symbol).to.be.a('symbol')
        expect(task).to.have.all.keys('_id', 'name', 'status', 'date');
      });
    });
  });
