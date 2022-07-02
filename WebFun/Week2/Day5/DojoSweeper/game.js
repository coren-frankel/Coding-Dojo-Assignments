var theDojo = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var dojoDiv = document.querySelector("#the-dojo");
var endgame = document.querySelector('#gameover');
// var endgame = document.createElement('div');
// endgame.classList.add('gameover');
var x;
var y;
var gameClock = 0;
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami bush" onclick="howMany(${i}, ${j}, this)" 
            oncontextmenu="flag(this);return false;"></button>`;
        }
    }
    for (var ninja = 1; ninja <= 10; ninja++) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        if (theDojo[x][y] == 'ninja') {
            ninja--;
        }
        if (theDojo[x][y] == 0) {
            theDojo[x][y] = 'ninja';
        }
    }
    return result;
}
//        this function tells us how many ninjas are hiding under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    var adjacent = 0;
    if (theDojo[i][j] == 0) {
        if (i == 0) {
            if (theDojo[i][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j - 1] === 'ninja') {
                adjacent++;
            }
        } else if (i == 9) {
            if (theDojo[i][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j - 1] === 'ninja') {
                adjacent++;
            }
        } else if ((i == 0) && (j == 0)) {
            if (theDojo[i + 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j + 1] === 'ninja') {
                adjacent++;
            }
        } else if ((i == 0) && (j == 9)) {
            if (theDojo[i][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j] === 'ninja') {
                adjacent++;
            }
        } else if ((i == 9) && (j == 0)) {
            if (theDojo[i - 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j + 1] === 'ninja') {
                adjacent++;
            }
        } else if ((i == 9) && (j == 9)) {
            if (theDojo[i - 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j - 1] === 'ninja') {
                adjacent++;
            }
        } else {
            if (theDojo[i + 1][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i + 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i][j - 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j + 1] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j] === 'ninja') {
                adjacent++;
            }
            if (theDojo[i - 1][j - 1] === 'ninja') {
                adjacent++;
            }
        }
        element.classList.toggle("active");
        element.classList.remove("bush");
        element.innerText = adjacent;
        theDojo[i][j] = adjacent
        gameClock++;
        console.log(theDojo[i][j])
        if (gameClock == 90) {//Game clock tracks non-ninja squares uncovered
            endgame.style.display= 'flex';
            endgame.innerHTML = (`<div><h3>Game Over!</h3>You evaded the ninjas, and live to see another day!<div>`)
            endgame.innerHTML += (`<button id="restart" onclick="location.reload()">restart</button>`);
        }
    } else if (theDojo[i][j] == 'ninja') {
        // var doom = document.querySelectorAll('.tatami');
        element.style.backgroundImage = "url('ninja.gif')";
        element.style.backgroundSize = "contain";
        // setTimeout(function () {
        //     for (var horde = 0; horde < 10; i++) {
        //         for (var ninja = 1; ninja <= 10; ninja++) {
        //         x = Math.floor(Math.random() * 9);
        //         y = Math.floor(Math.random() * 9);
        //         if (theDojo[x][y] == 'ninja') {
        //             ninja--;
        //         }
        //         if (theDojo[x][y] >= 0) {
        //             theDojo[x][y] = 'ninja';
        //         }
        //         }
        //     }
        // }, 0.5*1000);
        endgame.style.display= 'flex';
        var deliver = Math.floor(Math.random()*3);
        if (deliver == 0) {
            endgame.innerHTML = (`<div>You sneak up on a Ninja resting and eating a sandwich. A twig snaps beneath your toes and you\'re instantly spotted.<h3>Game Over!</h3><div>`)
        } else if (deliver == 1) {
            endgame.innerHTML = (`<div>Looks like you\'re up wind, because they just smelled you. The trees around you rustle  as the ninja swarm.<h3>Game Over!</h3><div>`)
        } else if (deliver == 2) {
            endgame.innerHTML = (`<div>I think that smiley bush back there just coughed. The Ninja Assasins approach before you can blame the bush.<h3>Game Over!</h3><div>`)
        }
        endgame.innerHTML = (`<div><h3>Game Over!</h3>The Ninja Assasins have found you!<div>`)
        endgame.innerHTML += (`<button id="restart" onclick="location.reload()">restart</button>`);
    }
}
function flag(element) {
    element.style.backgroundImage = "url('star.png')";
    element.style.backgroundSize = "contain";
    return false;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);

// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);
setTimeout(function () {
    // alert('Welcome to DojoSweeper! Look out for Ninjas! Use the numbers uncovered by clicking the boxes to steer clear. The number represents the amount of ninjas adjacent to the box clicked. Right click to mark the boxes you suspect to hide Ninjas!');
    alert('Welcome to DojoSweeper!\r\nInstructions: Numbers under boxes are ninjas adjacent to that box. Right click to throw shuriken at the Ninjas, and steer clear. Try to uncover all the bushes that the ninjas aren\'t hiding under. Good Luck!')
},
    0.5 * 1000)
// shows the dojo for debugging purposes
console.table(theDojo);