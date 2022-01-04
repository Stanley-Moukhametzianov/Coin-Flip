import React, { Component } from 'react'
import ParticleNetwork from '../components/ParticleNetwork'
import Bet from '../components/Bet'
import Table from '../components/Table'
import Submit from '../components/Submit'
import Head from 'next/head';
import contract from '../ethereum/coinflip';
import Slides from '../components/Slides';

class Index extends Component {
  state = {
    winningSide : false,
  }
  static async getInitialProps() {
    const balance = await contract.methods.getBalance().call();
    const length =  await contract.methods.getWinnersCount().call();

    const pastWinners = await Promise.all(
      Array(parseInt(4))
        .fill()
        .map((element, index) => {
          return contract.methods.pastWinners((length-1) - index).call();
        })
    );

    return { balance,pastWinners };
    }
  render() {
    return (
      <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
        </Head>
         <div id="hero">
          <div id="network">
              <ParticleNetwork id='header-particles' />
          </div>
          <div id="overlay">
            <h1>Coin&nbsp;Flip</h1>
            <p>View&nbsp;on&nbsp;<a href="#">GitHub</a></p>
          </div>
        </div>
        <Bet balance={this.props.balance} />
        <Table pastWinners={ this.props.pastWinners}/>

        <h1 className="afterTable" />
        <h1> How does this work? </h1>
        <h6>
          This app interacts with a contract deployed on the Rinkeby test network. As such all translations use test ethereum.
          Once funds have been added to the contract, users can call the bet function. This function generates a pseudo random number and gives users a fifty percent chance to win. If the user wins, the funds are transferred to that account. However, if the contract wins the funds are kept. To generate a random number the contract uses the current block number. This means the outcome can be somewhat predicted. For more information, on how the code works feel free to check out the GitHub repository or look at the examples below.  

        </h6>
        <Slides />

        
        
      </div>
      
    )
  }
}

export default Index;