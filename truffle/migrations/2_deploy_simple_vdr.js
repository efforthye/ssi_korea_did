const SimpleVdr = artifacts.require("simpleVDR");

module.exports = function (deployer) {
  deployer.deploy(SimpleVdr);
};
