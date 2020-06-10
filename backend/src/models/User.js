const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    UserEmail: { type: String, required: true },
    UserName: { type: String, required: true },
    UserDescription: { type: String, required: true },
    UserNumberContact: { type: String },
    UserWallet: { type: Number, default: 3000.00 },
    UserStatus: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', UserSchema);