var displayDiv = document.querySelector("#display");

function clr(){
    displayDiv.innerText = 0;
    operator = '';
    x = undefined;
    y = undefined;
}

function press(num){
    if (displayDiv.innerText == 0){
        displayDiv.innerText = num;
    } else if (displayDiv.innerText == operator){
        displayDiv.innerText = num;
    } else if (displayDiv.innerText > 0){
        displayDiv.innerText += num;
    } else if (displayDiv.innerText = '.'){
        displayDiv.innerText += (0. + num)
    }
}
var operator = '';
var x;
var y;
var solution;
function setOP(math){
    if (x == undefined){
        x = displayDiv.innerText.slice(0);
        displayDiv.innerText = math
        console.log(x)
        operator = math;
        console.log(operator)
    }
}
console.log(operator)
function calculate(){
    y = displayDiv.innerText.slice(0);
    console.log(y);
    console.log(x)
    console.log(operator)
    if (operator === '/') {
        solution = Math.round(x / y);
    } else if (operator === '*') {
        solution = x * y;
    } else if (operator === '-') {
        solution = x - y;
    } else if (operator === '+') {
        solution = x + y;
    }
    operator = '';
    x = undefined;
    y = undefined;
    Math.round(solution * 10) / 10;
    if (solution == Infinity){
        displayDiv.innerText = '∞'
    } else 
        displayDiv.innerText = solution;
}