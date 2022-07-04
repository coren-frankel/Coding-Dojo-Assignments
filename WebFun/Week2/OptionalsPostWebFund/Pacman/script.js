function mapChange() {
    world = [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];
    for (var i = 1; i < 20; i++) {
        world[i] = [2];//Left wall
        for (var j = 1; j < 20; j++) {
            var rand = Math.ceil(Math.random() * 9);
            if (rand > 2) {
                rand = 1;
            }
            world[i].push(rand);
        }
        world[i].push(2);//Right wall
    }
    world[19] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    world[1][1] = 0;//Pacman's starting position
    world[9][10] = 0;//Blinky's starting position
    world[10][9] = 0;//Pinky's starting position
    world[10][10] = 0;//Inky's starting position
    world[9][9] = 0;//Clyde's starting 

    world[9][8] = 2; world[10][8] = 2;//Left ghost wall
    world[8][9] = 2; world[8][10] = 2;//Top ghost wall
    world[9][11] = 2; world[10][11] = 2;//Right ghost wall
    world[11][10] = 2; world[11][9] = 0//ghost funnel
    world[14][10] = 3
    // setTimeout(function () { world[14][10] = 3 }, 10)
    scoreCheck();
    return world
}
function displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>"
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output;
}
var pacman = {
    x: 1,
    y: 1
};
var blinky = {
    x: 10,
    y: 9
}
var pinky = {
    x: 9,
    y: 10
}
var inky = {
    x: 10,
    y: 10
}
var clyde = {
    x: 9,
    y: 9
}
var total = 0;
function scoreCheck() {
    for (var i = 1; i < world.length - 1; i++) {
        for (var j = 1; j < world[i].length - 1; j++) {
            if (world[i][j] == 1) {
                total += 10;
            }
        }
    }
}
function endGame() {
    if (score >= total) {
        clearInterval(myInt);
        clearInterval(blinkyInt);
        clearInterval(pinkyInt);
        clearInterval(inkyInt);
        clearInterval(clydeInt);
        document.getElementById('gameOver').innerText = 'Wow, you escaped without any ectoplasm on you. Bummer. Also, you win!'

    } else if (lives == 0) {
        clearInterval(myInt);
        clearInterval(blinkyInt);
        clearInterval(pinkyInt);
        clearInterval(inkyInt);
        clearInterval(clydeInt);
        document.getElementById('gameOver').innerText = 'Busted! A ghost stumbled upon to you unhinging your jaw for pizza. Shameful. Boo!'
    }
}
mapChange(); displayWorld();
displayPacman(); displayBlinky(); displayPinky();
displayInky(); displayClyde();
var turn = document.getElementById('pacman');
var score = 0;
var lives = 3;
var myInt;
function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}
function displayBlinky() {
    document.getElementById('blinky').style.top = blinky.y * 20 + "px";
    document.getElementById('blinky').style.left = blinky.x * 20 + "px";
}
function displayPinky() {
    document.getElementById('pinky').style.top = pinky.y * 20 + "px";
    document.getElementById('pinky').style.left = pinky.x * 20 + "px";
}
function displayInky() {
    document.getElementById('inky').style.top = inky.y * 20 + "px";
    document.getElementById('inky').style.left = inky.x * 20 + "px";
}
function displayClyde() {
    document.getElementById('clyde').style.top = clyde.y * 20 + "px";
    document.getElementById('clyde').style.left = clyde.x * 20 + "px";
}

