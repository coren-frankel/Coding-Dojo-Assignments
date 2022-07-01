var theDojo =  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    for (var ninja = 0; ninja < 10; ninja++) {
        let y = Math.floor(Math.random() * 9);
        let x = Math.floor(Math.random() * 9);
        if (theDojo[x][y] == 0) {
            theDojo[x][y] = 1;
        } else if (theDojo[x][y] == 1) {
            ninja--;
        }
    }
    return result;
}
var dojoDiv = document.querySelector("#the-dojo");
var body = document.querySelector('body');
// var x;
// var y;
var adjacent;
// var y = Math.ceil(Math.random()*10);
//     var x = Math.ceil(Math.random()*10);
//     console.log(theDojo[x][y])
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    if (element.innerText == 1) {
        element.classList.remove("active");
        element.classList.add("ninja");
        body.innerHTML = `<button onclick="location.reload()">restart</button>`;
    } else if (element.innerText === 0) {
        if (theDojo[i + 1][j + 1] === 1) {
            adjacent++;
        }
        if (theDojo[i + 1][j] === 1) {
            adjacent++;
        }
        if (theDojo[i + 1][j - 1] === 1) {
            adjacent++;
        }
        if (theDojo[i - 1][j + 1] === 1) {
            adjacent++;
        }
        if (theDojo[i - 1][j] === 1) {
            adjacent++;
        }
        if (theDojo[i - 1][j - 1] === 1) {
            adjacent++;
        }
        if (theDojo[i][j + 1] === 1) {
            adjacent++;
        }
        if (theDojo[i][j - 1] === 1) {
            adjacent++;
        }
    }
    element.classList.toggle("active");
    element.innerText = adjacent;
    
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
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);