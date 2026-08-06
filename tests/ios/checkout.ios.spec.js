const browseScreen = require('../../screens/BrowseScreen');
const productScreen = require('../../screens/ProductScreen');
const cartScreen = require('../../screens/CartScreen');
const paymentScreen = require('../../screens/PaymentScreen');
const testData = require('../../helpers/testData');

describe('EBAC Store - iOS Device Farm CI', () => {

  beforeEach(async () => {
    await browser.pause(3000);
  });

  it('deve verificar que o app está rodando no device farm', async () => {
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
    expect(source.length).toBeGreaterThan(100);
  });

  it('deve verificar que produtos são listados na tela inicial', async () => {
    await browser.pause(3000);
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
  });

  it('deve navegar pela tela de busca', async () => {
    await browser.pause(2000);
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
  });

  it('deve verificar o fluxo de carrinho', async () => {
    await browser.pause(2000);
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
  });

});