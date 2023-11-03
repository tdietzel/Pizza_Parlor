// Business Logic
function Cart() {
    this.pizzas = {};
    this.orderId = 0;
}

Cart.prototype.addPizza = function(myPizza) {
    myPizza.id = this.orderId;
    this.pizzas[myPizza.id] = myPizza;
    this.orderId++;
}

Cart.prototype.getPizza = function(id) {
    if (this.pizzas[id] !== undefined) {
        return this.pizzas[id];
    }
    return false;
}

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.price = function() {
    let basePrice = 8;
    if (this.size === "small") {
        basePrice -= 2;
    } else if (this.size === "large") {
        basePrice += 2;
    }
     return this.toppingPrice(basePrice)
}

Pizza.prototype.toppingPrice = function(basePrice) {
    if (this.toppings.length > 1) {
        basePrice += this.toppings.length - 1;
    }
    return basePrice;
}

// UI Logic
let cart = new Cart();
window.addEventListener("load", () => {
    document.querySelector("form#buildAPizza").addEventListener("submit", handleSubmit);
    listOrderSummary(cart);
});

function handleSubmit(e) {
    e.preventDefault();
    const userToppingChoices = document.querySelectorAll('input[type="checkbox"]');
    const userSizeChoice = document.querySelector('input[type="radio"]:checked');
    const displayResult = document.querySelector("h2#displayPrice");
    const toppings = [];
    const size = userSizeChoice.id;

    userToppingChoices.forEach((topping) => {
        if (topping.checked) {
            toppings.push(topping.id);
        }
    });

    let myPizza = new Pizza(toppings, size);
    cart.addPizza(myPizza);
    const price = myPizza.price();
    displayResult.innerText = "Your total is $" + price;
    listOrderSummary(cart);
}

function listOrderSummary(cart) {
    let orderSummary = document.querySelector("div#orderSummary");
    orderSummary.innerText = null;
    const ul = document.createElement("ul");
    Object.values(cart.pizzas).forEach((pizza) => {
            const li = document.createElement("li");
            li.append(pizza.size);
            li.setAttribute("id", pizza.id);
            ul.append(li);

            li.addEventListener("click", () => {
                displayPizzaDetails(pizza.id);
        });
    });
    orderSummary.append(ul);
}