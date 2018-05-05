const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('client/public'));

//body parse 
var bodyParse = require('body-parser');
app.use(bodyParse.json({ type: 'application/json'}));


//Route for index.html
app.get('/', function(req, res) {
	res.sendFile('index.html', {root: './client/views'});
});

//Route for mainmenu.html to connect with mainmenu.js
app.get('/mainmenu', function(req, res) {
	res.sendFile('mainmenu.html', {root: './client/views'});
});

//Route for topten.html to connect with topten.js
app.get('/topten', function(req, res) {
	res.sendFile('topten.html', {root: './client/views'});
});

//Route for setup.html to connect with setup.js
app.get('/setup', function(req, res) {
	res.sendFile('setup.html', {root: './client/views'});
});

//Route for trail.html to connect with trail.js
app.get('/trail', function(req, res) {
	res.sendFile('trail.html', {root: './client/views'});
});

// include the controller
var topTenController = require('./controllers/topTenController');
var gameController = require('./controllers/gameController');
var setupController = require('./controllers/setupController');

// RESTful route for topTen
app.route('/api/topTen')
	.get(topTenController.getTopScores)
	.post(topTenController.saveTopScore);

app.route('/api/getRandomTerrain')
	.get(gameController.getRandomTerrain);

app.route('/api/getAllTerrains')
	.get(gameController.getAllTerrains);	

app.route('/api/gameData')
	.get(gameController.getGameData);

app.route('/api/updateGame')
	.get(gameController.updateGame);

app.route('/api/getAllWeathers')
	.get(gameController.getAllWeathers);

app.route('/api/getRandomWeather')
	.get(gameController.getRandomWeather);

app.route('/api/getGameData')
	.get(gameController.getGameData);

app.route('/api/getCurrentPace')
	.get(gameController.getCurrentPace);

app.route('/api/getAllPaces')
	.get(gameController.getAllPaces);

app.route('/api/resetGame')
	.get(gameController.resetGame);

app.route('/api/setup/screen/:id')
	.get(setupController.getgameScreen);
	
app.route('/api/setup/profession')
	.post(setupController.saveProfession);

app.route('/api/setup/money')
	.post(setupController.saveMoney);

app.route('/api/setup/PlayerOneName')
	.post(setupController.savePlayerOneName);

app.route('/api/setup/partyNames')
	.post(setupController.savePartyNames);

app.route('/api/setup/month')
	.post(setupController.saveMonth);






app.listen(1337, () => console.log('Example app listening on port 1337!')) 