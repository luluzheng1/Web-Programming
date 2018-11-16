const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

var mongoUri = process.env.MONGODB_URI || 'mongodb://scores:Lulu23gmail!@ds037087.mlab.com:37087/heroku_v0707pzr';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

app.get('/2048', function(req, res) {
	res.sendFile('2048.html', { root: 'public' });
});

app.get('/', function(req, res) {
	res.set('Content-Type', 'text/html');
	var indexPage = '';
	db.collection('scores', function(er, collection) {
		collection.find().toArray(function(err, results) {
			if(!err) {
				indexPage += "<!DOCTYPE HTML><html><head><title>2048 Game Center</title></head><body> \
				<h1>2048 Game Center</h1><table><tr><th>User</th><th>Score</th><th>Timestamp</th></tr>";
				results = results.sort(function(a,b) {return b.score-a.score});
				for (var count = 0; count < results.length; count++) {
					indexPage += "<tr><th>" + results[count].username +"</th><th>" + results[count].score 
							   + "</th><th>" + results[count].created_at + "</th></tr>";
				}
				indexPage += "</table></body></html>";

				res.send(indexPage);
			} else {
				res.send("<!DOCTYPE HTML><html><head></head><body><p>Error</p></body></html>");
			}
		});
	});
});

app.get('/scores.json', function(req, res) {
	res.set('Content-Type', 'text/html');
	var name = req.query.username;
	query = {username: name};

	db.collection('scores', function(er, collection) {
		collection.find().toArray(function(err, results) {
			if(query == null) {
				res.send('[]');
			}
			else if(!err) {
				db.collection('scores', function(er, collection) {
					collection.find(query).toArray(function(err, results) {
						results = results.sort(function(a, b){return b.score-a.score});
						res.send(results);
					});	
				});
			} else {
				res.send("<!DOCTYPE HTML><html><head></head><body><p>Error</p></body></html>");
			}
		});
	});
});

app.post('/submit', function(req, res) {
	//submits final score and grid for a terminated 2048 game 
	date = new Date().toString();
	score = JSON.parse(req.body.score);
	var usernameItem = req.body.username;
	var scoreItem = score;
	var gridItem = req.body.grid;
	var timeItem = date;

	var toInsert = {
		username: usernameItem,
		score: scoreItem,
		grid: gridItem,
		created_at: timeItem
	};

	db.collection('scores', function(error, coll) {
		coll.insert(toInsert, function(error, saved) {
			if(error) {
				res.send(500);
			} else {
				// send back top 10 scores
				db.collection('scores', function(er, collection) {
					collection.find().toArray(function(err, results) {
						len = results.length;
						if (len > 10) {
						results.length = 10;
						}
						// sorting algorithm
						results = results.sort(function(a, b){return b.score-a.score});
						res.send(results);
					});
				});
			}
		});
	});
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
