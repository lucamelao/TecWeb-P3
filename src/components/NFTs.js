import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { nftMarketSelector, allNFTsLoadedSelector, allNFTsSelector } from '../store/selectors'
import { loadAllNFTs } from '../store/interactions'

const NFTs = (props) => {

  const loadBlockchainData = async (dispatch) => {
      await loadAllNFTs(props.nftMarket, dispatch)
    }
  useEffect(()=> {
      loadBlockchainData(props.dispatch)
  },[])
  
  return (
      <div>
          <div>
              {props.nftsLoaded ? 
                (props.allNFTs.map((nft) => (
                    <div>
                        <div>{nft._to}</div>
                        <div>{nft._tokenId}</div>
                        <div>{nft._tokenURI}</div>
                    </div>
                )
                )): <div>NFTS</div>}
          </div>
      </div>
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
