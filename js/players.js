function PlayerSetup() {

    // Get the player grid
    var playerGrid = document.getElementById("player_grid");

    for (var i = 0; i < playerCount; i++) {

        // Create a button for this grid position
        var button = document.createElement("playerSquare");
        button.className = "player-item";
        button.value = i;
        button.id = "player_square_" + i;
        button.addEventListener("click", function () { PlayerClick(this) });
        playerGrid.appendChild(button);

        //button.innerHTML = "Player " + (i + 1);

        // Create a tile object for this grid position
        newPlayer = new PlayerObj(i);

        playerArray.push(newPlayer);
    }

    activePlayer = 0
    playerArray[activePlayer].extraTurns = startActions
    playerArray[activePlayer].active = true

    UpdatePlayers();
}

function UpdatePlayers() {

    for (var i = 0; i < playerCount; i++) {

        // Find the player at this position
        var thisPlayer = playerArray[i];

        // Find the button html element associated with this tile
        var buttonIDName = "player_square_" + i;
        var button = document.getElementById(buttonIDName);

        // Color the player buttons
        if (thisPlayer.active) {
            if (thisPlayer.playerIndex == activePlayer) {
                button.className = "player-item active-player";
            } else {
                button.className = "player-item inactive-player";
            }
        } else {
            button.className = "player-item no-player";
        }

        // Display the player stats
        var playerString = ""
        if (thisPlayer.active) {
            playerString = "Player " + (i + 1) + "<br><br>";
            playerString += "Actions: " + thisPlayer.extraTurns + "<br>";
            playerString += "Score: " + thisPlayer.score + "<br>";
            playerString += "Combo: " + thisPlayer.combo + "<br>";
            
        } else {
            playerString = "Click to Add Player";
        }

        button.innerHTML = playerString;
    }

}

function PlayerClick(button) {

    var buttonID = button.value;

    // Player 1 can not be toggled
    if (buttonID == 0 || buttonID == activePlayer) {
        return;
    }

    // Find the player at this position
    var thisPlayer = playerArray[buttonID];

    thisPlayer.active = !thisPlayer.active;

    UpdatePlayers()
}