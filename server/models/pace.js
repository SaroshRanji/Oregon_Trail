
function pace(name, mileChange, healthChange) {
	this.name = name;
	this.mileChange = mileChange;
	this.healthChange = healthChange;
}

var paces = [];
paces.push(new pace("Steady", 12, 0));
paces.push(new pace("Strenuous", 15, -3));
paces.push(new pace("Grueling", 9, -8));
paces.push(new pace("Resting", 0, 5));

//displays the contents of the selected  pace
exports.getCurrentPace = function() {
	var i = 0;
	return paces[i];

}

// shows the contents of the paces array
exports.getAllPaces = function() {
	return paces;
}
