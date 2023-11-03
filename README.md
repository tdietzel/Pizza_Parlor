# Describe: Pizza()

__Test #1:__ "It should return a Pizza object with two properties for toppings and size"
__Code:__ const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
__Expected Output:__ Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

# Describe: Pizza.prototype.price()

__Test #1:__ "It should return the base price for a medium pizza"
__Code:__
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myPizza.price();
__Expected Output:__ 8

__Test #2:__ "It should return +$2 if the pizza is large"
__Code:__
const myPizza = new Pizza(["anchovies", "pineapple"], "large");
myPizza.price();
__Expected Output:__ 10

__Test #3:__ "It should return -$2 if the pizza is small"
__Code:__
const myPizza = new Pizza(["anchovies", "pineapple"], "small");
myPizza.price();
__Expected Output:__ 6

# Describe: Pizza.prototype.toppingPrice()

__Test #1:__ "It should return +$1 per topping after 1 topping"
__Code:__
const myPizza = new Pizza(["anchovies", "pineapple"], "small");
myPizza.price();
__Expected Output:__ 7

# Describe: Cart()

__Test #1:__ "It should return a Cart object with two properties for pizzas and id"
__Code:__
let myCart = new Cart(myPizza, 0);
__Expected Output:__ Cart {pizzas: {…}, orderId: 0}

# Describe: Cart.prototype.addPizza()

__Test #1:__ "It should return each pizza with a different id"
__Code:__
let cart = new Cart();
const myPizza = new Pizza(["anchovies", "pineapple"], "small");
const myPizza2 = new Pizza(["anchovies", "pineapple", "bacon"], "medium");
cart.addPizza(myPizza);
cart.addPizza(myPizza2);
console.log(cart);
__Expected Output:__ Cart {pizzas: {…}, orderId: 2}