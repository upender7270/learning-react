import { observable, action, reaction } from 'mobx'

class CarModel {
  id: any
  @observable name: any
  constructor(carObject) {
    this.id = carObject.id
    this.name = carObject.name
  }

  @action.bound
  updateCarName(updatedName) {
    this.name = updatedName
  }
}

export default CarModel
