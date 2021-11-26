import React from 'react'
import { connect } from 'react-redux'
import { myNFTsLoadedSelector, myNFTsSelector, nftMarketSelector } from '../store/selectors'
import TokenCard from "./TokenCard"
import { Wrap, WrapItem } from "@chakra-ui/react";

const MyNFTs = (props) => {

  return (
    <Wrap>
        {props.myNFTsLoaded ? 
          (props.myNFTs.map((nft) => (
            <WrapItem key={nft._tokenId}>
              <TokenCard nft={nft} />
            </WrapItem>
          ))

          ): <div>My NFTS</div>}
    </Wrap>
  )
}

function mapStateToProps(state) {
  return {
    nftMarket: nftMarketSelector(state),
    myNFTsLoaded: myNFTsLoadedSelector(state),
    myNFTs: myNFTsSelector(state)
  }
}

export default connect(mapStateToProps)(MyNFTs)
