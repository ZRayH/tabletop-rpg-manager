import React, { Component, Fragment } from 'react'
import Die from './Die'

export default class extends Component {
  state = {
    twenty: 20,
    six: 6,
    bag: [ 4, 4, 4, 6, 6, 6, 6, 6, 6, 10, 10, 12, 20, 20 ]
  }
  
  buildDiceBag = () => {
    console.log("Building DiceBag")
    return this.state.bag.map(numSides => <Die numOfSides={numSides}/>)
  }
  
  render() {
    console.log("Rendering Dice")
    const diceBag = this.buildDiceBag()
    console.log("DiceBag Built")
    console.log(this.state.bag)
    console.log(diceBag)
    return (
      <div>
        {diceBag}
      </div>
    )
  }
}