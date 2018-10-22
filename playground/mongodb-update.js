const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('5bc9db79c6c31ece61cd4953')},
    //     {$set: { completed: true}},
    //     {returnOriginal: false}
    // ). then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5bc9d79b9ed23a3d88697d3e')},
        {$set: {name: 'John'},
        $inc: {age: 2}},
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });


    client.close();
});