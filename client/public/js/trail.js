//makes pressing spacebar return to main menu
document.body.onkeyup = function(spaceHit){
	if(spaceHit.keyCode == 32){
		window.location = '/mainmenu';
	}
}

//gets json from api route update game
function getGameInformation() {
  fetch('/api/updateGame').then(function(response) {
    if (response.status !== 200) {
    console.log(response.status + " msg: " + resonse.value);
    return;
  }
  response.text().then(function(data) {
    information.innerHTML = data;

    })
  });
}

//run function
getGameInformation();


/*
//supposed to allow me to click the button and go to the next day, but it doesnt work
information.addEventListener("click", function(e) {
    // get the element clicked
    var targetElement = event.target || event.srcElement;
     if(targetElement.id == "nextDayButton") {
    }

    });

//supposed to update trail.html and display results the project is looking for, but it doesnt work
var trailData = "<p>Many kinds of people made the trip trip to Oregon.</p>"
         + "<p>You may:</p>"
         + "<ol id=\"Days on trail:\" >" + localGameData.daysOnTrail + " "
         + "<li id=\"Miles traveled:\">" + localGameData.milesTraveled + "</li>"
         + "<li id=\"Party health status:\">" + localGameData.groupHealth + "</li>"
         + "<li id=\"Current weather:\">" + localGameData.currentWeather + "</li>"
         + "<li id=\"Current pace:\">" + localGameData.currentPace + "</li>"
         + "<li id=\"Current Terrain:\">" + localGameData.currentTerrain + "</li>"
         + "<li id=\"Number of party members alive:\">" + localGameData.playerStatus.length + "</li>"
         + "</ol>"
         + "<div id=\"information\">Current game information</div>"
         + "<input type=\"button\" class=\"button-1\" id=\"nextDayButton\" value=\"Next\" />";
*/



//function nextDay(){


//}


