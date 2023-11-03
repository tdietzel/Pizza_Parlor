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