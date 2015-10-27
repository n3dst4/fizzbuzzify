@n3dst4/fizzbuzzify
===================

Turn numbers into their corresponding fizzbuzz result

## Usage

Install:
```sh
npm install fizzbuzzify
```

Use:
```js
// es6 style import:
import fizzbuzzify from "@n3dst4/fizzbuzzify"

// or cjs/node/browserify-style:
var fizzbuzzify = require("fizzbuzzify")

// then:
console.log(fizzbuzzify(15)) // "FizzBuzz"
```

## Hacking and contribution

The code is written in es6 and transpiled into es5 by babel. This is done
automatically before publishing to npm by the `prepublish` script config.

If you're working on this package and you want to generate the transpiled
output, run:

```sh
npm run prepublish
```

Alternatively to keep babel running in watch mode while you work, run

```sh
npm run watch
```

## Compatibility

This code should work fine in node and browsers.


## Running tests

As usual, you can run `npm test` to run the tests. This will fire up **Karma**
and attempt to start a Firefox instance.

When running in a Continuous Integration environment, the Karma configuration
will run once and exit. Otherwise it will start up in "watch" mode.

Alternatively you can run `npm run mocha` to run the tests directly in Mocha
(not using Karma) or `npm run mocha-watch` to keep mocha running the background
and re-running the tests when the code changes.


## For the love of gosh, why?

This package is an exercise in cramming as many best-practices into a codebase
as possible.