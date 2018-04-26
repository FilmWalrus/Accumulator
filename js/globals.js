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

function PlayerObj(playerIndex) {
    this.playerIndex = playerIndex;
    this.score = 0;
    this.extraTurns = 0;
    this.combo = 0;
    this.bestCombo = 0;
    this.active = false;

    this.ScorePoint = function () {
        this.score += 1;
        this.combo += 1;

        // Every 2 points, get an extra turn
        if (this.combo % 2 == 0) {
            this.extraTurns += 1;
        }

        // Keep track of the current and best combo
        if (this.combo > this.bestCombo) {
            this.bestCombo = this.combo;
        }
    }
}

var mainTileArray = new Array();
var rowCount = 5;
var colCount = 5;
var colorCount = 4;

var cardDeck = new Array();

var marketArray = new Array();
var marketCount = 5;

var activeCard = -1;

var activePlayer = 0;
var playerCount = 4;
var playerArray = new Array();

var startActions = 2

var pointAudio = new Audio('sounds/pointExplosion.wav');