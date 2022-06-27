var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "So High",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answer = document.getElementById('answer');
var clear = document.getElementById('question');
// var ball = document.querySelector('#ball');



function getAnswer() {
    var ball = document.querySelector("#ball");
    ball.setAttribute("src", "ball.gif")
    setTimeout(replace, 1000);
    
}

function replace() {
    clear.value = ''
    ball.setAttribute("src", "ballStill.jpg")
    answer.innerText =  lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)];

}
