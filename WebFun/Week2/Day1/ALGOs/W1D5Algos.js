
// //ALGO 1
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

//ALGO 2
var fruit3 = "apples";
var fruit4 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit3 = fruit4;
fruit4 = temp;
    
console.log(fruit4 + " and " + fruit3);


//ALGO 3
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

//ALGO 4

var arr = ["a", "b", "c", "d", "e"];
function reverse(arr) {
    var newArr = [];
    for(var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
reverse(arr);