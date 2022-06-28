
var numNeil = 9;
var numNich = 12;
var numJim = 9;
function neilLike() {
    var like = document.querySelector('#neilCount');
    numNeil++;
    like.innerText = (numNeil +' like(s)');
}
function nichLike() {
    var like = document.querySelector('#nichCount');
    numNich++;
    like.innerText = (numNich +' like(s)');
}
function jimLike() {
    var like = document.querySelector('#jimCount');
    numJim++;
    like.innerText = (numJim +' like(s)');
}