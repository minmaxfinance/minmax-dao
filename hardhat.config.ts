import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import "@nomiclabs/hardhat-vyper";
import 'hardhat-deploy';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'dotenv/config';
import {HardhatUserConfig} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{version: "0.5.0"}, {version: "0.6.11"}, {version: "0.8.0"}, {version: "0.8.2"}]
  },
  vyper: {
    version: "0.2.12",
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://rpc.ftm.tools/`
        //blockNumber: parseInt(<string>process.env.ETH_MAINNET_BLOCK_NUMBER),
      },
      accounts: [{privateKey: process.env.DEV_PRIVATE_KEY!, balance: "1000000000000000000"}]
    },
    iotex: {
      url: `https://babel-api.mainnet.iotex.io`,
      accounts: [`0x${process.env.DEV_PRIVATE_KEY}`],
    },
  },
  mocha: {
    timeout: 200000
  }
};

export default config;
