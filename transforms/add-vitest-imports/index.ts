import { FileInfo, API } from 'jscodeshift';
import codemodCli from 'codemod-cli';
import addImports from 'jscodeshift-add-imports';

const { getParser } = codemodCli.jscodeshift;

export default function transformer(file: FileInfo, api: API) {
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
}

module.exports.type = 'js';
