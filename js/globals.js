// Tile object
function TileObj(row, col) {
    this.row = row;
    this.col = col;
    this.id = (row * 5) + col;
    this.numberLevel = 0;
    this.colorLevel = 0;
}

function CardObj(description, cardIndex) {
    this.description = description;
    this.cardIndex = cardIndex;
    this.active = false;
}

var mainTileArray = new Array();
var rowCount = 5;
var colCount = 5;
var colorCount = 4;

var cardDeck = new Array();

var marketArray = new Array();
var marketCount = 5;

var activeCard = -1;

var playerCount = 4;
