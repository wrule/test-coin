const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 100000000, 'Jimao Token', 8, 'JMAO');
};
