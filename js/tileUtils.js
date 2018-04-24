function GetRandom(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
}

function GetTile(row, col) {
    if (row < 0 || row >= rowCount || col < 0 || col >= colCount) {
        return;
    } else {
        return mainTileArray[row][col];
    }
}

function GetTileByID(tileID) {
    var coords = GetRowCol(tileID);
    return mainTileArray[coords[0]][coords[1]];
}

function GetRowCol(tileID) {
    var row = Math.floor(tileID / rowCount);
    //var row = tileID / rowCount;
    var col = tileID % colCount;
    return [row, col];
}

function GetPreviousColor(tile) {
    // Need to determine color when it was clicked
    var prevColorLevel = tile.colorLevel - 1;
    if (prevColorLevel < 0) {
        prevColorLevel = colorCount - 1;
    }
    return prevColorLevel
}

function IncreaseTileColor(tile) {
    tile.colorLevel++;
}

function IncreaseTileValue(tile, pointValue) {
    tile.numberLevel += pointValue;
    //if (tile.numberLevel >= 10) {
    //    tile.numberLevel = 0;
    //    return true;
    //} else {
    //    return false;
    //}
}

function IncreaseTileArray(tileArray, pointValue) {
    for (var i = 0; i < tileArray.length; i++) {
        IncreaseTileValue(tileArray[i], pointValue);
    }
}

function AddToArray(tileArray, tile) {
    if (tile) {
        tileArray.push(tile);
    }
}

function AddToArrayUnique(tileArray, tile) {
    if (tile && !tileArray.includes(tile)) {
        tileArray.push(tile);
        return true
    }
    return false
}

function GetAdjTiles(tile) {
    var adjArray = new Array();
    AddToArray(adjArray, GetTile(tile.row + 1, tile.col));
    AddToArray(adjArray, GetTile(tile.row - 1, tile.col));
    AddToArray(adjArray, GetTile(tile.row, tile.col + 1));
    AddToArray(adjArray, GetTile(tile.row, tile.col - 1));

    return adjArray;
}

function GetAdjColorCounts(tile) {
    var adjArray = GetAdjTiles(tile);

    var colorArray = [0, 0, 0, 0];

    for (var i = 0; i < adjArray.length; i++) {
        colorArray[adjArray[i].colorLevel]++;
    }

    return colorArray;
}

function GetColorBlob(blobArray, tile, colorLevel) {
    if (tile.colorLevel == colorLevel) {
        if (AddToArrayUnique(blobArray, tile)) {

            var adjArray = GetAdjTiles(tile)
            for (var i = 0; i < adjArray.length; i++) {
                GetColorBlob(blobArray, adjArray[i], colorLevel);
            }
        }
    }
}

function GetNumberBlob(blobArray, tile, numberLevel) {
    if (tile.numberLevel == numberLevel) {
        if (AddToArrayUnique(blobArray, tile)) {

            var adjArray = GetAdjTiles(tile)
            for (var i = 0; i < adjArray.length; i++) {
                GetNumberBlob(blobArray, adjArray[i], numberLevel);
            }
        }
    }
}