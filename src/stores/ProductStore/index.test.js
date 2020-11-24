import ProductStore from "./index";
import getProducts from "../../fixtures/getProducts.json";
import ProductService from "../../services/ProductService";

describe("Product Store tests", () => {
  let productStore;
  let fixtureProducts = getProducts.products;
  beforeEach(() => {
    productStore = new ProductStore(new ProductService());
  });
  it("should return filtered products with xs size", () => {
    productStore.setProductListResponse(fixtureProducts);
    productStore.onSelectSize("XS");
    const expectedData = [fixtureProducts[0], fixtureProducts[7]];
    expect(productStore.sortedAndFilteredProducts).toEqual(expectedData);
    // try {
    //   productStore.onSelectSize("XS");
    //   const expectedData = [fixtureProducts[0], fixtureProducts[7]];
    //   productStore.sortedAndFilteredProducts;
    // } catch (e) {
    //   console.log("erer", e.message);
    //   expect(e.message).toEqual("Error");
    // }
  });
});
