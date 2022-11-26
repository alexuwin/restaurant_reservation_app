const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//testBranch
const tableAuditSchema = new Schema({
    totalGuests: {type:Number},
    resDate: {type:String},
    timeFrame: {type:String},
    availTables: {type:Array},
    occupied: {type:Array},
    availCapacity: {type:Number},
    lastestUpdate: {type:Boolean},
    fname : {type: String},
    lname : {type: String},
    email : {type: String},
    phone: {type: String},
    comment: {type: String},
    users: [{type:Schema.Types.ObjectID, ref:'users'}]
});

const TableAudit = mongoose.model('tablesAudit', tableAuditSchema, 'tablesAudit');

module.exports = TableAudit;