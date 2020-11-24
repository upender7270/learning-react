import React, { Component } from 'react'

import { observer } from 'mobx-react'
import { observable } from 'mobx'

type CarProps = {
  carModel: any
}

@observer
class Car extends Component<CarProps> {
  @observable name

  constructor(props) {
    super(props)
    this.name = props.carModel.name
  }

  onChange = (event) => {
    this.name = event.target.value
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      const { carModel } = this.props
      carModel.updateCarName(this.name)
    }
  }
  render() {
    return (
      <input
        style={{ backgroundColor: 'blue' }}
        onChange={this.onChange}
        value={this.name}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default Car
