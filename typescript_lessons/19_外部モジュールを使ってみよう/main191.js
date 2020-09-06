"use strict";
/**
 * #19 外部モジュールを使ってみよう
 * - NodeJSやRequireJSというライブラリを使ったプロジェクトにおいて使われる
 * - 外部モジュールは内部モジュールと違って、1ファイルに1モジュール入れることになっているので、moduleの外枠はいらない
 * - 今回は2つのコンパイル方式を見ていく
 *  - NodeJS : CommonJS形式のコンパイル
 *  - RequireJS : AMDと呼ばれるコンパイル方式
 *
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 19_外部モジュールを使ってみよう/
 * $ tsc main191.ts -m commonjs
 * $ node main191.js
 */
exports.__esModule = true;
/**
 * 1. 外部モジュールを呼び出すにはimportキーワードを使う
 * 2. そのあとに何らかの変数を定義する
 * 3. require("")という命令を使う
 *  - こちらでファイル名を指定する場合、拡張子がいらない点に注意すること
 */
var User191 = require("./user_commonjs");
console.log(User191.name);
