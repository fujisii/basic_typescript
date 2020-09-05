/**
 * #10 getterやsetterを使ってみよう
 * - getterとsetterなどの機能を使うためにはJavaScriptの新しめの機能を使わないといけない
 * - コンパイル時に特使なオプションをつけてあげる必要がある（-t ES5）
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 10_getterやsetterを使ってみよう/
 * $ tsc main.ts -t ES5
 * $ node main.js
 */

class User101 {
    // private変数は分かりやすいように先頭に「_」を付けたりすることがよくある
    constructor(private _name: string) {
    }

    sayHi(): void {
        console.log("hi! i am " + this._name);
    }

    // getter
    get name() {
        return this._name;
    }

    // setter
    set name(newValue: string) {
        this._name = newValue;
    }
}
var tom101 = new User101("Tom");
console.log(tom101.name);   // getterを介して値を取得する
tom101.name = "TOM";        // setterを介して値を設定する
console.log(tom101.name);
tom101.sayHi();
