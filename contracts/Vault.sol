// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./utils/Ownable.sol";
import "./utils/SigUtils.sol";
import "./utils/FileManager.sol";
import "./utils/File.sol";

contract Vault is Ownable {
    string public user;
    using FileManager for Files;
    Files files;

    constructor(address _creator, address _owner, string memory _userName ) Ownable(_creator, _owner) {
        user = _userName;
    }

    function getUser() external view returns(string memory) {
        return user;
    }

    function getAllFiles() external view returns(File[] memory) {
        return files.allFiles();
    }

    function createFile(string memory name, string memory fileType, string memory ipfsHash, string memory key) external onlyOwnerOrCreator {
        files.addFile(name, fileType, ipfsHash, key, address(0));
    }

    function addSharedFile(string memory name, string memory fileType, string memory ipfsHash, string memory key, address sharedBy) external onlyOwnerOrCreator {
        files.addFile(name, fileType, ipfsHash, key, sharedBy);
    }

    event FileDeleted();
    function deleteFile(string memory ipfsHash) external onlyOwnerOrCreator {
        files.deleteFile(ipfsHash);
    }

    function migrateFiles(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, File[] memory _files) public{
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        require(signer == owner || signer == creator, 'nauth');
        files.migrateFiles(_files);
    }
}