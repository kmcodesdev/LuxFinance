require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Dm5PrKF40uE5VBI6WZllldEprRSR1eHf',
      accounts: ['821004734c43bf5eccf8ba4c00304f53e9ebaaefa422bbf2224c411f1bcbfc72'],
    }
  }
}

