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
    "vegan cheese",
    "no cheese"]

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
    var sau = Math.floor(Math.random()*5);
    var cru = Math.floor(Math.random()*5);
    var che = Math.floor(Math.random()*5);
    var top = Math.floor(Math.random()*11);
    var top2 = Math.floor(Math.random()*11);
    var top3 = Math.floor(Math.random()*11);
    var allTops = [tops[`${top}`], tops[`${top2}`], tops[`${top3}`]];
    if (Math.floor(Math.random()*2) == 1) {
        var che2 = Math.floor(Math.random()*5);
    }
    var allChe = [cheese[`${che}`], cheese[`${che2}`]]
    var pRand = pizzaOven(crust[`${cru}`], sauce[`${sau}`], [`${allChe}`], [`${allTops}`])
    console.log(pRand);
}
randomPizza()