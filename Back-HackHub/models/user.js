const mongoose = require("mongoose");
const config = require("../config/database");
const bcrypt = require("bcryptjs");

//user schema

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    }

});
const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};
module.exports.getUserByName = function(name, callback) {
    const query = {name: name};
    User.findOne(query, callback);
};
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err, hash)=> {
            newUser.password = hash;
            newUser.save(callback)
        })
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
       if(err) throw err;
       callback(null, isMatch);
    });
};

