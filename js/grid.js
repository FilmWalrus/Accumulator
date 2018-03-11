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

    var explosionTray = document.getElementById("explostion_tray");
    var childExplosions = explosionTray.children;
    for (var i = 0; i < childExplosions.length; i++) {
        var childExplosion = childExplosions[i];
        explosionTray.removeChild(childExplosion);
    }

    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {

            var buttonID = (i * 5) + j;

            var buttonIDName = "grid_square_" + buttonID;
            var button = document.getElementById(buttonIDName);

            var tile = GetTile(i, j);

            if (tile.colorLevel == 1) {
                button.className = "grid-item cyan-box";
            } else if (tile.colorLevel == 2) {
                button.className = "grid-item blue-box";
            } else if (tile.colorLevel == 3) {
                button.className = "grid-item purple-box";
            } else {
                button.className = "grid-item gray-box";
            }

            if (tile.numberLevel >= 10) {
                tile.numberLevel = tile.numberLevel % 10;

                var exploder = document.createElement("explosion");
                exploder.className = "explosion-circle";
                
                explosionTray.appendChild(exploder);

                var rect = button.getBoundingClientRect();
                exploder.style.position = "absolute";
                exploder.style.left = rect.left + 'px';
                exploder.style.top = rect.top + 'px';

                
                
            }


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

    // Increase the color of the tile clicked on.
    IncreaseTileColor(tile);

    // Apply the currently active card to the clicked tile.
    var cardIndex = marketArray[activeCard].cardIndex;
    ApplyCardToTile(tile, cardIndex);

    UpdateGrid();

    // Replace the card in the market and update the market display
    ReplaceCard(activeCard);
    activeCard = -1;
    UpdateMarket();
}