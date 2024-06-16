import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";
import { network } from "hardhat";

const { vars } = require("hardhat/config");

const ALCHEMY_KEY = vars.get("ALCHEMY_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

const config: HardhatUserConfig = {
  defaultNetwork: "base-sepolia",
  networks: {
    "base-sepolia": {
      url: `https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [vars.get("DEPLOYER_KEY")],
    },
  },
  etherscan: {
    apiKey: {
      "base-sepolia": ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      }
    ],
  },
  solidity: "0.8.24",
};

export default config;
