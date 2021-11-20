import { get } from 'lodash'
import { createSelector } from 'reselect'

const account = state => get(state, 'web3.account')
export const accountSelector = createSelector(account, a => a)

const contractLoaded = state => get(state, 'nftMarket.loaded', false)
export const contractLoadedSelector = createSelector(contractLoaded, cl => cl)