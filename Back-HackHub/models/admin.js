const mongoose = require("mongoose");
const config = require("../config/database");
const bcrypt = require("bcryptjs");

//admin schema

const adminSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    emailPassword: {
        type: String
    },

    contact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    }
});

const Admin = module.exports = mongoose.model('Admin', adminSchema);

module.exports.getAdminById = function (id, callback) {
    Admin.findById(id, callback);
};
module.exports.getAdminByName = function(name, callback) {
    const query = {name: name};
    Admin.findOne(query, callback);
};
module.exports.getAdminByEmail = function(email, callback) {
    const query = {email: email};
    Admin.findOne(query, callback);
};
module.exports.addAdmin = function(newAdmin, callback){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newAdmin.password, salt, (err, hash)=> {
            newAdmin.password = hash;

            newAdmin.save(callback)
        })
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
        if(err) throw err;
        callback(null, isMatch);
    });
};
