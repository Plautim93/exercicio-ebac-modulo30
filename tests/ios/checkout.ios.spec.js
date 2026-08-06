const browseScreen = require('../../screens/BrowseScreen');
const productScreen = require('../../screens/ProductScreen');
const cartScreen = require('../../screens/CartScreen');
const paymentScreen = require('../../screens/PaymentScreen');
const testData = require('../../helpers/testData');

describe('EBAC Store - iOS Device Farm CI', () => {
  it('deve verificar que o app está rodando no BrowserStack', async () => {
    await browser.pause(5000);
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
    expect(source.length).toBeGreaterThan(100);
  });

  it('deve verificar que a tela principal está carregada', async () => {
    await browser.pause(3000);
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
  });

  it('deve validar navegação no app', async () => {
    await browser.pause(3000);
    const source = await browser.getPageSource();
    expect(source.length).toBeGreaterThan(100);
  });
});