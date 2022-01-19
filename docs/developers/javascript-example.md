---
sidebar_position: 2
---

# Javascript Example

To access token ratings from a Javascript environment such as a web browser or [Node.js](https://nodejs.org/) you can copy the following code sample or clone the [javascript example repository](https://github.com/metaviewio/metaview-examples-javascript).

## Sample Code

This code sample makes use of the popular [Ethers.js](https://docs.ethers.io/) library.

```js
const ethers = require('ethers')

const contractAddress = '0xE9a7d18ACE629BBF46eF5D13ba3BaA9510EECbD6' // Metaview contract address on Ropsten Testnet
const tokenAddress = '0xE9a7d18ACE629BBF46eF5D13ba3BaA9510EECbD6' // Token address to lookup on Ropsten Testnet

const provider = new ethers.getDefaultProvider('ropsten')
const metaviewAbi = [
  'function getAggregateRating(address token) view returns (tuple(uint64 rating, uint32 ratingCount, uint32 scamCount, uint32 remainingBonuses, uint96 bonusAmount))'
]
const metaviewContract = new ethers.Contract(contractAddress, metaviewAbi, provider)

metaviewContract.getAggregateRating(tokenAddress).then((aggregateRating) => {
  var rating = ethers.utils.formatUnits(aggregateRating.rating)
  console.log('rating:', rating)
}).catch((error) => {
  console.error(error)
})
```

:::info
The sample code uses the `getDefaultProvider` function, however it is recommended that you sign up for your own API key. See [this page](https://docs.ethers.io/v5/api-keys/) for details.
:::

## Contract ABI

This is the Metaview contract ABI in the format used by the [Ethers.js](https://docs.ethers.io/) library.

```js
[
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function balanceOf(address account) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',
  'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function transfer(address recipient, uint256 amount) returns (bool)',
  'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  'function setRating(address token, uint64 rating, bool scam)',
  'function getRating(address token, address account) view returns (tuple(uint64 rating, bool rated, bool scam))',
  'function setBonus(address token, uint96 bonusAmount, uint32 bonusCount)',
  'function getAggregateRating(address token) view returns (tuple(uint64 rating, uint32 ratingCount, uint32 scamCount, uint32 remainingBonuses, uint96 bonusAmount))'
]
```
