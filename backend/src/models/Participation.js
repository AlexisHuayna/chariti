const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const ParticipationSchema = new Schema({
    UserId: { type: ObjectId, required: true },
    ProjectId: { type: ObjectId, required: true },
    ParticipationStatus: { type: Boolean, default: true }
})

module.exports = mongoose.model('Participation', ParticipationSchema);