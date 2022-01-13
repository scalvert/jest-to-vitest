'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'add-vitest-imports',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
