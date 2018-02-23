const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('client/public'));

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

app.listen(1337, () => console.log('Example app listening on port 1337!')) 