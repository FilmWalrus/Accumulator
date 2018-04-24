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

        
    }

    //UpdatePlayers();
}