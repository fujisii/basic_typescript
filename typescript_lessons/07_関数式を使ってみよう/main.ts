/**
 * #07 関数式を使ってみよう
 * - 式のように関数を書く方法（アロー関数式）
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 07_関数式を使ってみよう
 * $ tsc main.ts
 * $ node main.js
 */

/**
 * 1. 通常の関数
 * @param {*} a 値1
 * @param {*} b 値2
 */
var add1 = function(a, b) {
    return a + b;
}
console.log(add1(5, 3));

/**
 * 2. 型付けありの関数
 * @param {number} a 値1
 * @param {number} b 値2
 */
var add2 = function(a: number, b:number): number {
    return a + b;
}
console.log(add2(5, 3));

/**
 * 3. アロー関数式
 * - functionキーワードの代わりにアロー記号（=>）を使用する
 * @param {number} a 値1
 * @param {number} b 値2
 */
var add3 = (a: number, b:number): number => {
    return a + b;
}
console.log(add2(5, 3));

/**
 * 4. アロー関数式（省略形）
 * - このくらい処理や返り値が簡単な場合は1行で書くことができる
 * @param {number} a 値1
 * @param {number} b 値2
 */
var add3 = (a: number, b:number): number => a + b;
console.log(add2(5, 3));
