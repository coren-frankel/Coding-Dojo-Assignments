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
    } else if (displayDiv.innerText == '.'){
        displayDiv.innerText += (0.+num);
    }else if ((displayDiv.innerText === .0)){
        displayDiv.innerText += num;
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
        operator = math;
    }
}
function calculate(){
    y = displayDiv.innerText.slice(0);
    if (operator === '/') {
        solution = x / y;
    } else if (operator === '*') {
        solution = x * y;
    } else if (operator === '-') {
        solution = x - y;
    } else if (operator === '+') {
        solution = x + y;
    }
    console.log(`${x} ${operator} ${y} = ${solution}`);
    operator = '';
    x = undefined;
    y = undefined;
    if (solution == Infinity){
        displayDiv.innerText = '∞'
    } else 
        displayDiv.innerText = solution;
}
