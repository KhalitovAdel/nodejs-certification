'use strict'

module.exports = {
    bicycle: bicycleModel()
}

function bicycleModel () {
    const db = {
        1: { brand: 'Veloretti', color: 'green' },
        2: { brand: 'Batavus', color: 'yellow' }
    }

    return {
        read
    }

    function read (id, cb) {
        setImmediate(() => cb(Error()))
    }
}
