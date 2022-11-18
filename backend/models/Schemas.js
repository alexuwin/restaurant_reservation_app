const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    name: {type:String, required:false},
    email: {type:String, required:false}
});


const Users = mongoose.model('users', userSchema, 'users');
const mySchemas = {'Users':Users};

module.exports = mySchemas;