# TA道具箱 | TA Toolbox

**Notice:** Sorry, This repository only available in Japanese.

様々な便利ツールを搭載したWebアプリです．

## 主な機能一覧 | Tools
- デ漢字 (入力した漢字を大きく表示，書き順が分からない時などに使う)
- カウンター (今後実装予定)
- URL一括修正ツール (今後実装予定)
- Mastodon/Misskey 投稿埋め込みウィジェット (今後実装予定)

## 公開先 URL (公式) | Official Build URL
https://toolbox.t-asa2000.net/

`main` ブランチの最新コミットでビルドし公開しています．ビルドしたもののコードは `gh-pages` ブランチで参照できます．

## GitHub Pages 公開時の注意事項 | Notes on publishing GitHub Pages
本リポジトリは `toolbox.t-asa2000.net` にてGitHub Pages経由で公開することを想定しています．ご自身で公開される場合には，以下の点に注意してください．

1. このリポジトリをフォークし，`CNAME` 及び `public/CNAME` ファイルの内容を，実際に公開するドメインに変更してください．
2. 公開する際のルートURLが `https://<Domain Name>/***/` のようになる場合，`vue.config.js` の `publicPath` を変更してください．

## [更新履歴 | Relase notes](releases.md)

## コマンド一覧 | CLI Commands

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deploys to GitHub Pages (`gh-pages` branch)
```
npm run deploy
```

### Lints and fixes files
```
npm run lint
```

## Vue CLI Config のカスタマイズ | Customize Vue CLI configuration
[Vue CLI リファレンス](https://cli.vuejs.org/config/)を参照してください．See [Configuration Reference](https://cli.vuejs.org/config/).
