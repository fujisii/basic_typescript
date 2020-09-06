/**
 * #19 外部モジュールを使ってみよう（②AMDと呼ばれるコンパイル方式）
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 19_外部モジュールを使ってみよう/
 * $ tsc main192.ts -m amd
 */

import User192 = require("./user_amd");
console.log(User192.name);