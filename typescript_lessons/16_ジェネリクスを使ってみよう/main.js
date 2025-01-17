/**
 * #16 ジェネリクスを使ってみよう
 * - Genericsとは抽象化されたデータ型のこと
 * - Genericsはちょっと難しい概念だが、上手く使えば安全かつ効率的な設計ができるようになる
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 16_ジェネリクスを使ってみよう/
 * $ tsc main.ts
 * $ node main.js
 */
function getArray161(value) {
    // 1. 型を指定する部分はとりあえず「T」と書く
    // 2. このTは別に何でもいいが、慣習的にTypeのTを使うことが多い
    // 3. そうしたあと、関数名の右側に「<T>」を書いてあげると、
    //    実行時に何の型に対して処理を行うかを指定できる
    return [value, value, value];
}
console.log(getArray161(3));
console.log(getArray161("hello"));
