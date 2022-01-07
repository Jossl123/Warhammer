var mouseIsDown = false;
window.addEventListener('mousedown', function(event) {
    mouseIsDown = true;
    MouseDown(event)
});
window.addEventListener('mouseup', function() {
    mouseIsDown = false;
});


function loadFigList(army) {
    var armyList = []
    Object.entries(army).forEach(element => {
        for (let i = 0; i < element[1]; i++) {
            armyList.push(element[0])
        }
    });
    return armyList
}

var team1 = new function() {
    this.name = "Space Marines";
    this.army = {
        "summoner": 3,
        "chaos": 2,
        "super": 1
    };
    this.armyListToPlace = loadFigList(this.army);
    this.armyList = this.armyListToPlace
}

var game = {
    phase: "placeFig",
    offsetX: 0,
    offsetY: 0
}

function MouseDown(e) {
    switch (game.phase) {
        case "placeFig":
            placeFig(team1, e)
            break;

        default:
            break;
    }
}

function placeFig(team, e) {
    var X = e.clientX + game.offsetX
    var Y = e.clientY + game.offsetY
    console.log(team.armyListToPlace.pop(), X, Y)
}