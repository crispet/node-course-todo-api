const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//delete multiple records
// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({}).then((doc) => {
//     console.log(doc);
// });

Todo.findByIdAndRemove('5bcdbc17c6c31ece61cd87d0').then((doc) => {
    console.log(doc)
});