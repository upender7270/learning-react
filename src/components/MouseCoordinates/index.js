import React, { Component } from 'react'

class MouseCoordinates extends React.Component {
   state = { x: 0, y: 0 }

   handleMouseMove = event => {
      this.setState({
         x: event.clientX,
         y: event.clientY
      })
   }

   onTouchStart = event => {
      this.setState({
         x: event.touches[0].clientX,
         y: event.touches[0].clientY
      })
   }

   render() {
      return (
         <div
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.onTouchStart}
         >
            {this.props.children(this.state)}
         </div>
      )
   }
}

export default MouseCoordinates
