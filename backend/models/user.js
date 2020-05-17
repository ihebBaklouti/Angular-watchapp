const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    pwd: String,
    confirmPwd: String,
    tel: String,
    adresse: String
});

//Class user:
const user = mongoose.model('User', userSchema);



//export :
module.exports = user;