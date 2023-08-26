<template>
  <div class="main-page">
    <div class="left-menu">
      <!--サウナログリスト-->
      <div class="log" v-for="log in saunalogList" :key="log.id">
        <div class="log-icon">
          <i class="fas fa-file-alt"></i>
        </div>
        <div class="log-name">{{ log.name }}</div>
      </div>
      <!--サウナログ追加ボタン-->
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square"></i>サウナログを追加
      </button>
    </div>
    <div class="right-view">
      右ビュー
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      saunalogList: [],
    }
  },
  methods: {
    onClickButtonAdd: function() {
      this.saunalogList.push({
        id: new Date().getTime().toString(16),
        name: `新規サウナログ`,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  height: calc(100vh - 60px);
  .left-menu {
    width: 350px;
    background-color: #f7f6f3;
  .log{
    margin: 10px 0;
    display: flex;
    align-items: center;
    padding: 5px;
    color: rgba(25, 23, 17, 0.6);
    .log-icon {
      margin-left: 10px;
    }
  .log-name {
    width: 100%;
    padding: 3px 10px;
  }
  }
  }
  .right-view {
    flex-grow: 1;
    padding: 10px;
  }
}
</style>
