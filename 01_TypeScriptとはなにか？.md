# 概要

- マイクロソフトが開発しているオープンソースのプログラミング言語
- JavaScriptをベースに構文を拡張したものがTypeScript
- JavaScriptが苦手である大規模なアプリケーション開発にも使えるようになっている
- 実際のプロジェクトで使う場合にはTypeScriptを書いて、専用のコンパイラでJavaScriptに変換してから使うことで互換性を保つ仕組みになっている
- 言語の特徴
    - 次世代のJavaScriptの使用を積極的に入れている
    - 静的な型付けやクラスベースのオブジェクト指向などを実現している

# 公式サイト

- https://www.typescriptlang.org/
- "Try in your browser"というリンクでPlaygroundというものが開ける
    - TypeScriptを左側に書くと、それがどうJavaScriptに変換されているかを右側で見ることができる
    - 記述したコードを実行できる

# インストール方法

- Vagrant環境にTypeScriptをインストールする

## 1. Vagrant環境を構築する

```
$ vagrant init ubuntu/bionic64
$ vagrant up
$ vagrant ssh
```

## 2. Ubuntuにnode.jsとnpmをインストールする

```
$ sudo apt update
$ sudo apt install -y nodejs npm
$ node -v
v8.10.0
$ npm -v
3.5.2
```

## 3. TypeScriptをインストールする

```
$ sudo npm install -g typescript
$ npm ls -g
/usr/local/lib
└── typescript@3.9.7
```

## 4. 作業用ディレクトリを作成する

```
$ cd /vagrant
$ mkdir typescript_lessons
```
