import React, { Component, useEffect } from 'react';
import './App.css';
import Web3 from 'web3'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadNFTMarket,
} from './store/interactions'

function App(props) {

  const loadBlockchainData = async (dispatch) => {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    const account = await loadAccount(web3, dispatch)
    const NFTMarket = await loadNFTMarket(web3, networkId, dispatch)
  }
  useEffect(()=> {
    loadBlockchainData(props.dispatch)
  },[])

  return (
    <div className="App">
      <div>
        APP REACT
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in...
  }
}

export default connect(mapStateToProps)(App);
