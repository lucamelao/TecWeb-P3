import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { nftMarketSelector, allNFTsLoadedSelector, allNFTsSelector } from '../store/selectors'
import { loadAllNFTs } from '../store/interactions'
import TokenCard from "./TokenCard"
import { Wrap, WrapItem } from "@chakra-ui/react";

const NFTs = (props) => {

  const loadBlockchainData = async (dispatch) => {
      await loadAllNFTs(props.nftMarket, dispatch)
    }
  useEffect(()=> {
      loadBlockchainData(props.dispatch)
  },[])
  
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
    nftMarket: nftMarketSelector(state),
    nftsLoaded: allNFTsLoadedSelector(state),
    allNFTs: allNFTsSelector(state)
  }
}

export default connect(mapStateToProps)(NFTs)
