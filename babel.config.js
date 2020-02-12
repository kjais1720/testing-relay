const babelConfig = require('@saastack/preset-react/config').babel;
module.exports = {
    ...babelConfig,
    presets: [
        ['@babel/preset-env', { modules: false }],
        ['react-app', { absoluteRuntime: false, flow: false, typescript: true }],
        ...(babelConfig.presets || []),
    ],
    sourceType: 'unambiguous',
    only: [
        "./src/**/*.ts",        
        "./src/**/*.tsx",
        "./src/**/*.js",
        "./src/**/*.jsx",
    ]
};  