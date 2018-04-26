function GameSetup() {

    DeckSetup();
    GridSetup();
    MarketSetup();
    PlayerSetup();
}

function PlayCard(card, tile) {
    // Apply the currently active card to the clicked tile.
    var cardIndex = marketArray[card].cardIndex;
    ApplyCardToTile(tile, cardIndex);

    // Increase the color of the tile clicked on.
    IncreaseTileColor(tile);

    // Update the grid and score points
    UpdateGrid();

    // Replace the card in the market and update the market display
    ReplaceCard(card);
    activeCard = -1;
    UpdateMarket();

    // Each grid click uses up 1 player action
    var currentPlayer = playerArray[activePlayer]
    currentPlayer.extraTurns -= 1

    // If the current player is out of actions, advance to the next player
    if (currentPlayer.extraTurns == 0) {
        currentPlayer.combo = 0;
        do {
            activePlayer += 1
            if (activePlayer >= playerCount) {
                activePlayer = 0
            }

            currentPlayer = playerArray[activePlayer];
        } while (!currentPlayer.active);

        playerArray[activePlayer].extraTurns = startActions
    }
    UpdatePlayers()
}


