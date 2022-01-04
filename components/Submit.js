import React, { Component } from 'react';
import Coin from './Coin';
import web3 from '../ethereum/web3';
import contract from '../ethereum/coinflip'

class Submit extends Component {
    state = {
        seen: false,
        address: '',
        winningNumber : false,
    }
    toggleSeen = () => {
        this.setState({ seen: !this.state.seen });
    };
    onSubmit = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        this.setState({ address: account })
           let picked = (this.props.color === 'red'? 1 : 2)
         await contract.methods.bet(picked).send({
            from: account,
            value: web3.utils.toWei(this.props.amount)
         })
        let winningNumber = await contract.methods.numberGenerated().call();
        //let side = (parseInt(winningNumber) === 1);
        let side2 = (parseInt(winningNumber) === 2);
 
         //true is black false is red

        this.setState({ winningNumber : side2})
 
         this.toggleSeen();
         setTimeout(function () {
            window.location.reload();
        }, 3000);  
    }
    validateInput = () => {
        console.log(this.props.balance);
        console.log(Math.sign(this.props.amount) === -1);
        if (this.props.amount === '' || isNaN(this.props.amount)) {
            alert('Please enter a valid amount!');
        }
        else if (Math.sign(this.props.amount) === -1) {
                alert('Please enter a valid amount!');
        }
        else if (web3.utils.toWei(this.props.amount,'ether') > this.props.balance) {
            alert('Amount must be less than or equal to contract balance!');
        }
        else if (this.props.color === '') {
            alert('Please select a color!');
        }
        else {
            this.onSubmit();   
        }
    }
    render() {
        return (
            <section className="modal container">
                <button onClick={this.validateInput }className="modal__button" id="open-modal">
                START A FLIP
                </button>
                <h2>This contract is run by : 0x18b67E3...</h2>
                
                {this.state.seen ?
                    <div className="modal__content">
                        <div className="modal__close close-modal" title="Close">
                        <i onClick={this.toggleSeen } className="bx bx-x" />
                        </div>
                        <h1 className="modal__title">Good Luck!</h1>

                        <Coin winningNumber={this.state.winningNumber} /> 
                        <p className="modal__description"></p>
                        {/* <button className="modal__button modal__button-width">
                        View status
                        </button> */}
                        <button onClick={this.toggleSeen } className="modal__button-link close-modal">
                        Close
                        </button>
                    </div>
   
                : <div></div>}

            </section>
        )
    }
}

export default Submit;