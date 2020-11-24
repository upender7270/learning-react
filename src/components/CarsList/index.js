import React from "react";

import Car from "./Car";
import "./index.css";

class CarsList extends React.Component {
  state = {
    carIds: [1]
  };

  onAddCar = () => {
    const prevStatecarIds = this.state.carIds.slice(0);
    const lengthOfCarIds = prevStatecarIds.length;
    const lastCarId = prevStatecarIds[lengthOfCarIds - 1];
    const newCarId = lastCarId + 1;
    prevStatecarIds.push(newCarId);
    this.setState({
      carIds: prevStatecarIds
    });
  };
  onRemoveCar = event => {
    const { id } = event.target;
    const prevStatecarIds = this.state.carIds.slice(0);
    const updatedCarIds = prevStatecarIds.filter(
      eachId => eachId.toString() !== id
    );
    this.setState({
      carIds: updatedCarIds
    });
  };
  displayCarsList = () => {
    const carIds = this.state.carIds;
    return carIds.map(eachCarId => {
      return (
        <Car key={eachCarId} id={eachCarId} onRemoveCar={this.onRemoveCar} />
      );
    });
  };
  render() {
    return (
      <div>
        <button className="default-btn" onClick={this.onAddCar}>
          AddCar
        </button>
        <div className="carsListContainer">{this.displayCarsList()}</div>
      </div>
    );
  }
}

export default CarsList;
