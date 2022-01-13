# add-vitest-imports


## Usage

```
npx jest-to-vitest add-vitest-imports path/of/files/ or/some**/*glob.js

# or

yarn global add jest-to-vitest
jest-to-vitest add-vitest-imports path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js add-vitest-imports path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [multiple-imports](#multiple-imports)
* [multiple-jest-apis](#multiple-jest-apis)
* [multiple-nested-jest-apis](#multiple-nested-jest-apis)
* [no-apis](#no-apis)
* [root-test-only](#root-test-only)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="multiple-imports">**multiple-imports**</a>

**Input** (<small>[multiple-imports.input.js](transforms/add-vitest-imports/__testfixtures__/multiple-imports.input.js)</small>):
```js
import { isCity } from './cities';

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

```

**Output** (<small>[multiple-imports.output.js](transforms/add-vitest-imports/__testfixtures__/multiple-imports.output.js)</small>):
```js
import { isCity } from './cities';

import { test, expect } from 'vitest';

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

```
---
<a id="multiple-jest-apis">**multiple-jest-apis**</a>

**Input** (<small>[multiple-jest-apis.input.js](transforms/add-vitest-imports/__testfixtures__/multiple-jest-apis.input.js)</small>):
```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

```

**Output** (<small>[multiple-jest-apis.output.js](transforms/add-vitest-imports/__testfixtures__/multiple-jest-apis.output.js)</small>):
```js
import { beforeEach, afterEach, test, expect } from 'vitest';
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

```
---
<a id="multiple-nested-jest-apis">**multiple-nested-jest-apis**</a>

**Input** (<small>[multiple-nested-jest-apis.input.js](transforms/add-vitest-imports/__testfixtures__/multiple-nested-jest-apis.input.js)</small>):
```js
describe('foo', () => {
  beforeEach(() => {
    initializeCityDatabase();
  });

  afterEach(() => {
    disposeCityDatabase();
  });

  it('can describe a test', () => {
    expect(isCity('San Francisco')).toBeTruthy();
  });
});

```

**Output** (<small>[multiple-nested-jest-apis.output.js](transforms/add-vitest-imports/__testfixtures__/multiple-nested-jest-apis.output.js)</small>):
```js
import { beforeEach, afterEach, it, expect, describe } from 'vitest';
describe('foo', () => {
  beforeEach(() => {
    initializeCityDatabase();
  });

  afterEach(() => {
    disposeCityDatabase();
  });

  it('can describe a test', () => {
    expect(isCity('San Francisco')).toBeTruthy();
  });
});

```
---
<a id="no-apis">**no-apis**</a>

**Input** (<small>[no-apis.input.js](transforms/add-vitest-imports/__testfixtures__/no-apis.input.js)</small>):
```js
function noTests() {
  console.log('nothing');
}

```

**Output** (<small>[no-apis.output.js](transforms/add-vitest-imports/__testfixtures__/no-apis.output.js)</small>):
```js
function noTests() {
  console.log('nothing');
}

```
---
<a id="root-test-only">**root-test-only**</a>

**Input** (<small>[root-test-only.input.js](transforms/add-vitest-imports/__testfixtures__/root-test-only.input.js)</small>):
```js
test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

```

**Output** (<small>[root-test-only.output.js](transforms/add-vitest-imports/__testfixtures__/root-test-only.output.js)</small>):
```js
import { test, expect } from 'vitest';
test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

```
<!--FIXTURES_CONTENT_END-->