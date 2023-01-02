var babel = require('@babel/core')

const transformer = {
    canInstrument: true,
    process: function (sourceText, sourcePath, c, o) {
        const options = {
            babelrc: false,
            compact: false,
            configFile: false,
            plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
        }
        const result = babel.transformSync(sourceText, options)
        return result
    },
}
module.exports = transformer

// const config = {
//     babelrc: false,
//     presets: ['@babel/env', '@babel/react', '@babel/typescript'],
//     plugins: [
//         ['@babel/plugin-proposal-class-properties', { loose: true }],
//         '@babel/plugin-transform-runtime',
//         '@babel/plugin-syntax-dynamic-import',
//         '@babel/plugin-proposal-object-rest-spread',
//     ],
// }
// module.exports = require('babel-jest').createTransformer(config)
