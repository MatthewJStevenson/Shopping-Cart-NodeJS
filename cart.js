// a Cart has one field being the list of Items in the cart
class Cart {
    constructor() {
        this._items = [];
    }
    get items() {
        return this._items;
    }
    // this function takes a Product as a paramter
    // it first checks if there are currently any items in the cart that are the same as the one being added
    // if there is it will just up the specified quantity of that item already in the list
    // otherwise it will add a new Product to the items list
    add(item) {
        for(let i in this._items) {
            if (this._items[i].name == item.name) {
                let value = this._items[i].quantity + item.quantity;
                this._items[i].quantity = value;
                return;
            }
        }
        this._items.push(item);
    }
    // this funtion takes the name of product and the quantity as parameters
    // first checks the for the specified item in the cart, then loweres its quantity by the specified amount
    // also if the quantity reaches 0 (or below 0 somehow) it will remove the item from the Cart 
    remove(name, quantity) {
        for(let i in this._items) {
            if (this._items[i].name == name) {
                let value = this._items[i].quantity - quantity;
                this._items[i].quantity = value;
            }
        }
        for(let i in this._items) {
            if (this._items[i].quantity <= 0) {
                this._items.splice(i, 1);
            }
        }
    }
    // this function simply gets the price of each item in the cart taking into account the items quantity
    // and then adds them together to calculate the total
    totalPrice() {
        let total = 0;
        for(let item in this._items) {
            total += (this._items[item].price * this._items[item].quantity);
        }
        return total.toFixed(2);
    }
}

module.exports = Cart;