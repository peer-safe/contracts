// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./utils/Ownable.sol";
import "./utils/SigUtils.sol";
import "./utils/SECP256K1.sol";
import "./utils/ShareManager.sol";
import "./utils/File.sol";
import "./utils/UseDeployer.sol";
import "./utils/User.sol";
import "./interfaces/IVaultDeployer.sol";
import "./interfaces/IVault.sol";

contract PeerSafeDeployer is Ownable {
    mapping(address => User) users;
    address[] keys;
    address deployer;
    using ShareManager for ShareRequests;
    ShareRequests shareRequests;

    constructor (address _deployer) Ownable(msg.sender, msg.sender) {
        deployer = _deployer;
    }

    function getVault(address _vaultOwner) external view returns(address) {
        IVault _v = users[_vaultOwner].vault;
        require(address(_v) != address(0), "does not exist");
        return address(_v);
    }

    function deploy(string memory _userName, bytes memory pubKey) external returns(address) {
        IVault _vault = IVault(IVaultDeployer(deployer).deploy(msg.sender, _userName));
        users[msg.sender] = User(_vault, pubKey);
        keys.push(msg.sender);
        return address(_vault);
    }

    function relayDeploy(string memory _userName, bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, bytes memory pubKey) external returns(address) {
        (address signer,) = SECP256K1.recoverSignerAndPubKey(_hashedMessage, _v, _r, _s);
        IVault _vault = IVault(IVaultDeployer(deployer).deploy(signer, _userName));
        users[signer] = User(_vault, pubKey);
        keys.push(signer);
        return address(_vault);
    }

    function createFile(string memory name, string memory fileType, string memory ipfsHash, string memory key, bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) external {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        IVault _vault = users[signer].vault;
        _vault.createFile(name, fileType, ipfsHash, key);
    }

    function getAllFiles(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) external view returns(File[] memory) {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        IVault _vault = users[signer].vault;
        return _vault.getAllFiles();
    }

    function deleteFile(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, string memory ipfsHash) external {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        IVault _vault = users[signer].vault;
        return _vault.deleteFile(ipfsHash);
    }

    function getPubKey(address _user) external view returns(bytes memory) {
        return users[_user].pubKey;
    }

    function sendShareRequest(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, address _to, string memory _fileHash, string memory _keyHash, string memory _name, string memory _fileType) external {
        require(_to != address(0), "ERR691");
        require(users[_to].pubKey.length != 0, "ERR691");
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        shareRequests.addShareRequest(signer, _to, _fileHash, _keyHash, _name, _fileType);
    }

    function getShareRequests(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) external view returns(ShareRequest[] memory) {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        require(signer != address(0), "ERR691");
        return shareRequests.getShareRequests(signer);
    }

    function acceptShareRequest(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, string memory _fileHash) external {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        require(shareRequests._shareRequests[signer][_fileHash]._from != address(0), "ERR214");
        require(users[signer].pubKey.length != 0, "ERR691");
        IVault _vault = users[signer].vault;
        ShareRequest memory _shareRequest = shareRequests._shareRequests[signer][_fileHash];
        _vault.addSharedFile(_shareRequest._name, _shareRequest._fileType, _shareRequest._fileHash, _shareRequest._keyHash, _shareRequest._from);
        shareRequests.deleteShareRequest(signer, _fileHash);
    }

    function rejectShareRequest(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, string memory _fileHash) external {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        shareRequests.deleteShareRequest(signer, _fileHash);
    }

    function adminAllVaults() external view onlyOwnerOrCreator returns(address[] memory, address[] memory) {
        address[] memory _vaults;

        for (uint i = 0; i < keys.length; i++) {
            _vaults[i] = address(users[keys[i]].vault);
        }

        return (keys, _vaults);
    }

    // function adminMigrate(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, address[] memory _users, address[] memory _oldVaults) external onlyOwnerOrCreator{
    //     require(_users.length == _oldVaults.length, 'length should be equal');

    //     for (uint i = 0; i < _users.length; i++) {
    //         IVault _newVault = IVault(UseDeployer.deployVault(deployer, owner, IVault(_oldVaults[i]).getUser()));
    //         users[_users[i]] = _newVault;
    //         _newVault.migrateFiles(_hashedMessage, _v, _r, _s, IVault(_oldVaults[i]).getAllFiles());
    //     }
    // }
}