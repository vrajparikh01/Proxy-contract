# Basic Information 
This is a sample proxy contract.

A proxy pattern introduces upgradability for contracts by allowing users to change the target address inside the proxy contract.

Proxy contract is a contract which delegates calls to another contract. Users go through the proxy, and the proxy knows which contract to delegate the call to.

First, the proxy contract is pointing to Box implementation contract.
After running the upgrade script, the proxy contract will point to BoxV2 contract

## Quick start
Clone the repository and install all the packages

``` git clone https://github.com/vrajparikh01/Proxy-contract ```

``` npm install ```

## Deployment
To deploy all the contracts and upgrade the proxy, run the following command

``` npx hardhat run scripts/upgrade.js ```

