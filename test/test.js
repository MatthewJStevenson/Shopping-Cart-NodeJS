const assert = require('assert');
const Cart = require('../cart');
const app = require('../app');

describe('Shopping cart', function () {
    describe('totalPrice', function () {
      it('the total price of the shopping cart should be correct after adding items', function () {
        // creating a Cart then adding 2 apples and 1 orange to the Cart.
        let shoppingCart = new Cart();
        shoppingCart.add(app.addApple(2));
        shoppingCart.add(app.addOrange(1));

        // expected total is all three items price added together
        let expected = 4.95 + 4.95 + 3.99;
        // actual total is calculated using totalPrice()
        let actual = shoppingCart.totalPrice();

        assert.equal(actual, expected);
      });
    });

    describe('totalPrice', function () {
      it('the total price of the shopping cart should be correct after removing an item', function () {
        // creating a Cart then adding 3 apples and then removing 1 apple to the Cart.
        let shoppingCart = new Cart();
        shoppingCart.add(app.addApple(3));
        shoppingCart.remove('Apple', 1);

        // there should now only be 2 apples left in the cart 
        let expected = 4.95 + 4.95;
        let actual = shoppingCart.totalPrice();

        assert.equal(actual, expected);
      });
    });
  });