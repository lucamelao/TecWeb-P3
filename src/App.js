import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Web3 from 'web3'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadNFTMarket,
} from './store/interactions'
import { contractLoadedSelector } from './store/selectors'

function App(props) {

  const loadBlockchainData = async (dispatch) => {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    await loadAccount(web3, dispatch)
    const NFTMarket = await loadNFTMarket(web3, networkId, dispatch)
    if(!NFTMarket) {
      window.alert('Smart contract not detected on the current network. Please select another network with Metamask.')
      return
    }
  }
  useEffect(()=> {
    loadBlockchainData(props.dispatch)
  },[])

  return (
    <div>
      <Navbar />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contractLoaded: contractLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App);
