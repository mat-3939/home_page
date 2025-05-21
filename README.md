# Toy Box - パーソナルウェブサイト

「Toy Box」は、Web開発の学習と実験のために制作した<br>
シンプルで使いやすいパーソナルウェブサイトです。  
モダンなデザインと直感的なユーザーインターフェースを備え、ダークモードにも対応しています。<br>
コンタクトページも完備したシンプルな構成になっています。

---

## 使用技術

- フロントエンド：React / Next.js / TypeScript
- スタイリング：Tailwind CSS 
- テーマ管理：next-themes
- その他：GitHub（バージョン管理）

---

## フォルダ構造

```
src/
└── app/
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.js
    │   │   └── Footer.js
    │   └── ui/
    ├── lib/
    │   ├── hooks/
    │   │   └── useThemeSwitch.ts
    │   └── theme-provider.tsx
    ├── styles/
    │   ├── common/
    │   ├── icon/
    │   ├── Home.module.css
    │   └── globals.css
    ├── contact/
    │   └── page.js
    ├── layout.tsx
    └── page.tsx
```

---

## 機能一覧

| 機能カテゴリ | 機能名 | 概要 |
| ----------- | ------ | ---- |
| レイアウト | Navbar | サイトナビゲーション、ダークモード切替ボタンを提供 |
| レイアウト | Footer | サイト情報、リンク、著作権表示を提供 |
| テーマ | ダークモード | ユーザーが明るいテーマと暗いテーマを切り替え可能 |
| ページ | ホーム | ウェブサイトのメイン情報を表示 |
| ページ | コンタクト | 問い合わせフォームを提供 |

---

## セットアップと実行方法

1. リポジトリをクローン
```
git clone [リポジトリURL]
```

2. 依存関係をインストール
```
npm install
```

3. 開発サーバーを起動
```
npm run dev
```

4. ブラウザでアクセス
```
http://localhost:3000
```

---

## 参考資料

- [Next.js ドキュメント             ](https://nextjs.org/docs)
- [Tailwind CSS ドキュメント        ](https://tailwindcss.com/docs)
- [next-themes                     ](https://github.com/pacocoursey/next-themes)
- [qiita                    :ページ基礎](https://qiita.com/minimumskills/items/a044d4abafb72c3e1681)
- [qiita                    :ダークモード実装](https://qiita.com/kouz496/items/5dd4387a55b67bcb7c10)
- [CSS LABORATORY           :各種アイコン](https://design-library.jp/lab/)