var blinkyInt = setInterval(function () { //blinky random movement generator
    var move = Math.ceil(Math.random() * 4);
    if ((move == 1) && (world[blinky.y + 1][blinky.x] != 2)) {
        blinky.y++;
        displayBlinky();
    } else if ((move == 2) && (world[blinky.y - 1][blinky.x] != 2)) {
        blinky.y--;
        displayBlinky();
    } else if ((move == 3) && (world[blinky.y][blinky.x + 1] != 2)) {
        blinky.x++;
        displayBlinky();
    } else if ((move == 4) && (world[blinky.y][blinky.x - 1] != 2)) {
        blinky.x--;
        displayBlinky();
    }

}, 200);
var pinkyInt = setInterval(function () { //pinky random movement generator
    var move = Math.ceil(Math.random() * 4);
    if ((move == 1) && (world[pinky.y + 1][pinky.x] != 2)) {
        pinky.y++;
        displayPinky();
    } else if ((move == 2) && (world[pinky.y - 1][pinky.x] != 2)) {
        pinky.y--;
        displayPinky();
    } else if ((move == 3) && (world[pinky.y][pinky.x + 1] != 2)) {
        pinky.x++;
        displayPinky();
    } else if ((move == 4) && (world[pinky.y][pinky.x - 1] != 2)) {
        pinky.x--;
        displayPinky();
    }

}, 200);
var inkyInt = setInterval(function () { //inky random movement generator
    var move = Math.ceil(Math.random() * 4);
    if ((move == 1) && (world[inky.y + 1][inky.x] != 2)) {
        inky.y++;
        displayInky();
    } else if ((move == 2) && (world[inky.y - 1][inky.x] != 2)) {
        inky.y--;
        displayInky();
    } else if ((move == 3) && (world[inky.y][inky.x + 1] != 2)) {
        inky.x++;
        displayInky();
    } else if ((move == 4) && (world[inky.y][inky.x - 1] != 2)) {
        inky.x--;
        displayInky();
    }

}, 200);
var clydeInt = setInterval(function () { //clyde random movement generator
    var move = Math.ceil(Math.random() * 4);
    if ((move == 1) && (world[clyde.y + 1][clyde.x] != 2)) {
        clyde.y++;
        displayClyde();
    } else if ((move == 2) && (world[clyde.y - 1][clyde.x] != 2)) {
        clyde.y--;
        displayClyde();
    } else if ((move == 3) && (world[clyde.y][clyde.x + 1] != 2)) {
        clyde.x++;
        displayClyde();
    } else if ((move == 4) && (world[clyde.y][clyde.x - 1] != 2)) {
        clyde.x--;
        displayClyde();
    }

}, 200);




document.onkeydown = function (e) {//Pacman control
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {//down
        clearInterval(myInt);//halt movement from other keydown
        myInt = setInterval(function () {//repeat direction movement
            if (world[pacman.y + 1][pacman.x] != 2) {//until hitting a wall
                pacman.y++;
                if ((world[pacman.y][pacman.x]) == 1) {//eat pizza and leave block empty
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                } else if ((world[pacman.y][pacman.x]) == 3) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 50;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;//keep score
            }
        }, 100);
        turn.style.transform = 'rotate(90deg)';//turn to face new direction
    } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {//up
        clearInterval(myInt);//halt movement from other keydown
        myInt = setInterval(function () {
            if (world[pacman.y - 1][pacman.x] != 2) {
                pacman.y--; turn.style.transform = 'rotate(270deg)'; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                } else if ((world[pacman.y][pacman.x]) == 3) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 50;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
    } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {//left
        clearInterval(myInt);//halt movement from other keydown
        myInt = setInterval(function () {
            if (world[pacman.y][pacman.x - 1] != 2) {
                pacman.x--; turn.style.transform = 'rotate(180deg)'; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                } else if ((world[pacman.y][pacman.x]) == 3) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 50;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {//right
        clearInterval(myInt);//halt movement from other keydown
        myInt = setInterval(function () {
            if (world[pacman.y][pacman.x + 1] != 2) {
                pacman.x++; turn.style.transform = 'rotate(0deg)'; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                } else if ((world[pacman.y][pacman.x]) == 3) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 50;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
    }
    if ((pacman.y === blinky.y) && (pacman.x === blinky.x)) {
        clearInterval(myInt);
        pacman.x = 1; pacman.y = 1; --lives;
        blinky.x = 9; blinky.y = 10;
        displayPacman(); displayBlinky();
        document.getElementById('lives').innerText = "Lives:" + lives;
    } else if ((pacman.y === pinky.y) && (pacman.x === pinky.x)) {
        clearInterval(myInt);
        pacman.x = 1; pacman.y = 1; --lives;
        pinky.x = 10; pinky.y = 9;
        displayPacman(); displayPinky();
        document.getElementById('lives').innerText = "Lives:" + lives;
    } else if ((pacman.y === inky.y) && (pacman.x === inky.x)) {
        clearInterval(myInt);
        pacman.x = 1; pacman.y = 1; --lives;
        inky.x = 10; inky.y = 10;
        displayPacman(); displayInky();
        document.getElementById('lives').innerText = "Lives:" + lives;
    } else if ((pacman.y === clyde.y) && (pacman.x === clyde.x)) {
        clearInterval(myInt);
        pacman.x = 1; pacman.y = 1; --lives;
        clyde.x = 9; clyde.y = 9;
        displayPacman(); displayClyde();
        document.getElementById('lives').innerText = "Lives:" + lives;
    } else {
        endGame();
    }
}