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
var MyData171 = /** @class */ (function () {
    function MyData171(value) {
        this.value = value;
    }
    MyData171.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData171;
}());
var v1_171 = new MyData171("hello");
console.log(v1_171.getArray());
var v2_171 = new MyData171(234);
console.log(v2_171.getArray());
var MyData172 = /** @class */ (function () {
    function MyData172(value) {
        this.value = value;
    }
    MyData172.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData172;
}());
var v3_172 = new MyData172({ a: 32, b: 16 });
console.log(v3_172.getArray());
var MyData173 = /** @class */ (function () {
    function MyData173(value) {
        this.value = value;
    }
    MyData173.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData173;
}());
var v4_173 = new MyData173({ a: 32, b: 16, c: "hello" });
console.log(v4_173.getArray());
