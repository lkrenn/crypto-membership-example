// Assuming the following globals from your contract deployment
const contractAddress = "0xeEb676fd2ff8f96F59bC3c59F063556904477679"; // Replace with your contract's address
const contractABI = [{
    "_format": "hh-sol-artifact-1",
    "contractName": "Whitelist",
    "sourceName": "contracts/Whitelist.sol",
    "abi": [
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
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610524806100616000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806306c933d81461005c5780633af32abf1461008c5780638ab1d681146100bc5780638da5cb5b146100d8578063e43252d7146100f6575b600080fd5b610076600480360381019061007191906103e4565b610112565b604051610083919061042c565b60405180910390f35b6100a660048036038101906100a191906103e4565b610132565b6040516100b3919061042c565b60405180910390f35b6100d660048036038101906100d191906103e4565b610187565b005b6100e0610271565b6040516100ed9190610456565b60405180910390f35b610110600480360381019061010b91906103e4565b610297565b005b60006020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e906104ce565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610327576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031e906104ce565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103b182610386565b9050919050565b6103c1816103a6565b81146103cc57600080fd5b50565b6000813590506103de816103b8565b92915050565b6000602082840312156103fa576103f9610381565b5b6000610408848285016103cf565b91505092915050565b60008115159050919050565b61042681610411565b82525050565b6000602082019050610441600083018461041d565b92915050565b610450816103a6565b82525050565b600060208201905061046b6000830184610447565b92915050565b600082825260208201905092915050565b7f4e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b60006104b8600d83610471565b91506104c382610482565b602082019050919050565b600060208201905081810360008301526104e7816104ab565b905091905056fea2646970667358221220497da1f3ba14fce3bd789d72a85875a8f804343b57c4f8e48aaf438a92b5db8f64736f6c63430008090033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806306c933d81461005c5780633af32abf1461008c5780638ab1d681146100bc5780638da5cb5b146100d8578063e43252d7146100f6575b600080fd5b610076600480360381019061007191906103e4565b610112565b604051610083919061042c565b60405180910390f35b6100a660048036038101906100a191906103e4565b610132565b6040516100b3919061042c565b60405180910390f35b6100d660048036038101906100d191906103e4565b610187565b005b6100e0610271565b6040516100ed9190610456565b60405180910390f35b610110600480360381019061010b91906103e4565b610297565b005b60006020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020e906104ce565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610327576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031e906104ce565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103b182610386565b9050919050565b6103c1816103a6565b81146103cc57600080fd5b50565b6000813590506103de816103b8565b92915050565b6000602082840312156103fa576103f9610381565b5b6000610408848285016103cf565b91505092915050565b60008115159050919050565b61042681610411565b82525050565b6000602082019050610441600083018461041d565b92915050565b610450816103a6565b82525050565b600060208201905061046b6000830184610447565b92915050565b600082825260208201905092915050565b7f4e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b60006104b8600d83610471565b91506104c382610482565b602082019050919050565b600060208201905081810360008301526104e7816104ab565b905091905056fea2646970667358221220497da1f3ba14fce3bd789d72a85875a8f804343b57c4f8e48aaf438a92b5db8f64736f6c63430008090033",
    "linkReferences": {},
    "deployedLinkReferences": {}
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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
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
    const walletResponse = await connectWallet();
    if (walletResponse.address) {
        console.log(walletResponse.status); // Optionally log the wallet connection status
        const isWhitelisted = await checkWhitelistStatus(walletResponse.address);
        if (isWhitelisted) {
            // Show whitelisted content
            document.getElementById('whitelist-content').style.display = 'block';
            document.getElementById('non-whitelist-content').style.display = 'none';
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
