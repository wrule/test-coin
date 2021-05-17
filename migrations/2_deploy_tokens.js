const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 10000000000000000, 'Jimao Token', 8, 'JMAO');
};
