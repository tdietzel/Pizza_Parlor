# _Worlds Famous Pizza Parlor_

#### By _**Trent Dietzel**_

#### _A website for a pizza company where a user can choose one or more individual toppings, what size they want and see how much it costs._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_A website to practice using constructors and prototypes! It focuses on using TDD to break down the problem into smaller pieces of functionality (*Bottom of page*). The user is able to choose a variety of toppings, choose between 3 sizes and view all their pizzas details after they are added._

## Setup/Installation Requirements

* _Fork your own copy of this repository from [GitHub](https://github.com/tdietzel22/Pizza_Parlor)_
* _Open Git BASH [Download Link](https://gitforwindows.org/)_
* _Use 'git clone projecturl' to clone the project from the forked repo_
* _Open the project in [VS Code](https://code.visualstudio.com/) (Git shortcut: enter 'code .' after navigating to the top level of the project directory)_
* _View site on [github-pages](https://tdietzel22.github.io/Pizza_Parlor/)_ __<~~ Try it out now!__

## Known Bugs

* _N/A_

## License

_MIT License_

Copyright (c) _2023 Trent Dietzel_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _2023 Trent Dietzel_


# __PROJECT TESTS__

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

# Describe: Cart.prototype.getPizza()

__Test #1:__ "It should find the pizza by its id"
__Code:__
let cart = new Cart();
const myPizza = new Pizza(["anchovies", "pineapple"], "small");
const myPizza2 = new Pizza(["anchovies", "pineapple", "bacon"], "medium");
cart.addPizza(myPizza);
cart.addPizza(myPizza2);
cart.getPizza(1);
__Expected Output:__ Pizza {toppings: Array(3), size: 'medium', id: 1}