function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("detroit style", "traditional", ["scmorza", "mozzarella", "feta"], ["pineapples", "green chiles"])
var p4 = pizzaOven("thin crust", "white sauce", ["mozzarella"], ["calabrian chiles", "shallots"])
var p5 = pizzaOven("gluten free", "pesto", ["smoked mozzarella", "parmagiano reggiano"], ["cherry tomatoes", "fresh basil", "mushrooms"])
// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)
// console.log(p5)


var crust = [
    "deep dish",
    "hand tossed",
    "detroit style",
    "thin crust",
    "gluten free"]

var sauce = [
    "traditional",
    "marinara",
    "pesto",
    "white sauce",
    "sweet chili"]

var cheese = [
    "mozzarella",
    "smoked mozzarella",
    "feta",
    "scmorza",
    "burrata"]

var tops = [
    "pineapples",
    "green chiles",
    "mushrooms",
    "olives",
    "cherry tomatoes",
    "shallots",
    "pepperoni",
    "sausage",
    "jalapeños",
    "fresh basil",
    "calabrian chiles"]

function randomPizza(){
    var sau = Math.floor(Math.random()*5);//Randomly selecting an index of the sauce array
    var cru = Math.floor(Math.random()*5);//Randomly selecting an index of the crust array
    var che = Math.floor(Math.random()*5);//Randomly selecting an index of the cheese array
    if (Math.floor(Math.random()*2) !== che) {//50% chance we'll add another cheese
        var che2 = Math.floor(Math.random()*5);
    }
    var allChe = [cheese[`${che}`], cheese[`${che2}`]]//new cheese array for cheese object
    if (che === che2) {//if the new cheese is the same as the first, then we're keeping just the first
        allChe = [cheese [`${che}`]];
    }
    
    var top = Math.floor(Math.random()*6);//pick one of the first 6 toppings from toppings array
    var top2 = Math.floor(Math.random()*11);//top2 declared at random for the array length
    if ((top2 === top) && (top !== 10)) {//if new random number is the same as the first and is not the 10th index 
        top2++;//then add 1 to it
    } else 
    if (Math.floor(Math.random()*2) !== 1) {// 50-50 chance to add another topping
        var top3 = Math.floor(Math.random()*11);//pick another topping from the array at random
    }
    var allTops = [tops[`${top}`], tops[`${top2}`], tops[`${top3}`]];//new array of arrays for toppings
    
    var pRand = pizzaOven(crust[`${cru}`], sauce[`${sau}`], [`${allChe}`], [`${allTops}`])
    console.log(pRand);
}
randomPizza()