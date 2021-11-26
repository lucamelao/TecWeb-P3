import React from 'react'
import { connect } from 'react-redux'
import { allNFTsLoadedSelector, allNFTsSelector } from '../store/selectors'
import TokenCard from "./TokenCard"
import { Wrap, WrapItem } from "@chakra-ui/react";

const NFTs = (props) => {
  
  return (
    <Wrap>
        {props.nftsLoaded ? 
          (props.allNFTs.map((nft) => (
            <WrapItem key={nft._tokenId}>
              <TokenCard nft={nft} />
            </WrapItem>
          )
          )): <div>NFTS</div>}
    </Wrap>
  )
}

function mapStateToProps(state) {
  return {
    nftsLoaded: allNFTsLoadedSelector(state),
    allNFTs: allNFTsSelector(state)
  }
}

export default connect(mapStateToProps)(NFTs)
