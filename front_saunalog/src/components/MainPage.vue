<template>
  <div class="main-page">
    <div class="left-menu" @click.self="onEditLogEnd()">
      <!--サウナログリスト-->
      <SaunalogItem
        v-for="log in saunalogList"
        v-bind:log="log"
        v-bind:key="log.id"
        @delete="onDeleteLog"
        @editStart="onEditLogStart"
        @editEnd="onEditLogEnd"
      />
      <!--サウナログ追加ボタン-->
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square">サウナログを追加</i>
      </button>
    </div>
    <div class="right-view" @click.self="onEditLogEnd()">
      右ビュー
    </div>
  </div>
</template>


<script>
import SaunalogItem from '@/components/parts/SaunalogItem.vue'

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
        name: `新規ログ`,
        //マウスオーバー中かどうかの状態を管理する変数を追加
        mouseover: false,
        editing: false,
      })
    },
    onDeleteLog: function(deleteLog) {
      const index = this.saunalogList.indexOf(deleteLog);
      this.saunalogList.splice(index, 1);
    },
    onEditLogStart: function(editLog) {
      for(let log of this.saunalogList) {
        log.editing = (log.id === editLog.id);
      }
    },
    onEditLogEnd: function(editedLog) {
      for(let log of this.saunalogList) {
        log.editing = false;
      }
      if (editedLog) {
        const logToUpdate = this.saunalogList.find(log => log.id === editedLog.id);
        if (logToUpdate) {
          logToUpdate.name = editedLog.name;
        }
      }
},


    // onEditLogEnd: function() {
    //   for(let log of this.saunalogList) {
    //     log.editing = false;
    //   }
    // },
  },
  components: {
    SaunalogItem,
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
  }
  .right-view {
    flex-grow: 1;
    padding: 10px;
  }
}
</style>
