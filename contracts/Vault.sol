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

struct Directory {
    string _name;
    File[] _files;
    mapping (string => Directory) _directories;
    string[] _directoryNames;
}

contract Vault is Ownable {
    string public user;
    mapping (uint => Directory) public root;
    constructor(address _owner, string memory _userName ) Ownable(msg.sender, _owner) {
        user = _userName;
        // mapping(string => Directory) storage _directories;
        root[0]._name = "root";
    }

    function findDirectory(string[] memory directories, bool createIfNotExists) internal returns(Directory storage) {
        Directory storage currentDirectory = root[0];
        for (uint i = 0; i < directories.length; i++) {
            currentDirectory = currentDirectory._directories[directories[i]];
        }
        return currentDirectory;
    }

    event FileCreated();
    function createFile(string[] memory directory, string memory name, string memory fileType, string memory ipfsHash, string memory key) external onlyOwnerOrCreator {
        File memory f = File(
           {
            _name: name,
            _fileType: fileType,
            _ipfsHash: ipfsHash,
            _key: key
           }
        );
        findDirectory(directory, true)._files.push(f);
        emit FileCreated();
    }

    event FileDeleted();
    function deleteFile(string[] memory directory, uint256 index) external onlyOwnerOrCreator {
        Directory storage d = findDirectory(directory, false);
        require( index < d._files.length, "index out of bounds" );
        d._files[index] = d._files[d._files.length-1];
        d._files.pop();
        emit FileDeleted();
    }

//     event FilesImported();
//     function migrateFiles(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, Directory memory _directory) public{
//         address signer = SigUtils.recoverSigner(_hashedMessage, _v, _r, _s);
//         require(signer == owner || signer == creator, 'neither owner nor creator');
//         root = _directory;
//         emit FilesImported();
//     }
}