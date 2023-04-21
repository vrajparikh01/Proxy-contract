// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Box {
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
        return "1.0";
    }
}
