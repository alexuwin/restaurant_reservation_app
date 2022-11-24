const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//testBranch
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

const Payments = mongoose.model('payments', paymentSchema, 'payments');

module.exports = Payments;