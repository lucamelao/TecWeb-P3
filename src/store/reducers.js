import { combineReducers } from 'redux';

function web3(state = {}, action) {
  switch (action.type) {
    case 'WEB3_LOADED':
      return { ...state,  connection: action.connection }
    case 'WEB3_ACCOUNT_LOADED':
      return { ...state, account: action.account, loaded : true }
    default:
      return state
  }
}

function nftMarket(state = {}, action) {
  switch (action.type) {
    case 'NFTMARKET_LOADED':
      return { ...state, loaded: true, contract: action.contract }
    case 'ALL_NFTS_LOADED':
      return { ...state, allNFTs: { loaded: true, data: action.allNFTs } }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  web3,
  nftMarket
})

export default rootReducer
