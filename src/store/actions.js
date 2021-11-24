// WEB3
export function web3Loaded(connection) {
    return {
      type: 'WEB3_LOADED',
      connection
    }
  }
  
export function web3AccountLoaded(account) {
  return {
    type: 'WEB3_ACCOUNT_LOADED',
    account
  }
}

// NFT MARKET
export function nftMarketLoaded(contract) {
  return {
    type: 'NFTMARKET_LOADED',
    contract
  }
}

export function allNFTsLoaded(allNFTs) {
  return {
    type: 'ALL_NFTS_LOADED',
    allNFTs
  }
}

export function nftCreation() {
  return {
    type: 'NFT_CREATED'
  }
}
