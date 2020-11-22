# Const enum performance

Assessing the performance of TypeScript const enum.

## Run

```
yarn install
yarn run build
yarn run run
```

Tests Chrome, Firefox, and Node.js.

Results:

```txt
Chrome Headless 80.0.3987.149 (Linux x86_64)
  enum test #1: constEnum at 36582 ops/sec (1.37x faster than enum)
  enum test #2: constEnum at 35965 ops/sec (1.34x faster than enum)
Firefox 83.0 (Ubuntu 0.0.0)
  enum test #1: enum at 31397 ops/sec (2.76x faster than constEnum)
  enum test #2: enum at 33399 ops/sec (2.95x faster than constEnum)
WebKit 537.36 (linux 0.0.0)
  enum test #1: constEnum at 36139 ops/sec (1.20x faster than enum)
  enum test #2: constEnum at 35046 ops/sec (1.18x faster than enum)
```
