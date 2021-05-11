import React, { Component } from 'react';
import ColorSquare from '../presentation/ColorSquare';

export default class RandomColor extends Component {
    state = {
        colorArray: ['#404e5c', '#4f6272', '#b7c3f3', '#dd7596', '#cf1259'],
        currentColor: '',
        backgroundImage: 'none',
    };
    
    colorChange = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        if (this.state.colorArray[randomNumber] === this.state.currentColor) {
            this.setState({
                backgroundImage:
                    'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)',
            });
        } else {
            this.setState({
                previousColor: this.state.currentColor,
                currentColor: this.state.colorArray[randomNumber],
                backgroundImage: 'none'
            });
        }
    };
    componentDidMount() {
        setInterval(this.colorChange, 1000);
    }

    render() {
        return (
            <div>
                <ColorSquare
                    backgroundColor={this.state.currentColor}
                    backgroundImage={this.state.backgroundImage}
                />
            </div>
        );
    }
}
