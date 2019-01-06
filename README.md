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
