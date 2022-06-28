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
var p5 = pizzaOven("gluten free", "pesto", ["smoked mozzarella", "parmagiano reggiano"], ["cherry tomatos", "fresh basil", "mushrooms"])
console.log(p4)

function randomPizza(){
    var za = Math.floor(Math.random()*5);
    Array.from(`p${za}`)
}


// var taco1 = {
//     "tortilla": "soft corn tortilla",
//     "protein":  "tinga chicken",
//     "cheese":   "cotija cheese",
//     "toppings": ["lettuce", "pico de gallo", "guacamole"],
//     "tacoInfo": function() {
//         console.log("Tortilla: " + this.tortilla);
//         console.log("Protein:  " + this.protein);
//         console.log("Cheese:   " + this.cheese);
//         console.log("Toppings: " + this.toppings);
//     }
// }
    
// // we can now still get all the delicious taco facts by
// taco1.tacoInfo(); // note tacoInfo still gets called like a function