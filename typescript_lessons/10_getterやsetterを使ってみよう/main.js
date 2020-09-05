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
var User101 = /** @class */ (function () {
    // private変数は分かりやすいように先頭に「_」を付けたりすることがよくある
    function User101(_name) {
        this._name = _name;
    }
    User101.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    Object.defineProperty(User101.prototype, "name", {
        // getter
        get: function () {
            return this._name;
        },
        // setter
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return User101;
}());
var tom101 = new User101("Tom");
console.log(tom101.name); // getterを介して値を取得する
tom101.name = "TOM"; // setterを介して値を設定する
console.log(tom101.name);
tom101.sayHi();
