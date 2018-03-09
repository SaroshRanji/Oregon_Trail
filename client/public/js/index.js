var opacity = 0;
var opacityLimit =10;
var fadeEl = document.getElementById('spacebar');
fadeEl.style.opacity = opacity;


// fades text on the index.html page
function fade() {

	if(opacity < opacityLimit) {
		fadeEl.style.opacity = opacity / 10;
		opacity++;
		setTimeout(fade, 100);

	}
	else if (opacity == 100) {

		fade();

	}

	else{
		opacity = 0;
		fade();
	}


}


fade();


function goToNextPage() {
	window.location = '/mainmenu';

}

fadeEl.addEventListener("click", goToNextPage);


//makes pressing spacebar return to main menu
document.body.onkeyup = function(spaceHit){
	if(spaceHit.keyCode == 32){
		window.location = '/mainmenu';
	}
}