import React, { Component } from 'react';
import Submit from '../components/Submit'
import web3 from '../ethereum/web3';

class Bet extends Component {
    state = {
        color: '',
        amount: ''
    }
    render() {
        return (
            <div>
                <div className="login-box">
                    <h2>
                        Place Bet
                    </h2>
                    <form id="myform" name="myform">
                        <h4 style={{ color: 'white' }}>
                            Balance: {web3.utils.fromWei(this.props.balance,'ether')} (test ether)
                        </h4>
                        <div className="user-box">
                            <input
                                id="amount"
                                type="text"
                                name="amount"
                                required
                                value={this.state.amount} 
                                onChange={event => this.setState({ amount: event.target.value })}
                            />
                            <label> Amount (eth)</label>
                        </div>
                    </form>
                    <div className="container2">
                            <section>
                                <div className="radio-group.color1">
                                    <input
                                    type='radio'
                                    name='radio-group1'
                                    id='radio1.1'
                                    value={ this.state.color}
                                    onChange={ event => this.setState({ color: 'red'})}/>
                                    <label> Red </label>
                                    <input
                                        type='radio'
                                        name='radio-group1'
                                        id='radio1.2'
                                        value={ this.state.color}
                                        onChange={ event => this.setState({ color: 'black'})} />
                                    <label> Black </label>
                                </div>
                        </section>
                        </div>
                </div>
                <Submit
                    balance={ this.props.balance }
                    color={this.state.color}
                    amount={this.state.amount} />
            </div>
        )
    }
}
export default Bet;