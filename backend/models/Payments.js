const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentType: {type:String},
    cardBrand: {type:String},
    cardNumber: {type:String},
    expDate: {type:String},
    cardHolder: {type:String},
    cvv: {type:String},
    billingAddress: {type:String},
    zipCode: {type:String},
    dinerNum: {type:String},
    points: {type:String},
    mailingAddress: {type:String},
    highTraffic: {type:Boolean},
    users: [{type:Schema.Types.ObjectID, ref:'users'}]
});

const Payments = mongoose.model('payments', paymentSchema, 'payments');

module.exports = Payments;