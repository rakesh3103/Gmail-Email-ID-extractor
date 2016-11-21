/**
 * Created by Rakesh on 10/20/2016.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '/static'));
app.listen(8000, function(){
    console.log("Listening on port 8000");
})

app.post('/', function(req, res){
    console.log(req.body.data);
});
app.get('/', function(req, res){

    res.render('index.html');
});


