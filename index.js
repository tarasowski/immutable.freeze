const { compose } = require('compose.helpers')

const freezeObject = o =>
    Object.freeze(o)

const deepFreeze = o =>
    compose(
        freezeProperties,
        freezeObject,
    )(o)

const reducer = (acc, val) =>
    acc.hasOwnProperty(val) && acc[val] !== null && (typeof acc[val] === 'object' || typeof acc[val] === 'function') && !Object.isFrozen(acc[val])
        ? deepFreeze(acc[val])
        : acc

const freezeProperties = o =>
    Object.getOwnPropertyNames(o).reduce(reducer, o)

module.exports = { deepFreeze }