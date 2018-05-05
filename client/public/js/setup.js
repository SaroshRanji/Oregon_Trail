


function getScreen(screenId) {
    fetch('/api/setup/screen/' + screenId).then(function(response) {
        if (response.status !== 200) {
            console.log(response.status + " msg: " + response.value);
            return;
        }
        response.text().then(function(data) {
            gameContainer.innerHTML = data;
//calls summary page


        })
    });
}
getScreen(0);

//screen 0
gameContainer.addEventListener("click", function(e) {
    // get the element clicked
    var targetElement = event.target || event.srcElement;
    if(targetElement.id == "bankerMenuItem") {
        saveProfession("banker");
        saveMoney(2000);
    }
    if(targetElement.id == "carpenterMenuItem") {
        saveProfession("carpenter");
        saveMoney(1800);
    }
    if(targetElement.id == "farmerMenuItem") {
        saveProfession("farmer");
        saveMoney(1500);
    }
    if(targetElement.id == "differencesMenuItem") {
        console.log("learn more!");
    }
  

   
});

//screen 1
gameContainer.addEventListener("click", function(e) {
    var targetElement = event.target || event.srcElement;
    if(targetElement.id == "page1sub") {
        savePlayerOneName(document.getElementById("player0").value);
    }

    });


//screen 2
gameContainer.addEventListener("click", function(e) {
    var targetElement = event.target || event.srcElement;
    if(targetElement.id == "page2sub") {
        savePartyNames(document.getElementById("player1").value);
        savePartyNames(document.getElementById("player2").value);
        savePartyNames(document.getElementById("player3").value);
        savePartyNames(document.getElementById("player4").value);
    }

    });

//Game screen 3
gameContainer.addEventListener("click", function(e) {
    // get the element clicked
    var targetElement = event.target || event.srcElement;
    if(targetElement.id == "marchItem") {
        saveMonth("march");
    }
    if(targetElement.id == "aprilItem") {
        saveMonth("april");
    }
    if(targetElement.id == "mayItem") {
        saveMonth("may");
    }
    if(targetElement.id == "juneItem") {
        saveMonth("june");
    }
    if(targetElement.id == "julyItem") {
        saveMonth("july");
    }
    
});

function saveProfession(profession) {
    fetch('/api/setup/profession',
        {
            method:'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: '{"profession": "' + profession + '"}'
        }).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
          
            return;
        }
        else{

            getScreen(1);
        }
     
        console.log("profession " + profession + " saved!");
    });
}

function saveMoney(money) {
    fetch('/api/setup/money',
        {
            method:'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: '{"money": "' + money + '"}'
        }).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
          
            return;
        }
        else{

           
        }
     
        console.log("money " + money + " saved!");
    });
}

function savePlayerOneName(playerOneName) {
    fetch('/api/setup/playerOneName',
        {
            method:'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: '{"Leader ": "' + playerOneName + '"}'
        }).then(function(response) {
              var chosenLeader = playerOneName;
            console.log(chosenLeader);
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            return;
        }
        else{
           
            getScreen(2);
        }
     
        console.log("Leader " + playerOneName + " saved!");
    });
}

function savePartyNames(partyNames) {
    fetch('/api/setup/partyNames',
        {
            method:'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: '{"partyNames ": "' + partyNames + '"}'
        }).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
            
            return;
        }
        else{
            getScreen(3);
        }
     
        console.log("partyNames " + partyNames + " saved!");
    });
}

function saveMonth(month) {
    fetch('/api/setup/month',
        {
            method:'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: '{"Month": "' + month + '"}'
        }).then(function(response) {
            
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
         
            return;
        }
        else{
            getScreen(4);

        }
     
        console.log("Month " + month + " saved!");
    });
}

/*
function showSettings(data){
    fetch ('/api/setup/data',
    {
        method: 'post'
        headers: {
         "Content-type": "application/json; charset=UTF-8"
            },
            body: '{"data": "' + data + '"}'
        })


    response.json().then(function(data))
        populateSettings(data);
}


function populateSettings(settings){

    document.getElementById('playerOneName').innerHTML = settings.playerNames[0];
    document.getElementById('partyNames').innerHTML = settings.playerNames[1];
    document.getElementById('partyNames').innerHTML = settings.playerNames[2];
    document.getElementById('partyNames').innerHTML = settings.playerNames[3];
    document.getElementById('partyNames').innerHTML = settings.playerNames[4];
    document.getElementById('profession').innerHTML = settings.playerProfession;
    document.getElementById('money').innerHTML = settings.playerMoney;
    document.getElementById('month').innerHTML = settings.startMonth;

}

*/