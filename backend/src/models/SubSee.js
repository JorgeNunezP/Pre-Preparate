const { Schema, model } = require('mongoose');

const subjectSeeSchema = new Schema({
    name: { type: String, require: true },
    sub: { type: String, require: true },
    user_id: { type: String, require: true }
}, {
    timestamps: true
});

module.exports = model('SubjectSee', subjectSeeSchema);