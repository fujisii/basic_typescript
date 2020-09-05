/**
 * #11 静的メンバを使ってみよう
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 11_静的メンバを使ってみよう/
 * $ tsc main.ts
 * $ node main.js
 */
/**
 * 1. 静的メンバ・静的メソッド
 * - 変数とかメソッドをまとめて、そのクラスのメンバと呼ぶ
 * - 静的メンバの宣言はstaticキーワードを使う
 */
var User121 = /** @class */ (function () {
    function User121(name) {
        this.name = name;
        User121.count++; // 静的メンバにアクセスするためには、クラス名をつける必要がある
    }
    User121.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User121.showDescription = function () {
        console.log("this class is about users");
    };
    User121.count = 0; // 静的メンバ
    return User121;
}());
var tom121 = new User121("Tom");
var bob121 = new User121("Bob");
console.log(User121.count); // 静的メンバの呼び出し
User121.showDescription(); // 静的メソッドの呼び出し
