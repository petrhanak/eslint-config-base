[![Actions Status](https://github.com/code-quality-resources/eslint-config-base/workflows/CI/badge.svg)](https://github.com/code-quality-resources/eslint-config-base/actions?query=workflow%3A%22CI%22)

# Base Eslint Config

[**eslint**](https://github.com/eslint/eslint) shareable config to help you identify and report on patterns found in your code.

## Plugins

This [configuration](https://github.com/code-quality-resources/eslint-config-base/blob/master/index.js) uses the following plugins:

- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-absolute-import`](https://github.com/mcclowes/eslint-plugin-absolute-import)

## Install

```bash
$ yarn add eslint eslint-plugin-import @code-quality/eslint-config-base -D
```

## Usage

The shareable config can be configured in the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    '@code-quality/eslint-config-base'
  ],
}
```
