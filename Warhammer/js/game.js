var mouseIsDown = false;
window.addEventListener('mousedown', function(event) {
    mouseIsDown = true;
    MouseDown(event)
});
window.addEventListener('mouseup', function() {
    mouseIsDown = false;
});

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

// function loadFigList(army) {
//     var armyList = []
//     Object.entries(army).forEach(element => {
//         for (let i = 0; i < element[1]; i++) {
//             armyList.push(new element[0]())
//         }
//     });
//     return armyList
// }

var team1 = new function() {
    this.name = "Space Marines";
    this.army = [];
    this.armyListToPlace = [new Summoner(),new Summoner(), new Summoner(), new Chaos(), new Chaos(), new Supe()];
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
    if (team.armyListToPlace.length == 0)return
    var X = e.clientX + game.offsetX
    var Y = e.clientY + game.offsetY
    var figName = team.armyListToPlace.pop()
    ctx.arc(X, Y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath()
    
}