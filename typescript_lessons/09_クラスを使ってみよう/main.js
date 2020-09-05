/**
 * #09 クラスを使ってみよう
 * - TypeScriptではクラスベースのオブジェクト指向プログラミングができる
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 09_クラスを使ってみよう
 * $ tsc main.ts
 * $ node main.js
 */
/**
 * 1. クラスの作成
 * - クラス名の1文字目は大文字にする
 * - クラスには変数とメソッドをまとめておける
 */
var User1 = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function User1(name) {
        this.name = name;
    }
    /**
     * 関数
     * - メソッドはfunctionと同じように書けばいい
     * - functionキーワードがいらない点に注意
     * - 変数やメソッドにはアクセス修飾子をつけることができる
     *  - public, protected, privateがある
     *  - デフォルトはpublic（省略した場合はpublicになる）
     *  - 記述例：public name: string;
     */
    User1.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    return User1;
}());
/**
 * 2. クラスのインスタンス化
 * - インスタンス化するときはnewキーワードを使う
 */
var tom1 = new User1("Tom");
console.log(tom1.name);
tom1.sayHi();
/**
 * 3. コンストラクタの短い書き方
 * - コンストラクタに渡ってきた引数を代入するという処理はよく行うので、実は短い書き方が用意されている
 */
var User2 = /** @class */ (function () {
    // コンストラクタの引数にアクセス修飾子を付けてあげれば、短い書き方ができる
    function User2(name) {
        this.name = name;
    }
    User2.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    return User2;
}());
var tom2 = new User2("Tom");
console.log(tom2.name);
tom2.sayHi();
