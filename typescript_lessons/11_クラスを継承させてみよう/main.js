/**
 * #11 クラスを継承させてみよう
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 11_クラスを継承させてみよう/
 * $ tsc main.ts
 * $ node main.js
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 1. 親クラス
 */
var User111 = /** @class */ (function () {
    function User111(_name) {
        this._name = _name;
    }
    User111.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    return User111;
}());
/**
 * 2. 子クラス
 * - クラスの継承にはextendsキーワードをつける
 */
var AdminUser111 = /** @class */ (function (_super) {
    __extends(AdminUser111, _super);
    function AdminUser111(_name, _age) {
        var _this = 
        /**
         * superキーワード
         * - 親クラスのコンストラクタを呼ぶ際に使う
         * - 子クラスから親クラスの「public」なメソッドにアクセスすることができる
         */
        _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    /**
     * メソッドのオーバーライド
     * - 親クラスと同じ名前のメソッドを作ることを、メソッドのオーバーライドと呼ぶ
     */
    AdminUser111.prototype.sayHi = function () {
        console.log("my age: " + this._age);
        _super.prototype.sayHi.call(this); // 親クラスのメソッドを呼ぶ際は「super.{メソッド}」とする
    };
    return AdminUser111;
}(User111));
var bob111 = new AdminUser111("Bob", 23);
bob111.sayHi();
/**
 * protectedの使い方
 * - privateは別クラスから呼び出すことができない
 * - protectedにすることで、自分のクラス及び継承するクラス内でのみ使えるようになる
 */
var User112 = /** @class */ (function () {
    function User112(_name) {
        this._name = _name;
    }
    User112.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    return User112;
}());
var AdminUser112 = /** @class */ (function (_super) {
    __extends(AdminUser112, _super);
    function AdminUser112(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUser112.prototype.sayHi = function () {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        _super.prototype.sayHi.call(this);
    };
    return AdminUser112;
}(User112));
var bob112 = new AdminUser112("Bob", 23);
bob112.sayHi();
