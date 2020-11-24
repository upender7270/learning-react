import React, { Component } from 'react'

import { observer } from 'mobx-react'
import { observable } from 'mobx'

type AddCarInputProps = {
  onCarAdd: Function
}

@observer
class AddCarInput extends Component<AddCarInputProps> {
  @observable name

  onChange = (event) => {
    this.name = event.target.value
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      const { onCarAdd } = this.props
      onCarAdd(this.name)
      this.name = ''
    }
  }
  render() {
    return (
      <input
        style={{ backgroundColor: 'green' }}
        onChange={this.onChange}
        value={this.name}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

export default AddCarInput
