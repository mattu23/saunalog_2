<template>
  <!-- ナビゲーションバーをダークテーマで作成 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- タイトル -->
    <a class="navbar-brand" href="/main">〜サウナログ〜</a>

    <!-- 画面サイズに応じて折りたたむ設定  -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- メニュー全体 -->
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="./RegisterSaunalog.vue"><i class="fa-regular fa-clipboard"> 登録ページ </i></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="./MyList.vue"><i class="fa-solid fa-list"> マイリスト </i></a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown">
            <i class="fa-solid fa-user"> ログイン </i>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login">ログイン</a></li>
            <li><a class="dropdown-item" href="/login">ログアウト</a></li>
            <li><a class="dropdown-item" href="/login">設定</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
}
</script>

<style scoped>
.navigation-bar {
  height: 0px;
  /* color: white;
  background-color: #6c757d; */
}
</style>

