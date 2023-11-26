## アプリーケーション名
サウナログアプリ

## アプリーケーションの概要/機能一覧
主にCRUD処理・ユーザー認証・認可を搭載した簡単なログアプリ。
・ユーザー登録
・ログイン/ログアウト
・サウナログの登録、編集、表示、削除
・ユーザー名、アドレス、パスワードの編集

## アプリーケーションのURL
※現在AWSへのデプロイ作業中

## 使用技術
・forntend:Nuxt2
・backend:NestJS
・DB：MySQL

## 制作背景
本アプリーケーションは、プログラミング初学者として独学で勉強を続け、写経ではなく独力での初めてのポートフォリオ作成したもの。
基本的なCRUD処理はもちろん、Sessionを使用したユーザー認証・認可をアウトプットするべく制作。

## 苦労した点
・設計を全く意識してない段階のスタートだったので、コンポーネント部分やメソッド含め、保守性の悪いコードが多く新機能の実装ごとに他の場所を編集する必要があった
・上記と同じく、ディレクトリ構成を考える意識すらない状態でのスタートのため、ページビューなどの観点で一苦労
・当初JWT認証を使用してのユーザー認証/認可だったが、その場合だとログアウトの実装が困難なため,Session監理に一から乗り換えたこと
・NestJSを使用したアプリーケーション制作の事例が少なく、参考記事をあまり見ずに実装進めたこと

## 今後改善したい点
・DockerをDB側のみ乗せている状態
・エラーハンドリングが適切に記載されていない（統一されていない）

