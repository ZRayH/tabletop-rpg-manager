import React, {Component, Fragment} from 'react'
import Die from './Die'
import Bag from '../../data/bag'

export default class extends Component {
    buildDiceBag = (bag) => {
        return bag.map(numSides => <Die numOfSides={numSides}/>)
    };

    filterBag = (dieSize) => {
        return Bag.filter(numSides => (numSides > dieSize))
    };

    render() {
        const filteredBag = this.filterBag(0);
        const diceBag = this.buildDiceBag(filteredBag);
        return (
            <div className="flexContainer">
                {diceBag}
            </div>
        )
    }
}