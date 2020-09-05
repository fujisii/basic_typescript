/**
 * #08 関数のオーバーロードを使ってみよう
 * - TypeScriptでは引数や戻り値が異なる、同じ名前の関数を宣言することができる（関数のオーバーロード）
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 07_関数のオーバーロードを使ってみよう
 * $ tsc main.ts
 * $ node main.js
 */

/**
 * 1. 関数のオーバーロード、シグネチャ
 * - TypeScriptでは引数や戻り値が異なる、同じ名前の関数を宣言することができる（関数のオーバーロード）
 * - 関数やメソッドの名前、引数の数やデータ型、返り値の型などの組み合わせのことをシグネチャという
 * @param {number|string} a 値1
 * @param {number|string} b 値2
 * @return {number|string}
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;

/**
 * 2. 実際の処理はany型で書いておいて処理の中で振り分けをしていく
 * - 宣言されているシグネチャ以外の組み合わせで実行した場合はコンパイルエラーになる
 * @param {any} a 値1
 * @param {any} b 値2
 * @return {any}
 */
function add(a:any, b:any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add("Hello", "World")); // Hello World
