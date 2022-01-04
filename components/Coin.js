import React, { Component } from 'react';

class Coin extends Component {
    //true is black false is red
    state = {
        flip: this.props.winningNumber,
    }
    render() {
        return (
            <div  id="coin"
            className={`${this.state.flip? 'tails': 'heads'}`}>
                <div className="side-a"></div>
                <div className="side-b"></div>
            </div>

        );
    };
};
export default Coin;