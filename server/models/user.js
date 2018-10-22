var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};

// var user1 = new User({
//     email: 'johndoe@email.com'
// });
// user1.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });
