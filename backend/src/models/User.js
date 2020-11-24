 const { Schema, model } = require('mongoose');
 const bcrypt = require('bcryptjs');

 const userSchema = new Schema({
     name: { type: String, require: true },
     mail: { type: String, require: true },
     pass: { type: String, require: true },
     admin: { type: Boolean, require: true }
 }, {
     timestamps: true
 });


 userSchema.methods.encryptPassword = async pass => {
     const salt = await bcrypt.genSalt(10);
     return await bcrypt.hash(pass, salt);
 }

 userSchema.methods.matchPassword = async function(pass) {
     return await bcrypt.compare(pass, this.pass)
 }

 module.exports = model('User', userSchema);