'use strict'

const esmodule = [
    './lib/esmodule/es6',
    './lib/esmodule/es8'
]

module.exports = {
    extends: esmodule.push('./lib/standard').map(require.resolve),
    parserOptions: {
        sourceType: 'script',
    }
}