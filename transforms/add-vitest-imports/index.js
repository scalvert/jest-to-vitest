"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var codemod_cli_1 = __importDefault(require("codemod-cli"));
var jscodeshift_add_imports_1 = __importDefault(require("jscodeshift-add-imports"));
var getParser = codemod_cli_1.default.jscodeshift.getParser;
function transformer(file, api) {
    var j = getParser(api);
    var root = j(file.source);
    var apis = [];
    for (var _i = 0, _a = ['beforeEach', 'afterEach', 'test', 'it', 'expect', 'describe']; _i < _a.length; _i++) {
        var name = _a[_i];
        var calls = root.find(j.CallExpression, { callee: { name: name } });
        if (calls.length > 0) {
            apis.push(j.importSpecifier(j.identifier(name), j.identifier(name)));
        }
    }
    if (apis.length) {
        (0, jscodeshift_add_imports_1.default)(root, j.importDeclaration(apis, j.stringLiteral('vitest')));
    }
    return root.toSource({
        quote: 'single',
        wrapColumn: 100,
        trailingComma: true,
    });
}
exports.default = transformer;
module.exports.type = 'js';
