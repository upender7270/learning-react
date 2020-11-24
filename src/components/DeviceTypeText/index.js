import React, { Component } from 'react'
import { withScreenSizeDetectors } from '../../hocs/withScreenSizeDetectors'

class DeviceTypeText extends Component {
   render() {
      return (
         <p>
            Device Type:{' '}
            {this.props.isMobile()
               ? 'Mobile'
               : this.props.isTablet()
               ? 'Tablet'
               : 'Desktop'}
         </p>
      )
   }
}

export default withScreenSizeDetectors(DeviceTypeText)
