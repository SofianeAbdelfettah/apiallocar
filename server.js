const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const compression = require('compression');
const base64Img = require('base64-img');
users = require('./routes/user.js');

app.use(bodyParser.urlencoded({
  extended: true
}));

  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });


app.use(express.static('public'));
app.use(compression());


app.get('/users', users.index);
app.post('/add', users.add);
app.get('/one/:name', users.one);

app.post('/', function (req, res) {
  if (req.body.picture != "" && req.body.name != "") {
    base64Img.img(req.body.picture, 'public/pictures/'+req.body.name, '1', function(err, filepath) {});
    res.send('ok');
  }
});

app.set('port', process.env.POR || 8000);
app.listen(app.get('port'), function () {
  console.log("Magic happens on port", app.get('port'));
});
