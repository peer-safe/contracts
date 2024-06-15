var PeerSafeDeployer = artifacts.require("PeerSafeDeployer");
var VaultDeployer = artifacts.require("VaultDeployer");
var Ownable = artifacts.require("Ownable");
var FileManager = artifacts.require("./utils/FileManager");
var SigUtils = artifacts.require("SigUtils");
// var File = artifacts.require("File");

require('dotenv').config();
const { MNEMONIC, OLD_ADDRESS } = process.env;
const ethers = require('ethers');

module.exports = async function(deployer, network, accounts) {
  // deployment steps
  // let wallet = ethers.Wallet.fromMnemonic(MNEMONIC);
  // const message = "migrate";
  // const messageHash = ethers.utils.id(message);
  // const messageHashBytes = ethers.utils.arrayify(messageHash);
  // const sig = await wallet.signMessage(messageHashBytes);
  // const recovered = ethers.utils.splitSignature(sig);
  // const r = recovered.r;
  // const s = recovered.s;
  // const v = recovered.v;
  // await deployer.deploy(Ownable);
  // await deployer.deploy(SigUtils);
  await deployer.deploy(FileManager);
  // await deployer.deploy(File);
  // await deployer.link(Ownable, VaultDeployer);
  // await deployer.link(SigUtils, VaultDeployer);
  await deployer.link(FileManager, VaultDeployer);
  // await deployer.link(File, VaultDeployer);
  await deployer.deploy(VaultDeployer);
  await deployer.deploy(PeerSafeDeployer, VaultDeployer.address);
  // if (!OLD_ADDRESS) {
  //   return
  // }
  // const old = new PeerSafeDeployer(OLD_ADDRESS);
  // if (!old) {
  //   return
  // }

  // const value = await old.adminAllVaults();
  // console.log(value)
  // let users = value['0']
  // let vaults = value['1']
  // console.log(users, vaults);
  // const new_contract = await PeerSafeDeployer.deployed();
  // console.log(await new_contract.adminMigrate(messageHash, v, r, s, users, vaults));
};
