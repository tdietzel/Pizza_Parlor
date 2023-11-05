// Business Logic
function Cart() {
    this.pizzas = {};
    this.orderId = 0;
    this.totalPrice = 0;
}
Cart.prototype.addPizza = function(myPizza) {
    myPizza.id = this.orderId;
    this.pizzas[myPizza.id] = myPizza;
    this.orderId++;
    this.totalPrice += myPizza.price();
}
Cart.prototype.getPizza = function(id) {
    if (this.pizzas[id] !== undefined) {
        return this.pizzas[id];
    }
    return false;
}
Cart.prototype.deletePizza = function(id) {
    if (this.pizzas[id] === undefined) {
        return false;
    }
    delete this.pizzas[id];
    return true;
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
    this.totalPrice += basePrice;
    return basePrice;
}

// UI Logic
let cart = new Cart();
window.addEventListener("load", () => {
    document.querySelector("form#buildAPizza").addEventListener("submit", handleSubmit);
    document.querySelector("button#goToCheckout").addEventListener("click", handleCart);
    document.querySelector("button.deletePizza").addEventListener("click", handleDelete);
    document.querySelector("button#goBack").addEventListener("click", homePage);
    document.querySelector("button.purchase").addEventListener("click", );
    listOrderSummary(cart);
});

function handleSubmit(e) {
    e.preventDefault();
    document.querySelector("div#orderDetails").classList.add("hidden");
    document.querySelector("button#goToCheckout").classList.remove("hidden");
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

function handleCart(e) {
    e.preventDefault();
    document.querySelector("button#goToCheckout").classList.add("hidden");
    document.querySelector("div#orderDetails").classList.add("hidden");
    document.querySelector("h2#displayPrice").classList.add("hidden");
    document.querySelector("form#buildAPizza").classList.add("hidden");
    document.querySelector("div#header").classList.add("hidden");
    document.querySelector("div#checkoutCart").classList.remove("hidden");
    document.querySelector(".delivery.hidden").classList.remove("hidden");
    document.querySelector(".carryout.hidden").classList.remove("hidden");
    document.querySelector("p#orOption").classList.remove("hidden");
    document.querySelector("div#purchaseOrBack").classList.remove("hidden");
    document.querySelector("span#totalPrice").innerText = cart.totalPrice;
}

function handleDelete(event) {
    const target = event.target.id;
    const deletedPizza = cart.getPizza(target);
    document.querySelector("div#orderDetails").classList.add("hidden");
    if (deletedPizza) {
        const deletedPizzaPrice = deletedPizza.price();
        cart.totalPrice -= deletedPizzaPrice;
    }
    cart.deletePizza(target);
    document.querySelector("div#orderDetails").classList.add("hidden");
    listOrderSummary(cart);
    document.querySelector("span#totalPrice").innerText = cart.totalPrice;
    document.querySelector("button.deletePizza").removeAttribute("id");
    document.querySelector("button.deletePizza").classList.add("hidden");
}

function listOrderSummary() {
    let orderSummary = document.querySelector("div#orderSummary");
    orderSummary.innerHTML = "";
    const ul = document.createElement("ul");
    Object.values(cart.pizzas).forEach((pizza) => {
        const a = document.createElement("a");
        const li = document.createElement("li");
        a.href = "#";
        a.innerText = "Pizza #" + (pizza.id + 1);
        a.addEventListener("click", (event) => {
            event.preventDefault();
            displayPizzaDetails(pizza.id);
            document.querySelector("button.deletePizza").classList.remove("hidden");
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    orderSummary.appendChild(ul);
}

function displayPizzaDetails(pizzaId) {
    document.querySelector("h2#displayPrice").innerText = "Current Pizza's:";
    const pizza = cart.getPizza(pizzaId);
    document.querySelector("span#size").innerText = pizza.size;
    document.querySelector("span#toppings").innerText = pizza.toppings.join(", ");
    document.querySelector("span#price").innerText = pizza.price();
    document.querySelector("span#pizzaNumber").innerText = pizzaId + 1;
    document.querySelector("button.deletePizza").setAttribute("id", pizzaId);
    document.querySelector("div#orderDetails").removeAttribute("class");
}

function homePage(e) {
    e.preventDefault();
    document.querySelector("form#buildAPizza").classList.remove("hidden");
    document.querySelector("div#header").classList.remove("hidden");
    document.querySelector("div#checkoutCart").classList.add("hidden");
    document.querySelector(".delivery").classList.add("hidden");
    document.querySelector(".carryout").classList.add("hidden");
    document.querySelector("p#orOption").classList.add("hidden");
    document.querySelector("div#purchaseOrBack").classList.add("hidden");
    document.querySelector("span#totalPrice").classList.add("hidden");
}