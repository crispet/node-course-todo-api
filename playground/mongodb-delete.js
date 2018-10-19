const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Feed the cat'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bc9d97807deba366ca56114')}).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });




    client.close();
});