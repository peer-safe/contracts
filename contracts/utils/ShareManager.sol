// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


struct ShareRequest {
    address _from;
    string _fileHash;
    string _keyHash;
    string _name;
    string _fileType;
}

struct ShareRequests {
    mapping(address => mapping(string => ShareRequest)) _shareRequests;
    mapping(address => string[]) _keys;
}

library ShareManager {
    function addShareRequest(ShareRequests storage self, address _from, address _to, string memory _fileHash, string memory _keyHash, string memory _name, string memory _fileType) internal {
        require(self._shareRequests[_to][_fileHash]._from == address(0), "SRAExists");
        ShareRequest memory _shareRequest = ShareRequest(
            {
                _from: _from,
                _fileHash: _fileHash,
                _keyHash: _keyHash,
                _name: _name,
                _fileType: _fileType
            }
        );
        self._shareRequests[_to][_fileHash] = _shareRequest;
        self._keys[_to].push(_fileHash);
    }

    function getShareRequests(ShareRequests storage self, address _sender) internal view returns(ShareRequest[] memory) {
        ShareRequest[] memory _shareRequest = new ShareRequest[](self._keys[_sender].length);
        for (uint i = 0; i < self._keys[_sender].length; i++) {
            _shareRequest[i] = self._shareRequests[_sender][self._keys[_sender][i]];
        }
        return _shareRequest;
    }

    function deleteShareRequest(ShareRequests storage self, address sender, string memory _fileHash) internal {
        delete self._shareRequests[sender][_fileHash];
        for (uint i = 0; i < self._keys[sender].length; i++) {
            if (keccak256(abi.encodePacked(self._keys[sender][i])) == keccak256(abi.encodePacked(_fileHash))) {
                delete self._keys[sender][i];
            }
        }
    }
}