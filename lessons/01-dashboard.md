# 01 ダッシュボードページの作成

[ダッシュボードページ](https://mui.com/material-ui/getting-started/templates/dashboard/)をアプリケーションに作成する

チャートコンポーネントは作成済みなので、参考にしつつコンポーネントから作成を行う

## コンポーネントとstorybookの作成

### Depositコンポーネントとstorybookの作成

1. `app/dashboard/deposit.tsx` を作成
1. interface `DepositData` をpropsとして受け取るようにする
1. `app/dashboard/deposit.stories.tsx` を作成（`chart.stories.tsx` を参考に中身を作成）
1. ダッシュボードページを参考にコンポーネントを作成

### Ordersコンポーネントとstorybookの作成

1. `app/dashboard/order.tsx` を作成
1. interface `OrderData` をpropsとして受け取るようにする
1. `app/dashboard/order.stories.tsx` を作成（`chart.stories.tsx` を参考に中身を作成）
1. ダッシュボードページを参考にコンポーネントを作成

### ダッシュボードのstorybookを作成

1. `app/dashboard/dashboard.stories.tsx` を作成
1. ダッシュボードページを参考にレイアウトを整える

Gridを使用し以下のレイアウトに調整を行う

- chart: md:8 lg:9
- deposit: md:4 lg:3
- order: xs:12

### サイドバーにダッシュボードへのリンクを追加

1. `components/containers/root/navigation.tsx` に `/dashboard` のリンクを追加
