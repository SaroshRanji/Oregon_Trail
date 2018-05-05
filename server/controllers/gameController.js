var terrain = require('../models/terrain');
var weather = require('../models/weather');
var pace = require('../models/pace');
var gameData = require('../models/gameData');
var localGameData = gameData.getGameData();

//gets data from functions in terrain.js, pace.js, gameData.js,
// weather.js, and topTen.js 
exports.getCurrentPace = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(pace.getCurrentPace())
}


exports.getAllPaces = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(pace.getAllPaces())
}

exports.getRandomWeather = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(weather.getRandomWeather())
}

exports.getAllWeathers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(weather.getAllWeathers())
}


exports.getRandomTerrain = function(req, res) {
	res.setHeader('Content-Type', 'application/json');x
	res.send(terrain.getRandomTerrain())
}

exports.getAllTerrains = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(terrain.getAllTerrains())
}

exports.getGameData = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}

exports.resetGame = function(req, res) {

//resets all game data
	localGameData.groupHealth = 100;
	localGameData.milesTraveled = 0;
    localGameData.daysOnTrail = 0;
    localGameData.message = [""];
    localGameData.playerNames = ["", "", "", "", ""];
    localGameData.playerStatus = ["", "", "", "", ""];
    localGameData.playerProfession = [""];
    localGameData.playerMoney = 0;
    localGameData.startMonth =[""];

	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData)
}

exports.updateGame = function(req, res) {

// gets data from  the terrain, weather, and pace js files
	localGameData.currentTerrain = terrain.getRandomTerrain();
    localGameData.currentWeather = weather.getRandomWeather();
	localGameData.currentPace = pace.getCurrentPace();



// adds current status of group health by the health loss 
// that corresponds with the current weather that is selected
	localGameData.groupHealth += localGameData.currentWeather.healthChange;

// adds current status of miles traveled by the mile change  
// that corresponds with the current weather that is selected
	localGameData.milesTraveled = localGameData.milesTraveled 
	+ (localGameData.currentWeather.mileChange * localGameData.currentPace.mileChange);

// adds current status of group health by the health loss 
// that corresponds with the pace that is selected
	localGameData.groupHealth += localGameData.currentPace.healthChange;


//if user is within 100 miles from beating the game they will have a 15% change to find a bear
  if (localGameData.milesTraveled >= 400 && localGameData.milesTraveled <= 500) {
    for (i = 0; i < 5; i++){
        var chance = Math.floor(Math.random() * 100) + 1;
        if (chance <= 15){
        localGameData.message2 = "Your group encountered a bear"
        localGameData.playerStatus[i] = "Dead";
      } else{
          localGameData.message2 = ""
      }}}

  //if user is within 200 miles and 400 miles they will have a 8% change to find fresh water and gain 10 health
  if (localGameData.milesTraveled >= 200 && localGameData.milesTraveled <= 400) {
    for (i = 0; i < 5; i++){
        var chance = Math.floor(Math.random() * 100) + 1;
        if (chance <= 8){
        localGameData.message2 = "You found some fresh water"
        localGameData.groupHealth = localGameData.groupHealth + 10;
      } else{
          localGameData.message2 = ""
      }}}



// if player travels more than 500 miles within 45 days, notify player
// that they won
	if (localGameData.milesTraveled > 500 && localGameData.daysOnTrail < 45 ) {
   	 localGameData.message = "You Won!"
 	 } else {
  	
 	 }


  // every time the game updates a day is recorded 
  if (localGameData.daysOnTrail < 45) {
    localGameData.daysOnTrail += 1;

    //if more than 45 days passes display message
  } else {
    localGameData.message = "Your party is lost in the snowy mountains and has eaten each other.";
  
  }
  //if health happens to go over dont allow it
  if (localGameData.groupHealth > 100){
	localGameData.groupHealth = 100;
} else {

}

  if (localGameData.groupHealth <= 100 && localGameData.groupHealth >= 80){
  	localGameData.message = "good";

  } else if (localGameData.groupHealth < 80 && localGameData.groupHealth >= 50){
  	localGameData.message = "fair";

  } else if (localGameData.groupHealth < 50 && localGameData.groupHealth >= 20){
  	localGameData.message = "poor (each player has a 3% chance of dying every day)";
  	
  		for (i = 0; i < 5; i++){
  			var chance = Math.floor(Math.random() * 100) + 1;
  			if (chance <= 3){
  			localGameData.playerStatus[i] = "Dead";
  		} else{

  		}
  		} 

  } else if (localGameData.groupHealth < 20 && localGameData.groupHealth > 0){
  	localGameData.message = "very poor (each player has a 10% chance of dying every day)";
  		for (i = 0; i < 5; i++){
  			var chance = Math.floor(Math.random() * 100) + 1;
  			if (chance <= 10){
  			localGameData.playerStatus[i] = "Dead";
  		} else{
  			
  		}
  		} 


  } else  {
  	localGameData.message = "everyone is dead";
  	for (i = 0; i < 5; i++){
  		localGameData.playerStatus[i] = "Dead";
  	}
  	localGameData.player
}





	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}

