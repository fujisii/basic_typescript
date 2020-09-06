var UserModule182;
(function (UserModule182) {
    UserModule182.name = "taguchi";
    var AddressModule182;
    (function (AddressModule182) {
        AddressModule182.zip = "111-1111";
    })(AddressModule182 = UserModule182.AddressModule182 || (UserModule182.AddressModule182 = {}));
})(UserModule182 || (UserModule182 = {}));
/**
 * 2. 別ファイルからモジュールを読み込む
 * - 「/// <reference path = "./user182.ts" />」と書くことで呼び出せる
 * - 上記の記述をすることでmain182.tsをコンパイルするときにuser182.tsもコンパイルしてくれる
 * - 2つのファイルを1つに合わせたい場合は、コンパイルするときに「out」オプションをつける
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 18_内部モジュールを使ってみよう/
 * $ tsc main182.ts --out all182.js
 * $ node all182.js
 */
/// <reference path = "./user182.ts" />
console.log(UserModule182.name);
var addr182 = UserModule182.AddressModule182;
console.log(addr182.zip);
