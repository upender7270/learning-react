import { FIXTURES_API_TIMEOUT } from "../../constants/AppConstants";

import getProducts from "../../fixtures/getProducts.json";

class ProductFixture {
  getProducts(request) {
    return new Promise(resolve => {
      setTimeout(() => resolve(getProducts), FIXTURES_API_TIMEOUT);
    });
  }
}

export default ProductFixture;
