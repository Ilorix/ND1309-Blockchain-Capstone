# Udacity Blockchain Capstone

The capstone builds upon the knowledge gained in the Nanodegree program in order to build a decentralized real estate marketplace solution by using

- ERC721 tokens to sell and buy non-fungible real estate assets on the OpenSea marketplace.

- Zero knowledge proofs (zk-SNARK) to ensure that only the owner of an asset has the right to mint ERC721 tokens for it.



### Libraries
Library      | Version
------------ | -------------
Node             |v14.15.3
Solidity         |v0.5.16
openzeppelin-solidity |v2.1.2
Truffle          |v5.1.63
truffle-hdwallet-provider |v1.0.17
truffle-assertions   |v0.9.2
web3             |v1.2.9


## Installation

To install, download or clone this repo, then run:

`npm install`


## Implementing Zokrates (macOS)
1. **To initiate development environment, run Zokrates Docker**
    ```
    cd <path to project folder>/zokrates/code

    docker run -v "$(pwd)":/home/zokrates/code -ti zokrates/zokrates /bin/bash
    ```
2. **Compile ZoKrates DSL program code**
    ```
    cd code 

    zokrates compile -i square/square.code
    ```
3. **Generate the trusted setup**
    ```
    zokrates setup
    ```
4. **Compute witness**
    ```
    zokrates compute-witness -a 7 49
    ```
5. **Generate a proof of computation**
    ```
    zokrates generate-proof
    ```
6. **export solidity verifier (verifier.sol)**
    ```
    zokrates export-verifier

    mv verifier.sol ../../eth-contracts/contracts
    ```


## Building and Testing
Compile and test the contracts:

```
ganache-cli --gasLimit=0x1fffffffffffff

cd eth-contracts

truffle compile

truffle test
```

## Deployment
Deploy `verifier.sol` and `SolnSquareVerifier.sol` to Rinkeby testnet:

```
truffle migrate --reset --network rinkeby

```

## Deployed Contracts Info
Contract addresses on Rinkeby Network:
Contract Name      | Contract Address
------------ | -------------
Migrations             |[0x13E56577686Abd4d409c98e8282Dad6199435529](https://rinkeby.etherscan.io/address/0x13e56577686abd4d409c98e8282dad6199435529/)
Verifier         |[0xf928929e17e210F31D4412bab023e6dfa7386052](https://rinkeby.etherscan.io/address/0xf928929e17e210F31D4412bab023e6dfa7386052)
SolnSquareVerifier |[0x426Ec69c48A94268F8b7dDbAe7cCa6d6c450C941](https://rinkeby.etherscan.io/address/0x426Ec69c48A94268F8b7dDbAe7cCa6d6c450C941)


## SolnSquareVerifier Contract ABI
[Contract ABI](/eth-contracts/contract-abi.json)

## Minting Tokens

`5 OSNFP (OpenSea Non-Fungible Properties)` tokens were minted by using myetherwallet by interacting with the contract: [https://www.myetherwallet.com/interface/interact-with-contract](https://www.myetherwallet.com/interface/interact-with-contract)

![Minting](/screens/minting.png)

Here are these minted 5 OSNFP tokens on Rinkeby testnet: 
[https://rinkeby.etherscan.io/token/0x426ec69c48a94268f8b7ddbae7cca6d6c450c941](https://rinkeby.etherscan.io/token/0x426ec69c48a94268f8b7ddbae7cca6d6c450c941)


## OpenSea MarketPlace Storefront
[OpenSea MarketPlace Storefront](https://testnets.opensea.io/collection/opensea-non-fungible-properties)

![OpenSea Storefront](/screens/opensea-storefront.png)


## Selling and Buying OSNFP Tokens on OpenSea MarketPlace
See below the transactions/trading history for Luxury Home ERC721 token.

![Transactions History](/screens/transactions-history.png)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
