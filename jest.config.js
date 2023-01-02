/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    preset: 'ts-jest',
    transformIgnorePatterns: [],
    transform: {
        '^.+\\.(js)?$': './transform.js',
        '\\.(tsx)?$': 'babel-jest',
        '/^.*\.(test|spec)\.(ts|tsx)$/': ['ts-jest', {
          babelConfig: true,
          tsconfig: "./tsconfig.jest.json",
        }],
    },
    testEnvironment: 'node',
    moduleNameMapper: { '\\.(css|sass)$': 'identity-obj-proxy' },
}
