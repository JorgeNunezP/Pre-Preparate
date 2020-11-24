const express = require('express');
const app = express();
const cors = require('cors');

require('./database')


app.use(cors());
app.use(express.json());

// Settings
app.set('port', process.env.PORT || 3000);

app.use('/api', require('./routes/subject.routes'));
app.use('/api', require('./routes/user.routes'));

app.listen(app.get('port'), () => {
    console.log('Serveer on port ', app.get('port'));
});