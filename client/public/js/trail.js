//makes pressing spacebar return to main menu
document.body.onkeyup = function(spaceHit){
	if(spaceHit.keyCode == 32){
		window.location = '/mainmenu';
	}
}