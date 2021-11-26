import { get } from 'lodash'
import { Navbar } from 'react-bootstrap'
import { createSelector } from 'reselect'

const web3Connection = state => get(state, 'web3.connection')
export const web3ConnectionSelector = createSelector(web3Connection, web3 => web3)

const account = state => get(state, 'web3.account', "0")
export const accountSelector = createSelector(account, a => a)

const accountLoaded = state => get(state, 'web3.loaded', false)
export const accountLoadedSelector = createSelector(accountLoaded, a => a)

const nftMarketLoaded = state => get(state, 'nftMarket.loaded', false)
export const nftMarketLoadedSelector = createSelector(nftMarketLoaded, nftm => nftm)

const nftMarket = state => get(state, 'nftMarket.contract')
export const nftMarketSelector = createSelector(nftMarket, nftc => nftc)

const allNFTsLoaded = state => get(state, 'nftMarket.allNFTs.loaded', false)
export const allNFTsLoadedSelector = createSelector(allNFTsLoaded, loaded => loaded)

const allNFTs = state => get(state, 'nftMarket.allNFTs.data', [])
export const allNFTsSelector = createSelector(allNFTs, nft => nft)

export const myNFTsLoadedSelector = createSelector(allNFTsLoaded, loaded => loaded)

export const myNFTsSelector = createSelector(
    account,
    allNFTs,
    (account, nfts) => {
        const myNFTs = nfts.filter((n) => n._to === account)
        return myNFTs
    }
)