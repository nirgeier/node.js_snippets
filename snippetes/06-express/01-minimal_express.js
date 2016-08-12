var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello from express');
});

app.get('/users/:user_id/:p', function(req, res) {
    res.send(`Loading users url. UserId: ${req.params.user_id}`);
});


app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});


npm install -g express-generator
