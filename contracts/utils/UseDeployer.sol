// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;


library UseDeployer {
    function deployVault(address deployer, address owner, string memory userName) internal returns(address) {
        bytes memory data = abi.encodeWithSelector(bytes4(keccak256("deploy(address owner, string memory userName)")), owner, userName);
        (bool success, bytes memory returnedData) = deployer.delegatecall(data);
        require(success, "depl fail");
        return abi.decode(returnedData, (address));
    }
}