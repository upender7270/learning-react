import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { reaction } from 'mobx'

import carStore from '../../stores/CarStore'

import Car from './Car'
import AddCarInput from './AddCarInput'
import themeStore from '../../stores/ThemeStore'

@observer
class MobxCarsList extends Component {
  onCarAdd = (carName) => {
    carStore.addNewCar(carName)
  }
  renderAddCarInput = () => <AddCarInput onCarAdd={this.onCarAdd} />

  renderCarsList = () => {
    return carStore.cars.map((carModel) => {
      return <Car key={carModel.id} carModel={carModel} />
    })
  }

  renderCarsCount = () => {
    return <div>{carStore.carsCountWithNameLengthFour}</div>
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.renderAddCarInput()}
        {this.renderCarsList()}
        {this.renderCarsCount()}
      </div>
    )
  }
}

export default MobxCarsList
