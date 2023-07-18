// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../utils/File.sol";


interface IVault {
    function getAllFiles() external view returns(File[] memory);
    function createFile(string memory name, string memory fileType, string memory ipfsHash, string memory key) external;
    function addSharedFile(string memory name, string memory fileType, string memory ipfsHash, string memory key, address sharedBy) external;
    function deleteFile(string memory ipfsHash) external;
    function migrateFiles(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s, File[] memory _files) external;
    function getOwner() external view returns (address);
    function getCreator() external view returns (address);
    function getUser() external view returns(string memory);
}