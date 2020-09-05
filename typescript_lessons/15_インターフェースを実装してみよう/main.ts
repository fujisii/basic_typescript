/**
 * #15 インターフェースを実装してみよう
 * - インターフェイスはクラスと組み合わせると
 *   「インターフェイスの中のプロパティを必ずクラスのほうで実装してください」という意味になる
 * - インターフェイスはクラスの継承と違って、複数のインターフェイスの実装を約束させることも可能
 *  - その場合はimplementsのあとに、インターフェイスを複数「,」区切りでつなげていけばいい
 *
 * @example
 * $ cd /vagrant/typescript_lessons/
 * $ cd 15_インターフェースを実装してみよう/
 * $ tsc main.ts
 * $ node main.js
 */

interface GameUser151 {
    score: number;
    showScore(): void;
}

class User151 implements GameUser151 {
    name: string;
    score: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("hi! i am" + this.name);
    }
    showScore(): void {
        console.log("score" + this.score);
    }
}