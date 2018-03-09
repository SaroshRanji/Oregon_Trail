var back = document.getElementById('spacebar');



function goBackOnePage() {
	window.location = '/mainmenu';

}

back.addEventListener("click", goBackOnePage);


function spaceEvent() {


}

//makes pressing spacebar return to main menu
document.body.onkeyup = function(spaceHit){
	if(spaceHit.keyCode == 32){
		window.location = '/mainmenu';
	}
}

// Array to sort the top ten

var score = [8890, 9000, 8000, 8645, 7755, 6500, 7530, 6345, 5500];

function sortScore () {
	score.sort(function(a, b){return a - b});
}