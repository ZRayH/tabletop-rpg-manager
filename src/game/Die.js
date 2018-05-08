import React, { Component, Fragment } from 'react'

export default class extends Component {
  state = {
    roll: 0
  }
  
  clickHandler = () => {
    const numSides = this.props.numOfSides
    this.setState({roll: Math.ceil(Math.random() * numSides)})
  }
  
  render() {
    return (
      <Fragment>
        <p>Roll: {this.state.roll}</p>
        <p>Number of Sides: {this.props.numOfSides}</p>
        <input type="button" value="Roll Die" onClick={this.clickHandler} />
      </Fragment>
    )
  }
}