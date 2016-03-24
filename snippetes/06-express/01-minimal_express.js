var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello');
});

app.get('/users', function(req, res) {
    res.send('Hello users...');
});

app.listen(3000);
