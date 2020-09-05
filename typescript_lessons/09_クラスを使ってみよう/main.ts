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
class User1 {
    /**
     * 変数
     * - クラス内の変数にアクセスするにはthisを付けてあげればOK
     */
    name: string;

    /**
     * コンストラクタ
     */
    constructor(name: string) {
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
    sayHi(): void {
        console.log("hi! i am " + this.name)
    }
}

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
class User2 {
    // コンストラクタの引数にアクセス修飾子を付けてあげれば、短い書き方ができる
    constructor(public name: string) {
    }

    sayHi(): void {
        console.log("hi! i am " + this.name)
    }
}
var tom2 = new User2("Tom");
console.log(tom2.name);
tom2.sayHi();
