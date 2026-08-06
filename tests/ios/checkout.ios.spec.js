const browseScreen = require('../../screens/BrowseScreen');
const productScreen = require('../../screens/ProductScreen');
const cartScreen = require('../../screens/CartScreen');
const paymentScreen = require('../../screens/PaymentScreen');
const testData = require('../../helpers/testData');

describe('EBAC Store - iOS Checkout Flow', () => {
  it('deve adicionar produto ao carrinho e concluir checkout com sucesso', async () => {
    await browseScreen.openBrowse();
    await browseScreen.selectProduct(testData.productName);

    await productScreen.assertProductName(testData.productName);
    await productScreen.addToCart();

    await cartScreen.goToPayment(testData.address);
    await paymentScreen.finishCheckout();
    await paymentScreen.assertOrderSuccess();
  });
});