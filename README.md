# tape-only

Customise the behaviour of your [tape](https://github.com/substack/tape).only tests.

## Install

```
npm install tape-only --save-dev
```

## Usage

```js
const tape = require('tape');
const tapeOnly = require('tape-only');
const test = tapeOnly(tape, { mode: 'many' });
```

Modes:
- `one`: Runs only one `tape.only` test. This is the default.
- `many`: Runs many `tape.only` tests.
- `ignore`: Runs `tape.only` tests as though they weren't marked only.

Omitting `mode` will fallback to the `TAPE_ONLY` environment variable:

```
TAPE_ONLY=many tape 'tests/**/*.test.js'
```
