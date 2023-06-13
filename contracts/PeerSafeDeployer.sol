// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./utils/Ownable.sol";
import "./Vault.sol";
import "./utils/SigUtils.sol";

contract PeerSafeDeployer is Ownable {
    mapping(address => Vault) vaults;
    address[] keys;

    constructor () Ownable(msg.sender, msg.sender) {}

    function getVault(address _vaultOwner) external view returns(address) {
        Vault _v = vaults[_vaultOwner];
        // if (_v.getOwner() == _vaultOwner) {
        require(address(_v) != address(0), "does not exist");
        return address(_v);
        // }
        // revert("ERR691: vault doesn't exist");
    }

    function deploy(string memory _userName, bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) external returns(address) {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        Vault _vault = new Vault(owner, _userName);
        vaults[signer] = _vault;
        return address(_vault);
    }

    function createFile(string memory name, string memory fileType, string memory ipfsHash, string memory key, bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) external {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        Vault _vault = vaults[signer];
        _vault.createFile(name, fileType, ipfsHash, key);
    }

    function getAllFiles(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) external view returns(File[] memory) {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        Vault _vault = vaults[signer];
        return _vault.getAllFiles();
    }

    function deleteFile(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, string memory ipfsHash) external {
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        Vault _vault = vaults[signer];
        return _vault.deleteFile(ipfsHash);
    }

    function adminAllVaults() external view onlyOwnerOrCreator returns(address[] memory, Vault[] memory) {
        Vault[] memory _vaults;

        for (uint i = 0; i < keys.length; i++) {
            _vaults[i] = (vaults[keys[i]]);
        }

        return (keys, _vaults);
    }

    function adminMigrate(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, address[] memory _users, address[] memory _oldVaults) external onlyOwnerOrCreator{
        require(_users.length == _oldVaults.length, 'length should be equal');

        for (uint i = 0; i < _users.length; i++) {
            Vault _newVault = new Vault(owner, Vault(_oldVaults[i]).user());
            vaults[_users[i]] = _newVault;
            _newVault.migrateFiles(_hashedMessage, _v, _r, _s, Vault(_oldVaults[i]).getAllFiles());
        }
    }
}