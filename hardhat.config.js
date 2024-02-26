require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `${process.env.ALCHEMY_URL}`, // Replace with your Infura project ID
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Your wallet's private key
    }
  }
};