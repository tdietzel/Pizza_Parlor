# World's Famous Pizza Parlor
#### By _**Trent Dietzel**_
## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Known Bugs](#known-bugs)
- [License](#license)
- [Contact](#contact)
- [Tests](#tests)

## About

**World's Famous Pizza Parlor** is a web application designed to allow users to customize their pizzas. This project provides an interactive platform for pizza lovers to choose from a variety of toppings, pick the perfect size, and calculate the total cost. It serves as a learning and practice project for using constructors, prototypes, and Test-Driven Development (TDD).

## Demo

You can try out the live demo of the World's Famous Pizza Parlor [here](https://tdietzel22.github.io/Pizza_Parlor/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- **Pizza Customization**: Users can choose from a wide range of toppings to build their customized pizza.
- **Size Selection**: Three different sizes are available to meet various appetite needs.
- **Cost Calculation**: The application calculates the total cost based on the user's selections.
- **Pizza Details**: Users can view all the details of their customized pizza, including size, toppings, and price.

## Installation

Follow these steps to set up the project locally:
1. Open Git BASH [Download Link](https://gitforwindows.org/)
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/Pizza_Parlor.git
3. Open the project directory:
   ```bash
   cd Pizza_Parlor
4. Open the __index.html__ file in your web browser or use a code editor like __Visual Studio Code__ for further development.

## Usage

To use the World's Famous Pizza Parlor:
1. Visit the website [Here](https://tdietzel22.github.io/Pizza_Parlor/).
2. Start by selecting your desired pizza size.
3. Choose your favorite toppings from the list.
4. The application will display the total cost of your customized pizza.
5. Have fun exploring!

## Contributing

I welcome contributions to improve the project. If you'd like to contribute, please follow these guidelines:
1. Fork the project repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with a descriptive commit message.
5. Push your branch to your forked repository.
6. Create a pull request to the main repository.

## Known Bugs

* _N/A_

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions, suggestions, or inquiries, please contact **Trent Dietzel** at _dietzelbiz@outlook.com_.

## __TESTS__

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

# Describe: Cart.prototype.deletePizza()

__Test #1:__ "It should delete the pizza from cart when selected."
__Code:__
const myPizza = new Pizza(["anchovies", "pineapple"], "small");
const myPizza2 = new Pizza(["anchovies", "pineapple", "bacon"], "medium");
cart.addPizza(myPizza);
cart.addPizza(myPizza2);
cart.deletePizza(1)
__Expected Output:__ 0: Pizza {Array(2), size: 'small', id: 0}