import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";

// Assuming the following globals from your contract deployment
const contractAddress = "0xeEb676fd2ff8f96F59bC3c59F063556904477679"; // Replace with your contract's address
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addToWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isWhitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "removeFromWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelistedAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]; 

// Connect to the user's Ethereum wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            return {
                status: "Wallet connected",
                address: addressArray[0],
            };
        } catch (err) {
            return {
                address: "",
                status: "Error: " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: "Please install MetaMask or another Ethereum wallet.",
        };
    }
}

// Check if the connected address is whitelisted
async function checkWhitelistStatus(userAddress) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
        const isWhitelisted = await contract.isWhitelisted(userAddress);
        return isWhitelisted;
    } catch (error) {
        console.error("Error checking whitelist status:", error);
        return false;
    }
}

// Main function to run on page load or button click
async function main() {
    console.log("main function ran.");
    const walletResponse = await connectWallet();
    if (walletResponse.address) {
        console.log("walletResponse");
        console.log(walletResponse.status); // Optionally log the wallet connection status
        const isWhitelisted = await checkWhitelistStatus(walletResponse.address);
        if (isWhitelisted) {
            // Show whitelisted content

            document.getElementById('whitelist-content').style.display = 'block';
            document.getElementById('non-whitelist-content').style.display = 'none';
            // Display the whitelisted user image
            const imgContainer = document.getElementById('whitelistImageContainer');
            imgContainer.style.display = 'block'; // Make the container visible
            imgContainer.innerHTML = '<img src="img/gigachad.jpg" alt="Whitelisted">';
       
        } else {
            // Show not whitelisted message
            alert("Your address is not whitelisted.");
        }
    } else {
        // Handle wallet not connected or error
        alert(walletResponse.status);
    }
}

// Optionally, run main() when a button is clicked to connect the wallet.
// Ensure you have a button with id="connectButton" in your HTML.
document.getElementById("connectButton").addEventListener("click", main);
