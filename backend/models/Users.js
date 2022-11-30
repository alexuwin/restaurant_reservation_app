const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:false},
    password: {type:String, required:false},
    name: {type:String, required:false},
    email: {type:String, required:false},
    phone: {type:String, required:false},
    isGuest: {type:Boolean, required:true}
});

const Users = mongoose.model('users', userSchema, 'users');

module.exports = Users;