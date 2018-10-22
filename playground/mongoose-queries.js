const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bcda9e92e28c44710009e3a11';

//returns array which matches the query
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

//gets first document that matches the query
Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

//gets first document that matches the id

if (!ObjectID.isValid(id)){
    return console.log('ID not valid');
}
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

var userId = '5bcd88ef7b35ed48049e11b6';
User.findById(userId).then((user) => {
    if (!user){
        return console.log('User id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));