

function RowIncrease(tile, pointValue) {
    for (var i = 0; i < colCount; i++) {
        var curTile = GetTile(tile.row, i);
        IncreaseTileValue(curTile, pointValue);
    }
}

function ColIncrease(tile, pointValue) {
    for (var i = 0; i < rowCount; i++) {
        var curTile = GetTile(i, tile.col);
        IncreaseTileValue(curTile, pointValue);
    }
}

function CornerIncrease(pointValue) {
    var tileArray = new Array();
    AddToArray(tileArray, GetTile(0, 0));
    AddToArray(tileArray, GetTile(0, colCount - 1));
    AddToArray(tileArray, GetTile(rowCount - 1, 0));
    AddToArray(tileArray, GetTile(rowCount - 1, colCount - 1));

    IncreaseTileArray(tileArray, pointValue);
}

function BoxIncrease(tile, pointValue) {
    var tileArray = new Array();
    for (var i = tile.row - 1; i <= tile.row + 1; i++) {
        for (var j = tile.col - 1; j <= tile.col + 1; j++) {
            AddToArray(tileArray, GetTile(i, j));
        }
    }

    IncreaseTileArray(tileArray, pointValue);
}

function AllColorIncrease(colorIndex, pointValue) {
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var tile = GetTile(i, j);
            if (tile.colorLevel == colorIndex) {
                IncreaseTileValue(tile, pointValue);
            }
        }
    }
}

function RemainderIncrease(denominator, remainder, pointValue) {
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var tile = GetTile(i, j);
            if (tile.numberLevel != 0 && tile.numberLevel % denominator == remainder) {
                IncreaseTileValue(tile, pointValue);
            }
        }
    }
}

function AdjacentIncrease(tile, pointValue) {
    var tileArray = GetAdjTiles(tile);

    IncreaseTileArray(tileArray, pointValue);
}

function SameNumberIncrease(tile, pointValue) {

    var originalTileNumber = tile.numberLevel;

    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var curTile = GetTile(i, j);
            if (curTile.numberLevel == originalTileNumber) {
                IncreaseTileValue(curTile, pointValue);
            }
        }
    }
}

function SameColorIncrease(tile, pointValue) {

    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var curTile = GetTile(i, j);
            if (curTile.colorLevel == tile.colorLevel) {
                IncreaseTileValue(curTile, pointValue);
            }
        }
    }
}

function IsolatedColorIncrease(pointValue) {
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var curTile = GetTile(i, j);
            var colorArray = GetAdjColorCounts(curTile);

            if (colorArray[curTile.colorLevel] == 0) {
                IncreaseTileValue(curTile, pointValue);
            }
        }
    }
}

function GrayNextToColorIncrease() {
    for (var i = 0; i < rowCount; i++) {
        for (var j = 0; j < colCount; j++) {
            var curTile = GetTile(i, j);
            if (curTile.colorLevel == 0) {
                var colorArray = GetAdjColorCounts(curTile);
                var adjColorTotal = colorArray[1] + colorArray[2] + colorArray[3];
                IncreaseTileValue(curTile, adjColorTotal);
            }
        }
    }
}

function SameColorBlobIncrease(tile, pointValue) {

    var blobArray = new Array();
    GetColorBlob(blobArray, tile, tile.colorLevel)
    IncreaseTileArray(blobArray, pointValue);
}

function SameNumberBlobIncrease(tile, pointValue) {

    var blobArray = new Array();
    GetNumberBlob(blobArray, tile, tile.numberLevel)
    IncreaseTileArray(blobArray, pointValue);
}

function ColorBlobSizeIncrease(tile, pointValue) {

    var blobArray = new Array();
    GetColorBlob(blobArray, tile, tile.colorLevel)
    IncreaseTileValue(tile, blobArray.length);
}

function NumberBlobSizeIncrease(tile, pointValue) {

    var blobArray = new Array();
    GetNumberBlob(blobArray, tile, tile.numberLevel)
    IncreaseTileValue(tile, blobArray.length * pointValue);
}
