import React, { Component } from 'react';
import web3 from '../ethereum/web3';

class Table extends Component {
    renderRows() {
        return this.props.pastWinners.map((winner, index) => {
            return (
                <tr key={ index}>
                    <td data-label="Account">
                        {winner.account.substring(0, 5) + ' ... ' +
                            winner.account.substring( winner.account.length - 5, winner.account.length)}</td>
                    <td data-label="Amount">
                        {web3.utils.fromWei(winner.amountWon,'ether')}
                    </td>
                    <td data-label="Color">
                        {parseInt(winner.winningNumber) === 1 ? <div className="circleRed" />
                            : <div className="circleBlack" />}
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table>
                <caption>Past Winners</caption>
                <thead>
                    <tr>
                    <th scope="col">Account</th>
                    <th scope="col">Amount (eth)</th>
                    <th scope="col">Winning Color</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows()}
                </tbody>
            </table>
        )
    }
}
export default Table;