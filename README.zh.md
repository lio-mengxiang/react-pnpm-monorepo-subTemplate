# react-monorepo-project-template

[English](./README.md)
## 简介

提供简约的项目模板，因为是monorepo的子项目，比如eslint、prettier等工程化文件都是由根项目提供，本模板主要提供了如下功能:

## 打包
提供打包ejs/cjs/的命令（由@mx-design/cli提供功能，此包还提供了umd打包）

## 测试

使用vitest测试文件（比jest快很多，api非常相似），而且，在根目录已经配置好了vitest.config.ts

## 自动化发包

```
npm run release
```
实现升级版本号、commit、打包、发布、tag、生成changelog一体化的功能