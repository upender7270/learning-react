import { action, observable, computed, reaction, toJS } from "mobx";

import CarModel from "../models/CarModel";

class CarStore {
  @observable cars: Array<CarModel> = [];
  constructor() {
    this.cars = [];
  }

  @action.bound
  getCars() {
    return this.cars;
  }

  @action.bound
  addNewCar(carName) {
    const carObject = {
      id: Math.random().toString(),
      name: carName
    };
    const carModel = new CarModel(carObject);
    this.cars.push(carModel);
  }

  @computed
  get carsCountWithNameLengthFour() {
    return this.cars.filter(carModel => carModel.name.length === 4).length;
  }

  carsReaction = reaction(
    () => {
      const cars = this.cars.filter(car => car.name.length > 4);
      return cars.length;
    },
    carsLength => {
      console.log("Reaction trigged");
      if (carsLength > 4) {
        console.log("Cars count whose name length >4 ", carsLength);
      }
    }
  );
}

const carStore = new CarStore();
export { carStore as default, CarStore };
