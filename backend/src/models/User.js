const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    UserName: { type: String },
    UserDescription: { type: String },
    UserStatus: { type: Boolean }
})

module.exports = mongoose.model('User', UserSchema);