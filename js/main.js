

function GridSetup() {
    // Get the dropdowns
    var mainGrid = document.getElementById("main_grid");

    var gridWidth = 5;
    var gridHeight = 5;

    // Fill the topic dropdown
    for (var i = 0; i < gridWidth; i++) {
        for (var j = 0; j < gridHeight; j++) {
            var button = document.createElement("grid-item");
            button.className += " grid-item";
            var buttonID = (i * 5) + j;
            button.innerHTML = buttonID;
            button.id = "grid_square_" + buttonID;
            button.value = buttonID;
            button.addEventListener("click", function () { UpValue(this) });
            mainGrid.appendChild(button);
        }
    }

}

function UpValue(button) {

    var buttonDisplayValue = button.innerHTML;
    buttonDisplayValue++;
    button.innerHTML = buttonDisplayValue;
}