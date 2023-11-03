function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.price = function () {
    let basePrice = 8;
    if (this.size === "small") {
        return basePrice -= 2;
    } else if (this.size === "medium") {
        return basePrice;
    } else if (this.size === "large") {
        return basePrice += 2;
    }
}