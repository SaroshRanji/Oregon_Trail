const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('client/public'));

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: './client/views'});
});

app.listen(1337, () => console.log('Example app listening on port 1337!'))