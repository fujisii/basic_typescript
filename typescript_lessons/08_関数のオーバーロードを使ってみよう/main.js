/**
 * #08 関数のオーバーロードを使ってみよう
 * - TypeScriptでは引数や戻り値が異なる、同じ名前の関数を宣言することができる（関数のオーバーロード）
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 08_関数のオーバーロードを使ってみよう
 * $ tsc main.ts
 * $ node main.js
 */
/**
 * 2. 実際の処理はany型で書いておいて処理の中で振り分けをしていく
 * - 宣言されているシグネチャ以外の組み合わせで実行した場合はコンパイルエラーになる
 * @param {any} a 値1
 * @param {any} b 値2
 * @return {any}
 */
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
console.log(add(5, 3)); // 8
console.log(add("Hello", "World")); // Hello World
