var mongoose = require('mongoose');

//sets mongoose to use the built in Promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};