# 概要

1. TypeScriptのファイルを作成する
2. コンパイラでJavaScriptに変換する
3. 実行する

# 作業記録

1. typescript_lessons/02ディレクトリ配下にファイルを作成する
2. 拡張子は慣習的に「ts」にすることが勧められている
3. main.tsというファイルを作成する
4. 処理を記述する

```typescript
class User {

}

console.log("hello world");
```

5. 注意点
    - TypeScript は基本的に JavaScript の構文である
    - TypeScript だけで書ける構文と、JavaScript そのものを問題なく共存させられる点に注意
6. 保存してコンパイラ（Type Script Compiler）にかけていく

```shell
$ tsc main.ts
```

7. 問題なく終了すれば、ディレクトリ内に TypeScript のファイルとは別に main.js というファイルが作られる

```shell
$ ls
main.js  main.ts
```

8. main.js は JavaScript のファイルなので、どのようになっているか確認してみる

```javascript
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
console.log("hello world");
```

9. Node.js を使って JavaScript のファイルを実行してみる

```shell
$ node main.js
hello world
```
