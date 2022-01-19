---
sidebar_position: 4
---

# API Reference

Metaview has the following functions publically available for anyone to use on any of our supported networks.

## Functions

### getAggregateRating()
The `getAggregateRating()` function returns all the rating information for a token.

#### Syntax
```js
metaview.getAggregateRating(token)
```

#### Parameters
|Parameter|Description|
|---------|-----------|
|token    |The address of the token to get information about.|

#### Return Value
|Value|Description|
|-----|-----------|
|rating           |The average rating for the token. Will be 0 if the token has not been rated.|
|ratingCount      |The number of accounts that have rated the token.|
|scamCount        |The number of accounts that have reported the token to be a scam.|
|remainingBonuses |The number of bonus rewards available.|
|bonusAmount      |The bonus reward amount.|

### getRating()
The `getRating()` function returns the rating an account gave a token.

#### Syntax
```js
metaview.getRating(token, account)
```

#### Parameters
|Parameter|Description|
|---------|-----------|
|token    |The address of the token that was rated.|
|account  |The address of the account that rated the token.|

#### Return Value
|Value|Description|
|-------|---------|
|rating |The rating that the account gave the token.|

### setRating()
The `setRating()` function is used to assign a rating to a token for .

#### Syntax
```js
metaview.setRating(token, rating, scam)
```

#### Parameters
|Parameter|Description|
|---------|-----------|
|token    |The address of the token to rate.|
|rating   |The rating to give the token.|
|scam     |Set to *true* to report that the token is a scam, otherwise set to *false*.|

### setBonus()
The `setBonus()` function is used to add a bonus reward for a token.

#### Syntax
```js
metaview.setBonus(token, bonusAmount, bonusCount)
```

#### Parameters
|Parameter|Description|
|---------|-----------|
|token       |The address of the token to add a bonus for.|
|bonusAmount |The bonus amount.|
|bonusCount  |The number of bonus rewards to add.|
