import React, { Component } from 'react'
import ColorSquare from '../presentation/ColorSquare';

export default class RandomColor extends Component {
    state = {
        colorArray: ["#404e5c", "#4f6272", "#b7c3f3", "#dd7596", "#cf1259"],
        currentColor: '',
        previousColor: '',
    }
    colorChange = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        this.setState({
            previousColor: this.state.currentColor,
            currentColor: this.state.colorArray[randomNumber]
        })
    }
    componentDidMount() {
        const colorTimer = setInterval(this.colorChange, 1000);
    }

    render() {
        return (
            <div>
                <ColorSquare backgroundColor={this.state.currentColor} />
            </div>
        )
    }
}
