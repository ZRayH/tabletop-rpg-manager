import React, { Component, Fragment } from 'react'
import Die from './Die'

export default class extends Component {
  state = {
    twenty: 20,
    six: 6
  }
  render() {
    return (
      <Fragment>
        <Die numOfSides={this.state.twenty}/>
        <Die numOfSides={this.state.six}/>
        <Die numOfSides={this.props.ten}/>
      </Fragment>
    )
  }
}