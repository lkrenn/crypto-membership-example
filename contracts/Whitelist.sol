// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {
    mapping(address => bool) public whitelistedAddresses;

    // The address of the contract owner
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict function calls to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Function to add an address to the whitelist
    function addToWhitelist(address _address) public onlyOwner {
        whitelistedAddresses[_address] = true;
    }

    // Function to remove an address from the whitelist
    function removeFromWhitelist(address _address) public onlyOwner {
        whitelistedAddresses[_address] = false;
    }

    // Function to check if an address is whitelisted
    function isWhitelisted(address _address) public view returns (bool) {
        return whitelistedAddresses[_address];
    }
}
