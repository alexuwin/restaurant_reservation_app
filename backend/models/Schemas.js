const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    name: {type:String, required:false},
    email: {type:String, required:false}
});

const paymentSchema = new Schema({
    cardBrand: {type:String, required:true},
    cardNumber: {type:String, required:true},
    expDate: {type:Date, required:true},
    cardHolder: {type:String, required:true},
    cvv: {type:String, required:true},
    billingAddress: {type:String, required:true},
    zipCode: {type:String, required:true},
    users: {type:Schema.Types.ObjectID, ref:'users'}
})


const Users = mongoose.model('users', userSchema, 'users');
const Payments = mongoose.model('payments', paymentSchema, 'payments');
const mySchemas = {'Users':Users, 'Payments':Payments};

module.exports = mySchemas;