const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    mumbai: {
      provider: () => new HDWalletProvider("55e9955dab796892a43a706b6d3d4bd199b1778e2619755fcd4ea844c05f0c7b", `https://matic-mumbai.chainstacklabs.com/`),
      network_id: 80001,
      gas: 6000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: () => new HDWalletProvider("55e9955dab796892a43a706b6d3d4bd199b1778e2619755fcd4ea844c05f0c7b", `https://rinkeby.infura.io/v3/e72e52471a414e1cbaaeaa3c60763693`),
      network_id: 4,
      gas: 6000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 10000000000,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0",
    }
  }
}