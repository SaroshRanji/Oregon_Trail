function terrain(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;
}

var terrains = [];
terrains.push(new terrain("Valley", "/images/valley.jpg"));
terrains.push(new terrain("Mountain", "/images/mountain.jpg"));
terrains.push(new terrain("Forest", "/images/forest.jpg"));
terrains.push(new terrain("Desert", "/images/desert.jpg"));


// randomly selects one of the four terrains mentioned in the terrains array
exports.getRandomTerrain = function() {
	var rand = Math.floor(Math.random() * terrains.length);
	return terrains[rand];
}

// shows the contents of the terrains array
exports.getAllTerrains = function() {
	return terrains;
}