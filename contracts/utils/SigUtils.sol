// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


library SigUtils {
    function recoverSigner(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) internal pure returns(address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, _hashedMessage));
        return ecrecover(prefixedHashMessage, _v, _r, _s);
    }
}