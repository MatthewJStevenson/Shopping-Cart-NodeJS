// a Product has 3 fields: name, price and quantity
class Product {
    constructor(name, price, quantity) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
}

module.exports = Product;