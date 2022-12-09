
[中文](./README.zh.md)
## Introduction

Provide a simple project template, because it is a sub-project of monorepo, such as eslint, prettier and other engineering files are provided by the root project, this template mainly provides the following functions:

## Build
Provides commands to package ejs/cjs (provided by @mx-design/cli, this package also provides umd packaging)

## test

Use the vitest test file, and vitest.config.ts has been configured in the root directory

## Automatic release

```
npm run release
```
Realize the functions of upgrading the version number, commit, packaging, publishing, tag, and generating changelog