require('dotenv').config();

require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_URL = process.env.MUMBAI_URL;
const SCAN_KEY = process.env.SCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "mumbai",
    networks: {
        hardhat: {
        },
        mumbai: {
          url: MUMBAI_URL,
          accounts: [PRIVATE_KEY],
        }
      },
    solidity: "0.8.18",
    etherscan: {
      apiKey: SCAN_KEY
    },
};