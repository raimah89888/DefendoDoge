// DefendoDoge/smart-contracts/hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20", // Or your preferred version
  networks: {
    hardhat: {
      // Default Hardhat Network settings
    },
    goerli: { // Example testnet
      url: process.env.GOERLI_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    sepolia: { // Newer testnet example
        url: process.env.SEPOLIA_RPC_URL || "",
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    // You can add other networks like mainnet, polygon, bsc, etc.
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "", // For Etherscan Verification
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};