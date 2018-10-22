var mongoose = require('mongoose');

//sets mongoose to use the built in Promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};