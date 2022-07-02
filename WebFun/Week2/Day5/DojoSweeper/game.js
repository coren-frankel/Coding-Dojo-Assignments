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
var endgame = document.querySelector("#gameover");
var x;
var y;
var gameClock = 0;
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    for (var ninja = 1; ninja <= 10; ninja++) {
        x = Math.floor(Math.random() * 9);
        y = Math.floor(Math.random() * 9);
        if (theDojo[x][y] == 'ninja') {
            ninja--;
        }
        if (theDojo[x][y] == 0) {
            theDojo[x][y] = 'ninja';
        }
    }
    return result;
}
// var y = Math.ceil(Math.random()*10);
//     var x = Math.ceil(Math.random()*10);
//     console.log(theDojo[x][y])
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    var adjacent = 0;
    console.log(theDojo[i][j])
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
        element.innerText = adjacent;
        theDojo[i][j] = adjacent
        gameClock++;
    } else if (theDojo[i][j] == 'ninja') {
        element.style.backgroundImage = "url('ninja.gif')";
        element.style.backgroundSize = "contain";
        for (var x = 0; x < theDojo.length; x++) {
            for (var y = 0; y < theDojo[x].length; y++) {
                if (theDojo[x][y] == 'ninja') {
                    
                    
                    
                } else {
                    
                }
            }
        }
        endgame.innerHTML = (`<div>The Ninja Assasins have found you! Game Over!<div>`)
        endgame.innerHTML += (`<button id="restart" onclick="location.reload()">restart</button>`);
        // theDojo.remove()
    }
    // element.innerText = theDojo[i][j];
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
// shows the dojo for debugging purposes
console.table(theDojo);