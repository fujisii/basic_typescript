/**
 * #11 クラスを継承させてみよう
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 11_クラスを継承させてみよう/
 * $ tsc main.ts
 * $ node main.js
 */

/**
 * 1. 親クラス
 */
class User111 {
    constructor(private _name: string) {
    }
    sayHi(): void {
        console.log("hi! i am " + this._name);
    }
}

/**
 * 2. 子クラス
 * - クラスの継承にはextendsキーワードをつける
 */
class AdminUser111 extends User111 {
    private _age: number;

    constructor(_name: string, _age: number) {
        /**
         * superキーワード
         * - 親クラスのコンストラクタを呼ぶ際に使う
         * - 子クラスから親クラスの「public」なメソッドにアクセスすることができる
         */
        super(_name);   // 親クラスのconstructorを呼び出している
        this._age = _age;
    }

    /**
     * メソッドのオーバーライド
     * - 親クラスと同じ名前のメソッドを作ることを、メソッドのオーバーライドと呼ぶ
     */
    sayHi(): void {
        console.log("my age: " + this._age);
        super.sayHi();  // 親クラスのメソッドを呼ぶ際は「super.{メソッド}」とする
    }
}

var bob111 = new AdminUser111("Bob", 23);
bob111.sayHi();

/**
 * protectedの使い方
 * - privateは別クラスから呼び出すことができない
 * - protectedにすることで、自分のクラス及び継承するクラス内でのみ使えるようになる
 */
class User112 {
    constructor(protected _name: string) {
    }
    sayHi(): void {
        console.log("hi! i am " + this._name);
    }
}

class AdminUser112 extends User112 {
    private _age: number;

    constructor(_name: string, _age: number) {
        super(_name);
        this._age = _age;
    }

    sayHi(): void {
        console.log("my age: " + this._age);
        console.log("my name: " + this._name);
        super.sayHi();
    }
}

var bob112 = new AdminUser112("Bob", 23);
bob112.sayHi();
