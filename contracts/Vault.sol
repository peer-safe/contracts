// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "./utils/Ownable.sol";
import "./utils/SigUtils.sol";


struct File {
    string _name;
    string _fileType;
    string _ipfsHash;
    string _key;
}

contract Vault is Ownable {
    string public user;
    File[] files;
    constructor(address _owner, string memory _userName ) Ownable(msg.sender, _owner) {
        user = _userName;
    }

    function getAllFiles() external view returns(File[] memory) {
        return files;
    }

    event FileCreated();
    function createFile(string memory name, string memory fileType, string memory ipfsHash, string memory key) external onlyOwnerOrCreator {
        File memory f = File(
           {
            _name: name,
            _fileType: fileType,
            _ipfsHash: ipfsHash,
            _key: key
           }
        );
        files.push(f);
        emit FileCreated();
    }

    event FileDeleted();
    function deleteFile(uint256 index) external onlyOwnerOrCreator {
        require( index < files.length, "index out of bounds" );
        files[index] = files[files.length-1];
        files.pop();
        emit FileDeleted();
    }

    event FilesImported();
    function migrateFiles(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, File[] memory _files) public{
        address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
        require(signer == owner || signer == creator, 'neither owner nor creator');
        for (uint i = 0; i < _files.length; i++ ){
            files.push(_files[i]);
        }
        emit FilesImported();
    }
}