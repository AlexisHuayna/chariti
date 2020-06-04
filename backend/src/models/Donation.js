const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const DonationSchema = new Schema({
    UserId: { type: ObjectId },
    ProjectId: { type: ObjectId },
    DonationAmount: { type: Number },
    DonationDate: { type: Date },
    DonationStatus: { type: Boolean }
})

module.exports = mongoose.model('Donation', DonationSchema);