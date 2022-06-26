function printOdds() {
    for (var i = 1; i < 20; i++) {
        if ((i % 2) == 0) {
            continue;
        } else 
            console.log(i);
    }
}
// printOdds();

function DivisibleBy(x) {
    for (var i = 100; i > 0; i--) {
        if ((i % x) == 0) {
            console.log(i)
        }
    }
}
// DivisibleBy(3);

function printSeq(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// printSeq([4,2.5,1,-0.5,-2,-3.5]);

function sigma(x) {
    var sum = 0;
    for(var i = 1; i <= x; i++) {
        sum += i;
    }
    console.log(100)
}
// sigma();

function factorial(x) {
    var result = 1;
    for(var i = 1; i <= x; i++) {
        result *= i;
    }
    console.log(result)
}
// factorial(12);