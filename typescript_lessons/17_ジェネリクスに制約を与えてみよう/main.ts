/**
 * #17 ジェネリクスに制約を与えてみよう
 * - Genericsは型を指定するところだったら関数だけではなくてインターフェースやクラスでも使える
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 17_ジェネリクスに制約を与えてみよう/
 * $ tsc main.ts
 * $ node main.js
 */

/**
 * 1. Genericsをクラスで使用する
 */
class MyData171<T> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}
var v1_171 = new MyData171<string>("hello");
console.log(v1_171.getArray());
var v2_171 = new MyData171<number>(234);
console.log(v2_171.getArray());

/**
 * 2. Genericsに制約を与える方法①
 * - 制約をつけると「ここにくる型は何でもいいけど、プロパティを持つ型だけにしてね」ということができる
 *  - どうすればいいかというと「interface」を使ってあげればOK
 */
interface Result172 {
    a: number;
    b: number;
}
class MyData172<T extends Result172> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}
var v3_172 = new MyData172<Result172>({a: 32, b: 16});
console.log(v3_172.getArray());

/**
 * 3. Genericsに制約を与える方法②
 * - 型はResult173型に限定されるというわけではなくて、aとbを持っていればそのまま実行できる
 */
interface Result173 {
    a: number;
    b: number;
}
interface FinalResult173 {
    a: number;
    b: number;
    c: string;
}
class MyData173<T extends Result173> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}
var v4_173 = new MyData173<FinalResult173>({a: 32, b: 16, c: "hello"});
console.log(v4_173.getArray());
