const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
  mnemonic = secrets.mnemonic
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
              'this will fail. Otherwise, you can ignore this message!')
  mnemonic = ''
}

module.exports = {
  networks: {
    live: {
      network_id: 1 // Ethereum public network
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    main: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/cd411dbf8b3f4dad8c5235895c797fca'),
      network_id: 3,
      // gas: 21000,
      gasPrice: 2,
    },
    // testrpc: {
    //   network_id: 'default'
    // },
    // coverage: {
    //   host: "localhost",
    //   network_id: "*",
    //   port: 8555,        
    //   gas: 0xfffffffffff,
    //   gasPrice: 0x01     
    // },
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*",
    // },
  },
  compilers: {
    solc: {
      version: "^0.4.4",
    },
  },
}
