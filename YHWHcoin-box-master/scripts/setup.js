var fs = require('fs')
var path = require('path')
var YHWHcoin = require(../build/contracts/YHWHtoken.sol)

const address = YHWHcoin.networks['2'].address

console.log('The app has been configured.')
console.log('Run "npm run dev" to start it.')

const tronboxJs = require('../tronbox').networks.shasta
const YHWHcoinConfig = {
  contractAddress: address,
  privateKey: tronboxJs.privateKey,
  fullHost: tronboxJs.fullHost
}

fs.writeFileSync(path.resolve(__dirname, '../src/js/YHWHcoin-config.js'),`var YHWHcoinConfig = ${JSON.stringify(YHWHoinConfig, null, 2)}`)
