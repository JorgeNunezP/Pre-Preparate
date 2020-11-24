const { Schema, model } = require('mongoose');

const developmentSchema = new Schema({
    suject_name: { type: String, require: true },
    subSub_name: { type: String, required: true },
    question_id: { type: String, require: true },
    user_id: { type: String, require: true }
}, {
    timestamps: true
});

module.exports = model('Development', developmentSchema);