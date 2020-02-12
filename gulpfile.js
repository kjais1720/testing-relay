const presets = require('@saastack/preset-react/gulpfile');
const { task, series } = require('gulp')

const babelConfig = require('./babel.config');
const tsconfig = require('./tsconfig');
const path = require('path');

task('release', presets.release(tsconfig));

task('clean', () => presets.clean(tsconfig));

task('copy:package', () => presets.copyPackage(tsconfig, path.resolve('./package.json')));

task('dts', () => presets.dts(tsconfig));

task('build', series('clean', 'copy:package', 'dts', () => presets.build(tsconfig, babelConfig)));
