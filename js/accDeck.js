function DeckSetup() {

    var cardCount = 1;
    cardDeck.push(new CardObj("+1 to row", cardCount++));
    cardDeck.push(new CardObj("+1 to column", cardCount++));
    cardDeck.push(new CardObj("+3 to corners", cardCount++));
    cardDeck.push(new CardObj("+1 to 3x3 box", cardCount++));
    cardDeck.push(new CardObj("+1 to cyan", cardCount++));
    cardDeck.push(new CardObj("+2 to blue", cardCount++));
    cardDeck.push(new CardObj("+3 to purple", cardCount++));
    cardDeck.push(new CardObj("+1 to evens", cardCount++));
    cardDeck.push(new CardObj("+1 to odds", cardCount++));
    cardDeck.push(new CardObj("+2 to adjacent", cardCount++));
    cardDeck.push(new CardObj("+2 to all with this number", cardCount++));
    cardDeck.push(new CardObj("+1 to all with this color", cardCount++));
    cardDeck.push(new CardObj("+2 to all isolated colors", cardCount++));
    cardDeck.push(new CardObj("+1 to grays for each adj. non-gray", cardCount++));
}



function ApplyCardToTile(tile, cardIndex) {

    //IncreaseTileValue(tile, 7);
    //return;

    if (cardIndex == 1) {
        // +1 to row
        RowIncrease(tile, 1);
    } else if (cardIndex == 2) {
        // +1 to col
        ColIncrease(tile, 1);
    } else if (cardIndex == 3) {
        // +3 to corners
        CornerIncrease(3);
    } else if (cardIndex == 4) {
        // +1 to box
        BoxIncrease(tile, 1);
    } else if (cardIndex == 5) {
        // +1 to cyans
        AllColorIncrease(1, 1);
    } else if (cardIndex == 6) {
        // +2 to blue
        AllColorIncrease(2, 2);
    } else if (cardIndex == 7) {
        // +3 to purple
        AllColorIncrease(3, 3);
    } else if (cardIndex == 8) {
        // +1 to evens
        RemainderIncrease(2, 0, 1);
    } else if (cardIndex == 9) {
        // +1 to odds
        RemainderIncrease(2, 1, 1);
    } else if (cardIndex == 10) {
        // +2 to adjacent
        AdjacentIncrease(tile, 2);
    } else if (cardIndex == 11) {
        // +2 to all with clicked number
        SameNumberIncrease(tile, 2);
    } else if (cardIndex == 12) {
        // +1 to all with clicked color
        SameColorIncrease(tile, 1);
    } else if (cardIndex == 13) {
        // +2 to all isolated colors
        IsolatedColorIncrease(2);
    } else if (cardIndex == 14){
        // +1 to grays for each adj non-gray
        GrayNextToColorIncrease();
    }


// +2 to diagonal
// +2 to all same # and color clicked
// +2 to all in color blob
// +2 to all in number blob
// +1 for each unique adj color
// +1 for each adj higher #

// +2 to 4-way mirror points
// +1 to 8-way mirror points
// +2 to 4-way rotations
// +5
}