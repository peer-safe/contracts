// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../interfaces/IVault.sol";

struct User {
    IVault vault;
    bytes pubKey;
}