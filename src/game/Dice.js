import React, { Component, Fragment } from 'react'
import Die from './Die'
import Bag from '../data/bag'

export default class extends Component {
  // state = {
  //   bag: [ 4, 4, 4, 6, 6, 6, 6, 6, 6, 10, 10, 12, 20, 20 ]
  // }
  
  buildDiceBag = (bag) => {
    console.log("Building DiceBag")
    return bag.map(numSides => <Die numOfSides={numSides}/>)
  }
  
  filterBag = (dieSize) => {
    return Bag.filter(numSides => (numSides > dieSize))
  }
  
  render() {
    console.log(Bag)
    console.log("Rendering Dice")
    const filteredBag = this.filterBag(0)
    console.log(filteredBag)
    const diceBag = this.buildDiceBag(filteredBag)
    console.log("DiceBag Built")
    console.log(diceBag)
    return (
      <div className="flexContainer">
        {diceBag}
      </div>
    )
  }
}