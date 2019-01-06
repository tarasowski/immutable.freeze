const { deepFreeze } = require('./index')
const expect = require('expect')



const mutate = obj => {
    obj.isOnline = false
    return obj
}

const testDeepFreeze = before => after =>
    expect(mutate(deepFreeze(before)))
        .toEqual(after, 'object property should not be changed')

testDeepFreeze({ isOnline: true })({ isOnline: true })














