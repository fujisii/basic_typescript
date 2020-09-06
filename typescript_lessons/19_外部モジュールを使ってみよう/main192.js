/**
 * #19 外部モジュールを使ってみよう（②AMDと呼ばれるコンパイル方式）
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 19_外部モジュールを使ってみよう/
 * $ tsc main192.ts -m amd
 * $ node main192.js
 */
define(["require", "exports", "./user_amd"], function (require, exports, User192) {
    "use strict";
    exports.__esModule = true;
    console.log(User192.name);
});
