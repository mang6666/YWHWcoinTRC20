var ConvertLib = artifacts.require("./ConvertLib.sol");
var YHWHcoin = artifacts.require("./YHWHtoken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, YHWHCoin);
  deployer.deploy(YHWHcoin, 10);
};
