require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_PROJECT_ID", // Replace with your Infura project ID
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Your wallet's private key
    }
  }
};