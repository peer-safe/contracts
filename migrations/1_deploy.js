var PeerSafeDeployer = artifacts.require("PeerSafeDeployer");

require('dotenv').config();
const { MNEMONIC, OLD_ADDRESS } = process.env;
const ethers = require('ethers');

module.exports = async function(deployer, network, accounts) {
  // deployment steps
  let wallet = ethers.Wallet.fromMnemonic(MNEMONIC);
  const message = "migrate";
  const messageHash = ethers.utils.id(message);
  const messageHashBytes = ethers.utils.arrayify(messageHash);
  const sig = await wallet.signMessage(messageHashBytes);
  const recovered = ethers.utils.splitSignature(sig);
  const r = recovered.r;
  const s = recovered.s;
  const v = recovered.v;

  await deployer.deploy(PeerSafeDeployer);
  if (!OLD_ADDRESS) {
    return
  }
  const old = new PeerSafeDeployer(OLD_ADDRESS);
  if (!old) {
    return
  }

  const value = await old.adminAllVaults();
  let users = value['0']
  let vaults = value['1']
  console.log(users, vaults);
  const new_contract = await PeerSafeDeployer.deployed();
  console.log(await new_contract.adminMigrate(messageHash, v, r, s, users, vaults));
};
