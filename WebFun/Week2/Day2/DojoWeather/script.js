function farToCel(far) {
    var num = (far - 32) * (5 / 9);
    return Math.round(num);
}
function celToFar(cel) {
    var num = (cel * (9 / 5)) + 32;
    return Math.round(num);
}
function convert(option) {
    console.log(option.value)
    for(var i = 1; i <= 8; i++){
        if (option.value == 'farenheit'){
            var temp = 'temp' + i;
            next = document.getElementById(`${temp}`).innerText;
            next = next.slice(0, 2);
            next = parseInt(next)
            var converted = celToFar(next)
            var farn = document.querySelector(`#${temp}`)
            farn.innerText = converted + '°';
            console.log(converted)
        }
        if (option.value == 'celsius'){
            var temp = 'temp' + i;
            next = document.getElementById(`${temp}`).innerText;
            next = next.slice(0, 2);
            next = parseInt(next)
            var converted = farToCel(next)
            var id = document.querySelector(`#${temp}`)
            id.innerText = converted + '°'
        }
    }
    
}
function accept() {
    var cookiesStyle = document.querySelector('#cookies').style;
    cookiesStyle.display = "none";
};
console.log(farToCel(63))