const Product = require('./product');

// two functions to allow for specific quantities to be added
module.exports = {
    addApple: function(quantity){
        let apple = new Product('Apple', 4.95, quantity);
        return apple;
    },
    addOrange: function(quantity){
        let orange = new Product('Orange', 3.99, quantity);
        return orange;
    }
}