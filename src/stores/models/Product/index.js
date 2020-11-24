class Product {
  availableSizes;
  currencyFormat;
  currencyId;
  description;
  id;
  installments;
  isFreeShipping;
  price;
  sku;
  style;
  title;
  image;
  constructor(product) {
    this.availableSizes = product.availableSizes;
    this.currencyFormat = product.currencyFormat;
    this.currencyId = product.currencyId;
    this.description = product.description;
    this.id = product.id;
    this.installments = product.installments;
    this.isFreeShipping = product.isFreeShipping;
    this.price = product.price;
    this.sku = product.sku;
    this.style = product.style;
    this.title = product.title;
    this.image = product.image;
  }
}
export default Product;
