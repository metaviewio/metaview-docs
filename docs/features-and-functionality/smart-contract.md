---
sidebar_position: 5
---

# Smart Contract

The Metaview smart contract is deployed on three chains
* Ethereum
* Binance Smart Chain
* Polygon

The smart contract is identical across these chains and as such the Metaview smart contract is a multichain contract.

The smart contract has the following functions

## Token Balances
The smart contract has the standard token balance and thus provides users with the VIEW token

## Reviews
The second step in the review process is the step of submitting the review to the blockchain. The following data is submitted for each review
* rating the user gave
* whether this token was marked as a scam
* the wallet address which gave the rating

Submitting a review will credit the account which submitted the review with VIEW tokens as a reward for submitting the review.

## Bonus Rewards
The smart contract has a function on which bonus rewards can be set for a given token. The token owner would pay the bonus rewards

function parameters:

```
void setBonus(uint96 bonusAmount, uint32 numReviews)
```
