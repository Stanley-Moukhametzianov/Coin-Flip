# Coin-Flip

* App uses react for the front end with web3 to make calls to the contract. 
* This contract is deployed on the Rinkeby test network at the address: 0x27Ce51AC010796AC501F06411ad1d49d824cd1b3.
* This app is designed to test a coin flip smart contract. :D 

## :books: General info


* This app allows users to automatically bet on a coin flip against a smart contract. The users must bet less than or equal to the balance of the contract. 

* **Note:** The contract is deployed on the Rinkeby test network. All eth that is used on the site is test ether. 

* Once the bet is active users wait until a pop up appears displaying their coin flip. After, the page reloads and updates the balance on the page. You can then also see the last four wins in the table below the submit button. 


## :camera: Demo




https://user-images.githubusercontent.com/66892566/147994921-e0d6738c-ffef-4060-a053-a4982523e5b2.mov




## :computer: Smart Contract

* Lottery contract that is used in the website.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.4.20;

contract CoinFlip {
    address public owner;
    uint public numberGenerated;

    struct Winner {
        address account;
        uint winningNumber;
        uint amountWon;
    }

    Winner[] public pastWinners;

    function CoinFlip() public {
        owner = msg.sender;
    }
    function bet(uint color) public payable{
        // 1 is red and 2 is black
        require(color == 1 || color == 2);
        uint256 num = (block.number % 10) + 1; // This isn't secure
        if (int(num) >=6) 
            numberGenerated = 2;
        else 
            numberGenerated = 1;
        if(color == numberGenerated){
            msg.sender.transfer(msg.value * 2);

            pastWinners.push(Winner(msg.sender, numberGenerated,msg.value));
        }else{
            pastWinners.push(Winner(owner, numberGenerated, msg.value));
        }
        
    }
    function addFunds() public payable{   
    }
    function withdrawBalance() public {
        require(msg.sender == owner);
        owner.transfer(this.balance);
    }
    function getBalance() public view returns (uint){
        return this.balance;
    }
    function getWinnersCount() public view returns (uint) {
        return pastWinners.length;
    }

}

```


## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [Stanley Moukhametzianov](https://github.com/Stanley-Moukhametzianov?tab=repositories), email: stanleymoukh@gmail.com
