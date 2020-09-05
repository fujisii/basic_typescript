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

/**
 * 1. インターフェイスの継承
 */
interface SpringResult141 {
    a: number;
}

interface FallResult141 {
    b: number;
}

// 複数のインターフェイスを継承する場合はカンマ区切りにする
interface FinalResult141 extends SpringResult141, FallResult141 {
    final: number;
}

function getTotal141(result: FinalResult141) {
    return result.a + result.b + result.final;
}
var result141 = {
    a: 32,
    b: 58,
    final: 82
};

console.log(getTotal141(result141));

/**
 * 2. インターフェイスのプロパティをオプションにする
 * - インターフェイスのプロパティは関数の引数と同様にオプションにすることも可能
 * - その場合はプロパティ名に「?」を付けてあげればいい
 */
interface FinalResult142 extends SpringResult141, FallResult141 {
    final?: number;
}

function getTotal142(result: FinalResult142) {
    if (result.final) {
        return result.a + result.b + result.final;
    } else {
        return result.a + result.b;
    }
}
var result142 = {
    a: 32,
    b: 58
};

console.log(getTotal142(result142));