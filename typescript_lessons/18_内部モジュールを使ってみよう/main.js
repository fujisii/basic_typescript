/**
 * #18 内部モジュールを使ってみよう
 * - コードを部品化して分かりやすく整理する、変数名とかクラス名の衝突を避けたりするとかで使える方法
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 18_内部モジュールを使ってみよう/
 * $ tsc main.ts
 * $ node main.js
 */
/**
 * 1. モジュールの作成
 * - 変数だけでなく、関数、クラスも作ることができる
 * - モジュールは入れ子にすることも可能
 */
var UserModule181;
(function (UserModule181) {
    // モジュールのデータを使う場合はexportキーワードをつけること
    // こうすることによって外部に対してこちらのデータを公開する、という意味になる
    UserModule181.name = "taguchi";
    var AddressModule181;
    (function (AddressModule181) {
        AddressModule181.zip = "111-1111";
    })(AddressModule181 = UserModule181.AddressModule181 || (UserModule181.AddressModule181 = {}));
})(UserModule181 || (UserModule181 = {}));
// モジュール名に「.」をつけて、モジュールのデータにアクセスできる
console.log(UserModule181.name);
// 入れ子になっているモジュールの場合は、「.」でつなげていけばOK
console.log(UserModule181.AddressModule181.zip);
// モジュール名は別名をつけることが可能（長いモジュール名を短い名前にすることができる）
var addr181 = UserModule181.AddressModule181;
console.log(addr181.zip);
