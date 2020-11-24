const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:prepreparate@cluster0.bhpub.mongodb.net/prepreparate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
    console.log('connected'); // si esta todo ok, imprime esto
});

module.exports = mongoose;