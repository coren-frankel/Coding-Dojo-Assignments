//List of features to build
// 1) HAVE JS DISPLAY the world of brick/coin/etc --Done!
// 2) Have the pacman move up and down

// function mapChange(){
//     let world = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];
//     var rand = 0;
//     for(var i = 1; i < 19; i++){
//         world[i] = [2];//Left wall
//         for(var j = 1; j < 19; j++){
//             rand = Math.floor(Math.random()*2)+1;
//             world[i].push([rand]);
//             if (rand === 1){
//                 collect++
//             } else
//                 continue;
//         }
//         world[i].push(2);//Right wall
//     }
//     world[19].push([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2])
// }
var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,2,1,2],
    [2,1,2,2,2,1,1,1,1,2],
    [2,1,1,1,1,1,2,1,2,2],
    [2,1,2,2,2,1,2,1,1,2],
    [2,1,2,1,1,1,2,2,1,2],
    [2,1,2,1,2,2,2,1,1,2],
    [2,1,2,1,2,1,1,1,2,2],
    [2,1,1,1,1,1,2,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
]
var pacman = {
    x:1,
    y:1
};
var collect = 0;

function displayWorld(){
    var output = '';
    for(var i =0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j < world[i].length; j++){
            if(world[i][j] == 2)
            output += "<div class='brick'></div>";
            if(world[i][j] == 1)
            output += "<div class='coin'></div>";
            if(world[i][j] == 0)
            output += "<div class='empty'></div>";
        }
    output += "\n</div>"
    // return output;
    }
    document.getElementById('world').innerHTML = output;
}
// mapChange();
displayWorld();
displayPacman();
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}
var turn = document.getElementById('pacman');
var score = 0;
document.onkeydown = function(e) {
    if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2) {//down
        setInterval(function() {if (world[pacman.y+1][pacman.x] != 2) {pacman.y++; displayPacman()}},100);
        turn.style.transform = 'rotate(90deg)';
    } else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2) {//up
        setInterval(function() {if (world[pacman.y-1][pacman.x] != 2) {pacman.y--; displayPacman()}},100);
        pacman.y--;
        turn.style.transform = 'rotate(270deg)';
    } else if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {//left
        setInterval(function() {if (world[pacman.y][pacman.x-1] != 2) {pacman.x--; displayPacman()}},100);
        pacman.x--;
        turn.style.transform = 'rotate(180deg)';
    } else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) {//right
        setInterval(function() {if (world[pacman.y][pacman.x+1] != 2) {pacman.x++; displayPacman()}},100);
        pacman.x++;
        turn.style.transform = 'rotate(360deg)';
    }
    if((world[pacman.y][pacman.x]) == 1){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        score += 10;
    }
    displayPacman()
    document.getElementById('score').innerText = 'Score:' + score;
}