function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.price = function () {
    let basePrice = 8;
    if (this.size === "large") {
        return basePrice += 2;
    }
    return basePrice;
}