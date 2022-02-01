var express = require('express'); 
var bodyParser = require('body-parser');

// var connection = require('/app/config/connection');
var connection = require('./jadwal_kelas/config/connection');
var routes = require('./jadwal_kelas/controllers/routes');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connection.init();
routes.configure(app);

var server = app.listen(8001, function(){
	console.log('Server listening on port : ' + server.address().port);
});