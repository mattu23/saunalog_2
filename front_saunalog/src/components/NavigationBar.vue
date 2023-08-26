<template>
  <!-- ナビゲーションバーをダークテーマで作成 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- タイトル -->
    <a class="navbar-brand" href="/main">サウナログ</a>

    <!-- 画面サイズに応じて折りたたむ設定  -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- メニュー全体 -->
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav">
        <!-- 登録リストページへのリンク -->
        <li class="nav-item">
          <a class="nav-link" href="/main"><i class="fa-solid fa-laptop"></i>登録リスト</a>
        </li>

        <!-- 学習ページへのリンク -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown">
            <i class="fa-solid fa-id-card"></i>ログイン
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login">ログイン</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>


  <div class="navigation-bar">
    ナビゲーションバーです
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navigation-bar {
  height: 60px;
  /* color: white;
  background-color: #6c757d; */
}
</style>

