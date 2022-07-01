function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}
var hour = document.querySelector('hour').style
var minute = document.querySelector('minutes').style
var second = document.querySelector('seconds').style



setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    
}, 1000);
