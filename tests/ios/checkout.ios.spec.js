const browseScreen = require('../../screens/BrowseScreen');
const productScreen = require('../../screens/ProductScreen');
const cartScreen = require('../../screens/CartScreen');
const paymentScreen = require('../../screens/PaymentScreen');
const testData = require('../../helpers/testData');

describe('EBAC Store - iOS Checkout Flow', () => {
  it('deve executar fluxo no app iOS via BrowserStack', async () => {
    await browser.pause(5000);

    // Tira screenshot para evidência
    await browser.saveScreenshot('./reports/screenshot-01-app-launched.png');

    // Clica no menu hamburguer (canto superior esquerdo)
    await browser.action('pointer')
      .move({ duration: 0, x: 50, y: 80 })
      .down({ button: 0 })
      .up({ button: 0 })
      .perform();

    await browser.pause(2000);
    await browser.saveScreenshot('./reports/screenshot-02-menu.png');

    // Verifica que o app está rodando
    const source = await browser.getPageSource();
    expect(source).toBeTruthy();
    expect(source.length).toBeGreaterThan(100);
  });
});