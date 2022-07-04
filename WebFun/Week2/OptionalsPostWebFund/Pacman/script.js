function mapChange() {
    world = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];
    for (var i = 1; i < 20; i++) {
        world[i] = [2];//Left wall
        for (var j = 1; j < 20; j++) {
            var rand = Math.ceil(Math.random() * 9);
            if (rand > 2){
                rand = 1;
            }
            world[i].push(rand);
        }
        world[i].push(2);//Right wall
    }
    world[19] = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
    world[1][1] = 0;//Pacman's starting position
    world[9][10] = 0;//Blinky's starting position
    world[10][9] = 0;//Pinky's starting position
    world[10][10] = 0;//Inky's starting position
    world[9][9] = 0;//Clyde's starting 
    
    world[9][8] = 2; world[10][8] = 2;//Left ghost wall
    world[8][9] = 2; world[8][10] = 2;//Top ghost wall
    world[9][11] = 2; world[10][11] = 2;//Right ghost wall
    world[11][10] = 2;//ghost funnel
    scoreCheck();
    return world
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
function scoreCheck(){
    for(var i = 1; i < world.length-1;i++){
        for(var j = 1; j < world[i].length-1;j++){
            if(world[i][j] == 1){
                total += 10;
            }
        }
    }
    console.log(total)
}
function endGame(){
    if (score == total){
        clearInterval(myInt);
        document.getElementById('GameOver').innterText = 'Congrats, you escaped without any ectoplasm on your... sphere?'
    }
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
        }
        output += "\n</div>"
        // return output;
    }
    document.getElementById('world').innerHTML = output;
}
mapChange();
displayWorld();
displayPacman();
displayBlinky()
displayPinky()
displayInky()
displayClyde()
console.log(world);
function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
    if (world[pacman.y][pacman.x] == world[blinky.y][blinky.x]){
        
    }

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
var turn = document.getElementById('pacman');
var score = 0; lives = 3;
var myInt;
document.onkeydown = function (e) {
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {//down
        clearInterval(myInt);
        myInt = setInterval(function () {
            if (world[pacman.y + 1][pacman.x] != 2) {
                pacman.y++; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
        turn.style.transform = 'rotate(90deg)';
    } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {//up
        clearInterval(myInt);
        myInt = setInterval(function () {
            if (world[pacman.y - 1][pacman.x] != 2) {
                pacman.y--;turn.style.transform = 'rotate(270deg)'; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
        // pacman.y--;
        ;
    } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {//left
        clearInterval(myInt);
        myInt = setInterval(function () {
            if (world[pacman.y][pacman.x - 1] != 2) {
                pacman.x--;turn.style.transform = 'rotate(180deg)'; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
        // pacman.x--;
        
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {//right
        clearInterval(myInt);
        myInt = setInterval(function () {
            if (world[pacman.y][pacman.x + 1] != 2) {
                pacman.x++; turn.style.transform = 'rotate(0deg)'; if ((world[pacman.y][pacman.x]) == 1) {
                    world[pacman.y][pacman.x] = 0;
                    displayWorld();
                    score += 10;
                }
                displayPacman();
                document.getElementById('score').innerText = 'Score:' + score;
            }
        }, 100);
        // pacman.x++;
        
    }
    endGame();
}