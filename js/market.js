function MarketSetup() {

    // Get the market grid
    var marketGrid = document.getElementById("market_grid");

    for (var i = 0; i < marketCount; i++) {

        // Create a button for this grid position
        var button = document.createElement("cardSquare");
        button.className = "market-item";
        button.value = i;
        button.id = "market_square_" + i;
        button.addEventListener("click", function () { CardClick(this) });
        marketGrid.appendChild(button);

        // Get a random card
        var cardIndex = Math.floor(Math.random() * cardDeck.length);

        // Create a tile object for this grid position
        marketArray.push("");
        ReplaceCard(i);
    }

    UpdateMarket();
}

function UpdateMarket() {

    for (var i = 0; i < marketCount; i++) {

        var buttonIDName = "market_square_" + i;
        var button = document.getElementById(buttonIDName);

        var card = marketArray[i];

        button.innerHTML = card.description;

        if (card.active) {
            button.className = "market-item active-card";
        } else {
            button.className = "market-item inactive-card";
        }
    }
}

function CardClick(button) {

    // Deactivate all cards
    for (var i = 0; i < marketCount; i++) {
        marketArray[i].active = false;
    }

    var buttonID = button.value;

    var card = marketArray[buttonID];

    // Ready the clicked card
    if (activeCard == buttonID) {
        activeCard = -1;
    } else {
        activeCard = buttonID;
        card.active = true;
    }

    UpdateMarket();
}

function ReplaceCard(marketIndex) {
    // Get a random card
    var cardIndex = GetRandom(0, cardDeck.length - 1);

    // Create a tile object for this grid position
    var newCard = Object.assign({}, cardDeck[cardIndex]);
    marketArray[marketIndex] = newCard;
}