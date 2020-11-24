const mongoose = require('mongoose');

const URI = 'mongodb+srv://Admin:prepreparate@cluster0.bhpub.mongodb.net/prepreparate'

mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));