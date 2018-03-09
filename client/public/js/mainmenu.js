
var musicOff = document.getElementById('optionFourOff');
var musicOn = document.getElementById('optionFourOn')


function toggleVisibility1 (musicOff) {



// makes html text apepear and disappear 
  if ( musicOff.style.display == 'block'){
    musicOff.style.display = 'none';
  }

  else {
    musicOff.style.display = 'block';
  }
}

// makes html text apepear and disappear 

function toggleVisibility2 (musicOn) {




  if ( musicOn.style.display == 'block'){
    musicOn.style.display = 'none';
  }

  else {
    musicOn.style.display = 'block';
  }
}


//makes the music play and causes text to become visible or hidden

function toggleSound() {

  var music = document.getElementById('sound');
  var count = 0;

  if (music.paused){
    

    toggleVisibility2(musicOn);
    toggleVisibility2(musicOn);

    toggleVisibility1(musicOff);

    
    sound.play();
    count++;
    
  } 

  
  else{
    
   
    toggleVisibility1(musicOff);
    toggleVisibility2(musicOn);
   
    music.pause();
    



   
  }
}


// makes numbers 1 - 3 go to desired page
document.body.onkeyup = function(numHit){
  if(numHit.keyCode == 49){
    window.location = '/trail';
  }
  else if (numHit.keyCode == 50) {

  }

  else if (numHit.keyCode == 51) {
    window.location = '/topten';
  }

  else if (numHit.keyCode == 52) {
    toggleSound();



  } 
  else{}
}




