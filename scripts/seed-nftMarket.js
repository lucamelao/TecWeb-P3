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
      const cid = "QmTfgGBcGVbZGk38jfT4rZhQAEtu3j7jwQkZE5E6ij39S2"
      await nftMarket.createNFT(cid, { from: owner })
      console.log("NFT created - panda")

      await wait(1)

      const cid2 = "QmbDCmAf5cL3eBaeomXneto2GreLPoGA8DbRsmXTeu6Lsv"
      await nftMarket.createNFT(cid2, { from: owner })
      console.log("NFT created - thug panda")
    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }