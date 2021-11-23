const NFTMarket = artifacts.require("NFTMarket");

const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = async function(callback) {
    try {
      const accounts = await web3.eth.getAccounts()

      const nftMarket = await NFTMarket.deployed()
      console.log('NFT market fetched', nftMarket.address)

      const owner = accounts[0]
      const metadata = "ipfs://QmQ65nTguocBUjiPNxRA35SeZHLC4G2Q4nfbfJ2M3yJKJu"
      await nftMarket.createNFT(metadata, { from: owner })
      console.log("NFT created - panda")

      await wait(1)

      const metadata2 = "ipfs://QmQKHgEkr5GPtEHquEBxD7zaNoAZA5HTTjNCFxSUaqGJv2"
      await nftMarket.createNFT(metadata2, { from: owner })
      console.log("NFT created - thug panda")
    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }