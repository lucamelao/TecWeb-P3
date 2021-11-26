import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./components/ChakraNavbar"
import NFTs from "./components/NFTs"
import MyNFTs from "./components/MyNFTs"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadNFTMarket,
  loadAllNFTs,
} from './store/interactions'
import { nftMarketLoadedSelector } from './store/selectors'

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
    await loadAllNFTs(NFTMarket, dispatch)
  }
  useEffect(() => {
    loadBlockchainData(props.dispatch)
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={props.nftMarketLoaded ? <NFTs /> :  <div></div>} />
        <Route path="/myTokens" element={props.nftMarketLoaded ? <MyNFTs /> :  <div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    nftMarketLoaded: nftMarketLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App);
