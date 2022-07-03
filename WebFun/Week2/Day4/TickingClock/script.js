function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');

function getHourAngle(time){
    time %= 43200;
    return ((360 * time / 43200) + 180) % 360;
}
function getMinuteAngle(time){
    time %= 3600;
    return ((6 * time / 60) + 180) % 360;
}
function getSecondAngle(time){
    time %= 60;
    return((6 * time) + 180) % 360;
    
}
setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    hour.style.transform = `rotate(${getHourAngle(time)}deg)`;
    minute.style.transform = `rotate(${getMinuteAngle(time)}deg)`;
    second.style.transform = `rotate(${getSecondAngle(time)}deg)`;
}, 1000);
