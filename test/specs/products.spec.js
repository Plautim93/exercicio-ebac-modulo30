const productViewScreen = require('../screens/productView.screen')

describe('Product List', () => {
  it('should list products', async () => {
    expect(await productViewScreen.product("Yoga")).toExist()
    expect(await productViewScreen.productList()).toBeElementsArrayOfSize(10)
  })
})
