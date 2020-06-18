const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const ProjectSchema = new Schema({
    UserOwnerId: { type: ObjectId, required: true },
    ProjectName: { type: String, required: true },
    ProjectDescription: { type: String, required: true },
    ProjectDateInit: { type: Date, required: true },
    ProjectDateClose: { type: Date, required: true },
    ProjectStatus: { type: Boolean, default: true }
});

module.exports = mongoose.model('Project', ProjectSchema);