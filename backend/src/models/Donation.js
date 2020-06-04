const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const DonationSchema = new Schema({
    UserId: { type: ObjectId, required: true },
    ProjectId: { type: ObjectId, required: true },
    DonationAmount: { type: Number, required: true },
    DonationDate: { type: Date, default: Date.now },
    DonationStatus: { type: Boolean, default: true }
})

module.exports = mongoose.model('Donation', DonationSchema);