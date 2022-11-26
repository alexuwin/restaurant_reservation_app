const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//testBranch
const paymentSchema = new Schema({
    paymentType: {type:String, required:true},
    cardBrand: {type:String, required:true},
    cardNumber: {type:String, required:true},
    expDate: {type:String, required:true},
    cardHolder: {type:String, required:true},
    cvv: {type:String, required:true},
    billingAddress: {type:String, required:true},
    zipCode: {type:String, required:true},
    dinerNum: {type:String, required:false},
    points: {type:String, required:false},
    mailingAddress: {type:String, required:false},
    users: [{type:Schema.Types.ObjectID, ref:'users'}]
});

const Payments = mongoose.model('Payments', paymentSchema, 'payments');
//const mySchemas = {'Users':Users, 'Payments':Payments};

module.exports = Payments;