# Describe: Pizza()

__Test #1:__ "It should return a Pizza object with two properties for toppings and size"
__Code:__ const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
__Expected Output:__ Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

# Describe: Pizza.prototype.price()

__Test #1__ "It should return the base price for a medium pizza"
__Code:__
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myPizza.price();
__Expected Output:__ 8