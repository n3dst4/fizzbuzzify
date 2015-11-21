# fizzbuzzify

![Travis status](https://travis-ci.org/n3dst4/fizzbuzzify.svg)

Turn numbers into their corresponding fizzbuzz result

## Usage

Install:
```sh
npm install fizzbuzzify --save
```

Use:
```js
// es6 style import:
import fizzbuzzify from "fizzbuzzify"

// or cjs/node/browserify-style:
var fizzbuzzify = require("fizzbuzzify")

// then:
console.log(fizzbuzzify(15)) // "FizzBuzz"
```

## Hacking and contribution

The code is written in es6 and transpiled into the `__build` folder as es5 by
babel. This is done automatically before publishing to npm by the `prepublish`
script config.

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

This package is part of a larger project that's half joke and half genuine
demonstration of "cool things in software development". Go see
[@n3dst4/fizzbuzz-cli](https://github.com/n3dst4/fizzbuzz-cli) for the full
write-up.
