// Business Logic
function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.price = function () {
    let basePrice = 8;
    if (this.size === "small") {
        basePrice -= 2;
    } else if (this.size === "large") {
        basePrice += 2;
    }
     return this.toppingPrice(basePrice)
}

Pizza.prototype.toppingPrice = function (basePrice) {
    if (this.toppings.length > 1) {
        basePrice += this.toppings.length - 1;
        return basePrice;
    } else {
        return basePrice;
    }
}

// UI Logic

window.addEventListener("load", () => {
    document.querySelector("form#buildAPizza").addEventListener("submit", handleSubmit)
});

function handleSubmit(e) {
    e.preventDefault();

    const userToppingChoices = document.querySelectorAll('input[type="checkbox"]');
    const userSizeChoice = document.querySelector('input[type="radio"]:checked');
    const displayResult = document.querySelector("h2#displayPrice")
    const toppings = [];
    const size = userSizeChoice.id;

    userToppingChoices.forEach((topping) => {
        if (topping.checked) {
            toppings.push(topping.id)
        }
    });
    let myPizza = new Pizza(toppings, size);
    const price = myPizza.price();
    displayResult.innerText = "Your total is $" + price;
}