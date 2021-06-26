/* eslint-disable */
// Import ESBuild
const { buildSync, CommonOptions } = require('esbuild'); // eslint-disable-line
const fs = require('fs-extra'); // eslint-disable-line
const path = require('path'); // eslint-disable-line

/** @type {CommonOptions} */
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: 'dist/',
  target: 'es6',
};

// Files building
buildSync({
  ...defaultSettings,
  entryPoints: ['src/background.ts', 'src/popup.ts'],
});

// Copy static files
const publicPath = path.resolve('./', 'public');
const distPath = path.resolve('./', 'dist');
fs.copy(publicPath, distPath, (err) => {
  if (err) return console.error(err);
  console.log('success!');
});