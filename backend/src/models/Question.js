const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    subject: { type: String, require: true },
    sub: { type: String, require: true },
    question: { type: String, require: true },
    answer: {
        false1: { type: String, require: true },
        false2: { type: String, require: true },
        false3: { type: String, require: true },
        correct: { type: String, require: true },
    }
}, {
    timestamps: true
});

module.exports = model('Question', questionSchema);