function GridSetup() {
    // Get the game grid
    var mainGrid = document.getElementById("main_grid");

    // Initialize the game grid
    for (var i = 0; i < rowCount; i++) {

        var rowArray = new Array();

        for (var j = 0; j < colCount; j++) {

            // Create a button for this grid position
            var button = document.createElement("gridSquare");
            button.className = "grid-item gray-box";
            var buttonID = (i * 5) + j;
            button.value = buttonID;
            button.id = "grid_square_" + buttonID;
            button.addEventListener("click", function () { GridClick(this) });
            mainGrid.appendChild(button);

            // Create a tile object for this grid position
            newTile = new TileObj(i, j);

            // Randomly assign a number and color
            newTile.numberLevel = Math.min(GetRandom(0, 6), GetRandom(0, 6));
            newTile.colorLevel = Math.min(GetRandom(0, 2), GetRandom(0, 2));

            rowArray.push(newTile);
        }

        mainTileArray.push(rowArray);
    }

    UpdateGrid();
}



function UpdateGrid() {

    ClearExplosions();

    // Get the current player
    var currentPlayer = playerArray[activePlayer]

    // Loop through all the tiles in the grid
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {

            // Find the tile at this position
            var tile = GetTile(i, j);

            // Find the button html element associated with this tile
            var buttonID = (i * 5) + j;
            var buttonIDName = "grid_square_" + buttonID;
            var button = document.getElementById(buttonIDName);

            // Set up button class so it gets colored based on the tile colorLevel
            if (tile.colorLevel == 1) {
                button.className = "grid-item cyan-box";
            } else if (tile.colorLevel == 2) {
                button.className = "grid-item blue-box";
            } else if (tile.colorLevel == 3) {
                button.className = "grid-item purple-box";
            } else {
                button.className = "grid-item gray-box";
            }

            // If any tile goes past the color purple, current player scores a point!
            if (tile.colorLevel >= 4) {
                tile.colorLevel = 0;
                currentPlayer.ScorePoint()

                CreateExplosions(button);
            }

            // If any tile goes to 10 or more, current player scores a point!
            while (tile.numberLevel >= 10) {
                tile.numberLevel -= 10;
                currentPlayer.ScorePoint()

                CreateExplosions(button);
            }

            // Display the tile numberLevel as the button text
            button.innerHTML = tile.numberLevel;
        }
    }

}


function GridClick(button) {

    // If no card is active in the market, exit early.
    if (activeCard < 0) {
        return;
    }

    var buttonID = button.value;

    var tile = GetTileByID(buttonID);

    // Play the active card on the grid tile clicked.
    PlayCard(activeCard, tile);
}


function ClearExplosions() {
    // Remove all old explosion elements
    var explosionTray = document.getElementById("explostion_tray");
    var childExplosions = explosionTray.children;
    for (var i = 0; i < childExplosions.length; i++) {
        var childExplosion = childExplosions[i];
        explosionTray.removeChild(childExplosion);
    }
}

function CreateExplosions(element) {

    // Create an explosion element
    var exploder = document.createElement("explosion");
    exploder.className = "explosion-circle";

    // Position over the input element
    var rect = element.getBoundingClientRect();
    exploder.style.position = "absolute";
    exploder.style.left = rect.left + 'px';
    exploder.style.top = rect.top + 'px';

    var randomDelay = Math.floor(Math.random() * 500);
    setTimeout(function () { TriggerExplosion(exploder); }, randomDelay);
}

function TriggerExplosion(explosion) {
    // Play audio
    //pointAudio.play();

    const origAudio = document.getElementById("point-audio");
    const newAudio = origAudio.cloneNode()
    newAudio.play()

    // Get the explosion tray (the html element who owns the explosions)
    var explosionTray = document.getElementById("explostion_tray");
    explosionTray.appendChild(explosion);
}