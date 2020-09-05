/**
 * #13 インターフェースを使ってみよう
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 13_インターフェースを使ってみよう/
 * $ tsc main.ts
 * $ node main.js
 */

/**
 * 1. (例)試験の合計点数
 * - これぐらい単純なオブジェクト（result）だったらこういった型付けをすればいいが、
 *   より複雑なオブジェクトだったら、これらをまとめて何らかの名前にしたほうがいい
 * - その際に使えるのがインターフェイスになる　→　2.で説明する
 * @param {Object} result 試験の結果
 * @return {number} 試験の合計点数
 */
function getTotal131(result: {a: number, b:number}) {
    return result.a + result.b;
}
var result131 = {
    a: 32,
    b: 58
};
console.log(getTotal131(result131));

/**
 * 2. インターフェイスを使用した場合
 */
interface Result132 {
    a: number;
    b: number;
}
function getTotal132(result: Result132) {
    return result.a + result.b;
}
var result132 = {
    a: 32,
    b: 58
};
console.log(getTotal132(result132));

/**
 * 3. 構造的部分型
 * - TypeScriptでは構造的部分型という手法を採用している
 * - 構造的部分型：ざっくりいうと、ある型のプロパティを持ってさえいればその型であるとみなす、という方法
 */
interface Result133 {
    a: number;
    b: number;
}
function getTotal133(result: Result133) {
    return result.a + result.b;
}

// Result133型はaとbをnumberで持ってさえばいい
// 以下のようにaとb以外のプロパティを持っていたとしても、Result133型とみなしてくれる
var result133 = {
    a: 32,
    b: 58,
    c: "hello"
};
console.log(getTotal133(result133));
