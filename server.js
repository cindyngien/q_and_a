var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session')

app.use(expressSession({
    secret:'secretbunnytoken',
    resave: true,
    saveUninitialized: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log("**** WE ARE ON PORT 8000 YO ****")
})
