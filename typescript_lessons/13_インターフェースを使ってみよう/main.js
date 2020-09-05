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
function getTotal131(result) {
    return result.a + result.b;
}
var result131 = {
    a: 32,
    b: 58
};
console.log(getTotal131(result131));
function getTotal132(result) {
    return result.a + result.b;
}
var result132 = {
    a: 32,
    b: 58
};
console.log(getTotal132(result132));
function getTotal133(result) {
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
