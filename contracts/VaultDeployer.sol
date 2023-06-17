// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Vault.sol";

contract VaultDeployer {
    function deploy(address owner, string memory userName) external returns(address){
        return address(new Vault(msg.sender, owner, userName));
    }
}