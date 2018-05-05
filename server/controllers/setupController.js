// game screen content

exports.startGameScreens = [];
var gameData = require('../models/gameData');
var localGameData = gameData.getGameData();


// pick profession
var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
         + "<p>You may:</p>"
         + "<ol id=\"setupQuestions1\" >"
         + "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
         + "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
         + "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
         + "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
         + "</ol>"
         + "<div id=\"selectedOption\">What is your choice?</div>";
//pick leader name
var startGame2 = "<p>What is the first name of the wagon leader?</p>"
         + "Leader Name: <input id=\"player0\" />"
         + "<input type=\"button\" class=\"button-1\" id=\"page1sub\" value=\"Next\" />";
//pick party member names
var startGame3 = "<p>What are the first names of the other members of your party?</p>"
         + "Player Name: <input id=\"player1\" /><br />"
         + "Player Name: <input id=\"player2\" /><br />"
         + "Player Name: <input id=\"player3\" /><br />"
         + "Player Name: <input id=\"player4\" /><br />"
         + "<input type=\"button\" class=\"button-1\" id=\"page2sub\" value=\"Next\" />";
//pick starting month screen
var startGame4 = "<p>It is 1848.  Your jumping off place for oregon is Independence, Missouri.You must decide which month to leave Independence.</p>"
         + "<ol id=\"setupQuestions2\" >"
         + "<li id=\"marchItem\">March</li>"
         + "<li id=\"aprilItem\">April</li>"
         + "<li id=\"mayItem\">May</li>"
         + "<li id=\"juneItem\">June</li>"
         + "<li id=\"julyItem\">July</li>"
         + "</ol>"
         + "<div id=\"selectedOption\">What is your choice?</div>";

//summary screen
var startGame5 = "<p>Here is the information you put in. </p>"
         + "<li> Leader's Profession:" + localGameData.playerProfession + ""
         + "<li> Leader's Name:" + localGameData.playerNames[0] + ""
         + "<li> Party Members " + localGameData.playerNames[1] + ", " 
         + localGameData.playerNames[2] + ", " + localGameData.playerNames[3] + ", " 
         + localGameData.playerNames[4] + "" 
         + "<li> Starting Month:" + localGameData.startMonth + "";
exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);
exports.startGameScreens.push(startGame5);


exports.getgameScreen = function(req, res) {
   console.log("testing!");
   var gameScreen = exports.startGameScreens[req.params.id];
   res.setHeader('Content-Type', 'application/json');
    res.send(gameScreen);
};



exports.savePlayerOneName = function(req, res) {
   console.log("testing");
   localGameData.playerNames[0] = req.body.PlayerOneName;
   //console.log("params : " + req.params.playerId + " and " + req.params.playerName + "settings: " +  localGameData.playerNames[req.params.playerId]);
   res.setHeader('Content-Type', 'text/html');
   res.send(localGameData.playerNames[0]);
};

exports.savePartyNames = function(req, res) {
   console.log("testing");
   localGameData.playerNames[1,2,3,4] = req.body.partyNames;
   //console.log("params : " + req.params.playerId + " and " + req.params.playerName + "settings: " +  localGameData.playerNames[req.params.playerId]);
   res.setHeader('Content-Type', 'text/html');
   res.send(localGameData.playerNames[1,2,3,4]);
};


exports.saveProfession = function(req, res) {
   console.log("testing");
   localGameData.playerProfession = req.body.profession;
   //console.log("params : " + req.params.playerId + " and " + req.params.playerName + "settings: " +  localGameData.playerNames[req.params.playerId]);
   res.setHeader('Content-Type', 'text/html');
   res.send(localGameData.playerProfession);
};

exports.saveMoney = function(req, res) {
   console.log("testing");
   localGameData.playerMoney = req.body.money;
   //console.log("params : " + req.params.playerId + " and " + req.params.playerName + "settings: " +  localGameData.playerNames[req.params.playerId]);
   res.setHeader('Content-Type', 'text/html');
   res.send(localGameData.playerMoney);
};

exports.saveMonth = function(req, res) {
   console.log("testing");
   localGameData.startMonth = req.body.month;
   //console.log("params : " + req.params.playerId + " and " + req.params.playerName + "settings: " +  localGameData.playerNames[req.params.playerId]);
   res.setHeader('Content-Type', 'text/html');
   res.send(localGameData.startMonth);
};

