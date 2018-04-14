function weather(id, type, mileChange, healthChange, probability) {
	this.id = id;
	this.type = type;
	this.mileChange = mileChange;
	this.healthChange = healthChange;
	this.probability = probability; 
}

var weatherPossibilities = []; 
weatherPossibilities.push(new weather("1","Very Hot", .7, -8, ".1" ));
weatherPossibilities.push(new weather("2", "Hot", .9, -3, ".1"));
weatherPossibilities.push(new weather("3", "Warm", 1, 1, ".2" ));
weatherPossibilities.push(new weather("4", "Cool", .95, 1, ".1"));
weatherPossibilities.push(new weather("5", "Cold", .8, -5, ".1"));
weatherPossibilities.push(new weather("6", "Very Cold", .7, -12, ".1" ));
weatherPossibilities.push(new weather("7", "Rain", .6, -4, ".1"));
weatherPossibilities.push(new weather("8", "Heavy Rain", .4, -8, ".05"));
weatherPossibilities.push(new weather("9", "Snow", .3, -15, ".05" ));
weatherPossibilities.push(new weather("10", "Blizzard", .1, -30, ".05" ));
weatherPossibilities.push(new weather("11", "Heavy Fog", .5,  -3, ".05"));



// randomly selects weather based on the probability that is assigned 
exports.getRandomWeather = function() {
 var weatherChance = [1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10, 11];
  var rand = Math.floor(Math.random() * weatherChance.length);
  	return weatherPossibilities[weatherChance[rand] - 1];
  }


// shows the contents of the weatherPossibilites array
exports.getAllWeathers = function() {
	return weatherPossibilities;
}