# jest-to-vitest


A collection of codemods for jest-to-vitest.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx jest-to-vitest <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add jest-to-vitest
jest-to-vitest <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [add-vitest-imports](transforms/add-vitest-imports/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`