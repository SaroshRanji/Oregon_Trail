// TopTen Model

function topTen(playerName, playerScore) {
	this.playerName = playerName;
	this.playerScore = playerScore;
	this.dateEarned = new Date();
}

exports.getNewTopScore = function(playerName, playerScore) {
	return new topTen(playerName, playerScore);

}