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
class User121 {
    name: string;
    constructor(name: string) {
        this.name = name;
        User121.count++;    // 静的メンバにアクセスするためには、クラス名をつける必要がある
    }
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }

    static count: number = 0;   // 静的メンバ
    static showDescription(): void {    // 静的メソッド
        console.log("this class is about users");
    }
}

var tom121 = new User121("Tom");
var bob121 = new User121("Bob");
console.log(User121.count); // 静的メンバの呼び出し
User121.showDescription();  // 静的メソッドの呼び出し
