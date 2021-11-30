import Web3 from 'web3'
import {
  web3Loaded,
  web3AccountLoaded,
  nftMarketLoaded,
  allNFTsLoaded,
  nftCreation
} from './actions'
import NFTMarket from '../abis/NFTMarket.json'
import keys from "../pinata"
const axios = require('axios');
const FormData = require('form-data');

export const loadWeb3 = async (dispatch) => {
  if(typeof window.ethereum!=='undefined'){
    const web3 = new Web3(window.ethereum)
    dispatch(web3Loaded(web3))
    return web3
  } else {
    window.alert('Please install MetaMask')
    window.location.assign("https://metamask.io/")
  }
}

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts()
  const account = await accounts[0]
  if(typeof account !== 'undefined'){
    dispatch(web3AccountLoaded(account))
    return account
  } else {
    window.alert('Please login with MetaMask')
    return null
  }
}

export const loadNFTMarket = async (web3, networkId, dispatch) => {
  try {
    const nftMarket = new web3.eth.Contract(NFTMarket.abi, NFTMarket.networks[networkId].address)
    dispatch(nftMarketLoaded(nftMarket))
    return nftMarket
  } catch (error) {
    console.log('Contract not deployed to the current network. Please select another network with Metamask.')
    return null
  }
}

export const loadAllNFTs = async (nftMarket, dispatch) => {
  const nftsCreated = await nftMarket.getPastEvents('NFTCreated', { fromBlock: 0,  toBlock: 'latest' })
  const allNFTs = nftsCreated.map((event) => event.returnValues)
  dispatch(allNFTsLoaded(allNFTs))
}


export const createToken = (nftMarket, pinata,cid, details , account) => {
  
  const metadata = {
    name : details.name,
    description : details.description,
    image : `ipfs://${cid}`
  }
  const options = {
    pinataMetadata: {
        name: metadata.name
      }
    }
  pinata.pinJSONToIPFS(metadata, options).then((result) => {
    nftMarket.methods.createNFT(result["IpfsHash"]).send({ from: account })
    .on('transactionHash', (hash) => {
      return 'success'
    })
    .on('error', (error) => {
      console.log(error)
      window.alert('There was an error!')
      return 'failure'
    })
  }).catch((err) => {
    console.log(err);
    window.alert('There was an error!')
  });
}

// export const createNFT = (nftMarket, pinata, details, img, account) => {

//   const options = {
//     pinataMetadata: {
//         name: details.name
//       }
//   }
  
//   console.log("foi 1")
//   pinata.pinFileToIPFS(img, options)
//   .then((result) => {
//     console.log("foi 2")
//     const metadata = {
//       name : details.name,
//       description : details.description,
//       image : `ipfs://${result["IpfsHash"]}`
//     }
//     console.log("foi 3")
//     createToken(nftMarket, pinata, metadata, options, account)
//   }).catch((err) => {
//     //handle error here
//     console.log(err);
//   });
  
// }

