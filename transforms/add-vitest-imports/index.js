const { getParser } = require('codemod-cli').jscodeshift;
const addImports = require('jscodeshift-add-imports');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const root = j(file.source);
  const apis = [];

  for (let name of ['beforeEach', 'afterEach', 'test', 'it', 'expect', 'describe']) {
    let calls = root.find(j.CallExpression, { callee: { name } });

    if (calls.length > 0) {
      apis.push(j.importSpecifier(j.identifier(name), j.identifier(name)));
    }
  }

  if (apis.length) {
    addImports(root, j.importDeclaration(apis, j.stringLiteral('vitest')));
  }

  return root.toSource({
    quote: 'single',
    wrapColumn: 100,
    trailingComma: true,
  });
};

module.exports.type = 'js';
