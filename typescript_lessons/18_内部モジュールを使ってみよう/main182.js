/**
 * 2. 別ファイルからモジュールを読み込む
 * - 「/// <reference path = "./user182.ts" />」と書くことで呼び出せる
 * - 上記の記述をすることでmain182.tsをコンパイルするときにuser182.tsもコンパイルしてくれる
 * - 2つのファイルを1つに合わせたい場合は、コンパイルするときに「out」オプションをつける
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 18_内部モジュールを使ってみよう/
 * $ tsc main182.ts --out all182.js
 * $ node all182.js
 */
/// <reference path = "./user182.ts" />
