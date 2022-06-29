// var arr2d = [ 
//     [2, 5, 8],
//     [3, 6, 1],
//     [5, 7, 7] ];

// // We can console.log the `8` in this array if we
// // the first index `0` will select the `[2, 5, 8]` sub-array
// // the second index `2` will select the `8` out of that sub-array





// // complete the following function
// function isPresent2d(arr2d, value){
//     for (var i = 0; i < (arr2d.length); i++){
//         for (var j = 0; j < arr2d[i].length; j++){
//             if (arr2d[i][j] == value) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(isPresent2d(arr2d, 8))
// console.log(isPresent2d(arr2d, 11))



var result = flatten([[2, 5, 8], [3, 6, ['nick', 'is', 'great', '?'], 1], ['no','srsly'], [['he\'s', 'cool'], 5, [1, 2, 3, 'taco'], 7, 7]]);

function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++) {           
        for (var j = 0; j < arr2d[i].length; j++) {
            // console.log(typeof arr2d[i][j]);
            if (typeof arr2d[i][j] == 'object') {
                for (var k = 0; k < arr2d[i][j].length; k++) {
                    flat.push(arr2d[i][j][k]);
                }
            } else
                flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
console.log('Our new array contains:' + result);