const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    fname : {type: String, required:true},
    lname : {type: String},
    email : {type: String},
    phone: {type: String},
    comment: {type: String},
    users: [{type:Schema.Types.ObjectID, ref:'users'}]
});

const UserInfo = mongoose.model('usersInfo', userInfoSchema, 'usersInfo');

module.exports = UserInfo;