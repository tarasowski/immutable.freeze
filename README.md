# immutable.freeze
Deep Freeze Function for Redux Reducers.

* API 
```js
module.exports = { deepFreeze }
```

* Example

```js

const cards = x => '/.../'

const testRemoveCard = before => action => after =>
    expect(
        cards(deepFreeze(before))(deepFreeze(action))
    ).toEqual(after)

testRemoveCard([
    {
        id: 5
    },
    {
        id: 6
    }
])({
    type: REMOVE_CARD,
    id: 5
})([{ id: 6 }])

```

```js
const expect = require('expect')
const deepFreeze = require('./node_modules/deep-freeze')


const addCounter = list =>
    [...list, 0]


const removeCounter = list => index =>
    [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]

const incrementCounter = list => index =>
    [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]


const testAddCounter = before => after =>
    expect(
        addCounter(deepFreeze(before)) // deepFreeze makes the value immutable
    ).toEqual(after)


testAddCounter([])([0])

const testRemoveCounter = before => after =>
    expect(
        removeCounter(deepFreeze(before))(1)
    ).toEqual(after)

testRemoveCounter([0, 10, 20])([0, 20])

const testIncrementCounter = before => after =>
    expect(
        incrementCounter(deepFreeze(before))(1) // deepFreeze makes the value immutable
    ).toEqual(after)


testIncrementCounter([0, 10, 20])([0, 11, 20])

```
