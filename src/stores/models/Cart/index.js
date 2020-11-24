import { observable, action } from "mobx";

class Cart {
  id;
  productId;
  @observable quantity;
  constructor(id, productId, quantity) {
    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
  }

  @action.bound
  incrementQuantity() {
    this.quantity += 1;
  }
}

export default Cart;
