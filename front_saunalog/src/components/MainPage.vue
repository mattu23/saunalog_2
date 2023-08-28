<template>
  <div class="main-page">
    <div class="left-menu" @click.self="onEditLogEnd()">
      <!--サウナログリスト-->
      <SaunalogItem
        v-for="log in saunalogList"
        v-bind:log="log"
        v-bind:key="log.id"
        @delete="onDeleteLog"
        @select="onSelectLog"
        @editStart="onEditLogStart"
        @editEnd="onEditLogEnd"
      />
      <!--サウナログ追加ボタン-->
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square">  サウナログを追加</i>
      </button>
    </div>
    <div class="right-view" @click.self="onEditLogEnd()">
      <template v-if="selectedLog === null">
        <div class="no-selected-log">ログを選択してください</div>
      </template>
      <template v-else>
        <div class="path">
          <small>{{ selectedPath }}</small>
        </div>
        <div class="log-content">
          <h2 class="log-title">{{ selectedLog.name }}</h2>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
import SaunalogItem from '@/components/parts/SaunalogItem.vue'

export default {
  data(){
    return {
      saunalogList: [],
      selectedLog: null,
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
        selected: false,
        children: [],
      })
    },
    onDeleteLog: function(deleteLog) {
      const index = this.saunalogList.indexOf(deleteLog);
      this.saunalogList.splice(index, 1);
    },
    onSelectLog: function(targetLog) {
      //再帰的にノートの選択状態を更新
      const updateSelectStatus = function(targetLog, saunalogList) {
      for(let log of saunalogList) {
        log.selected = (log.id === targetLog.id);
        updateSelectStatus(targetLog, log.children);
        }
      }
      updateSelectStatus(targetLog, this.saunalogList);
      //選択中ログ情報を更新
      this.selectedLog = targetLog;
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
    .no-selected-note {
      text-align: center;
      font-size: 25px;
      margin: 20px;
    }
    .path {
      text-align: left;
      margin-bottom: 50px;      
    }
    .note-content {
      max-width: 900px;
      margin: 0 auto;
      text-align: left;
      .note-title {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
