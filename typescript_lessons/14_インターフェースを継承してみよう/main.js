/**
 * #14 インターフェースを継承してみよう
 * - クラスは1つのクラスからしか継承できない
 * - インターフェイスは複数のインターフェイスから継承できる
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 14_インターフェースを継承してみよう/
 * $ tsc main.ts
 * $ node main.js
 */
function getTotal141(result) {
    return result.a + result.b + result.final;
}
var result141 = {
    a: 32,
    b: 58,
    final: 82
};
console.log(getTotal141(result141));
function getTotal142(result) {
    if (result.final) {
        return result.a + result.b + result.final;
    }
    else {
        return result.a + result.b;
    }
}
var result142 = {
    a: 32,
    b: 58
};
console.log(getTotal142(result142));
