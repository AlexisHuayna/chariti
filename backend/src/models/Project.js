const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const ProjectSchema = new Schema({
    UserOwnerId: { type: ObjectId },
    FileId: { types: [ObjectId] },
    ProjectId: { type: ObjectId },
    ProjectName: { type: String },
    ProjectDescription: { type: String },
    ProjectDateInit: { type: Date },
    ProjectDateClose: { type: Date },
    ProjectState: { type: Boolean }
})

module.exports = mongoose.model('Project', ProjectSchema);