// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IVaultDeployer {
    function deploy(address owner, string memory userName) external returns(address);
}