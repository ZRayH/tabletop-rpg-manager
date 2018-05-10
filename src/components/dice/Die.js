import React, {Component, Fragment} from 'react'

export default class extends Component {
    state = {
        roll: 0
    };

    clickHandler = () => {
        const numSides = this.props.numOfSides;
        this.setState({roll: Math.floor(Math.random() * numSides + 1)})
    };

    render() {
        return (
            <div>
                <p>Roll: {this.state.roll}</p>
                <p>Number of Sides: {this.props.numOfSides}</p>
                <button type="button" onClick={this.clickHandler}>Roll Die</button>
            </div>
        )
    }
}