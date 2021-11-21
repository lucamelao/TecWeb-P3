// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarket is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;

    event NFTCreated(address indexed _to, uint256 indexed _tokenId, string indexed _tokenURI);

    constructor() ERC721("Art minter", "ART") {}

    function getLastId() 
        public view
        returns (uint256) 
    {
        return tokenIds.current();    
    }

    function createNFT(string memory _tokenURI)
        public
        returns (uint256)
    {
        tokenIds.increment();

        uint256 newItemId = tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        emit NFTCreated(msg.sender, tokenIds.current(), _tokenURI);

        return newItemId;
    }
}