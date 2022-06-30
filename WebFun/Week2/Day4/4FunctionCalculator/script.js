var displayDiv = document.querySelector("#display");

function press(num){
    if (displayDiv.innerText == 0){
        displayDiv.innerText = num;
    }
    displayDiv.innerText +=  `${num}`;
    // console.log(typeof num)
}

function setOP(math){
    var last = displayDiv.innerText.slice(-1);
    // last = Symbol(last);
    console.log(last)
    if(last == NaN) {
        displayDiv.innerText = displayDiv.innerText.splice(-1, 0, last);
        // last = Symbol(last);
        displayDiv.innerText += math;
    } else {
        // displayDiv.innerText += last;
        // console.log
    }
    console.log()
}

function caculate(temp){
    var equation = displayDiv.innerText;
    equation += temp;
    console.log(equation);

}