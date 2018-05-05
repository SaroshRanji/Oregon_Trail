var terrain = require("./terrain");
var weather = require("./weather");
var pace = require("./pace");
//contains all the data inside the game
function gameData() {
	this.groupHealth = 100;
	this.currentTerrain = terrain.getRandomTerrain();
	this.currentWeather = weather.getRandomWeather();
 	this.milesTraveled = 0;
    this.currentPace = pace.getCurrentPace();
    this.daysOnTrail = 0;
    this.message = "";
    this.message2 = "";
    this.playerNames = ["David", "Allison", "Gina", "James", "Nick"];
    this.playerStatus = ["Alive", "Alive", "Alive", "Alive", "Alive"];
    this.playerProfession = "";
    this.playerMoney = 0;
    this.startMonth ="";
     }



exports.getGameData = function() {

	return new gameData();
}


