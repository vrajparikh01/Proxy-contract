// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BoxV2 {
    uint internal value;

    event ValueChanged(uint newValue);

    function store(uint newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint) {
        return value;
    }

    function version() public pure returns (string memory) {
        return "2.0";
    }

    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}
