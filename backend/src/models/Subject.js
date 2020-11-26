const { Schema, model } = require('mongoose');

const subjectSchema = new Schema({
    name: { type: String, require: true },
    sub: { type: String, require: true }
}, {
    timestamps: true
});

module.exports = model('Subject', subjectSchema);