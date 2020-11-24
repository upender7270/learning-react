import React, { Component } from 'react'
import MouseCoordinates from '../MouseCoordinates'

class DisplayMouseCoordinates extends Component {
   render() {
      return (
         <div>
            <MouseCoordinates>
               {(state) => {
                  return (
                     <p>
                        The mouse position is ({state.x}, {state.y})
                     </p>
                  )
               }}
            </MouseCoordinates>
         </div>
      )
   }
}

export default DisplayMouseCoordinates
