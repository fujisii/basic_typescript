/**
 * #15 インターフェースを実装してみよう
 * - インターフェイスはクラスと組み合わせると
 *   「インターフェイスの中のプロパティを必ずクラスのほうで実装してください」という意味になる
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 15_インターフェースを実装してみよう/
 * $ tsc main.ts
 * $ node main.js
 */
var User151 = /** @class */ (function () {
    function User151(name) {
        this.score = 0;
        this.name = name;
    }
    User151.prototype.sayHi = function () {
        console.log("hi! i am" + this.name);
    };
    User151.prototype.showScore = function () {
        console.log("score" + this.score);
    };
    return User151;
}());
