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
        <i class="fas fa-plus-square">  サウナログを新規登録</i>
      </button>
    </div>
    <div class="right-view" @click.self="onEditLogEnd()">
      <template v-if="selectedLog === null">
        <div class="no-selected-log">
          <h3>ログを新たに登録するか、選択してください</h3>
        </div>
      </template>
      <template v-else>
        <!-- <div class="path">
          <small>{{ selectedPath }}</small>
        </div> -->
        <div class="log-content">
          <h1 class="log-title">{{ selectedLog.name }}</h1>
        </div>
        <div class="input-saunalog">
          <label for="log-name"> サウナ施設名： </label>
          <input id="log-name" v-model="selectedLog.name" type="text">
        </div>
        <div class="input-saunalog">
          <label for="log-area"> 都道府県: </label>
          <select id="log-area" v-model="selectedLog.area">
           <option value="1" selected>選択してください</option>
              <option value="北海道">北海道</option>
              <option value="青森県">青森県</option>
              <option value="岩手県">岩手県</option>
              <option value="宮城県">宮城県</option>
              <option value="秋田県">秋田県</option>
              <option value="山形県">山形県</option>
              <option value="福島県">福島県</option>
              <option value="茨城県">茨城県</option>
              <option value="栃木県">栃木県</option>
              <option value="群馬県">群馬県</option>
              <option value="埼玉県">埼玉県</option>
              <option value="千葉県">千葉県</option>
              <option value="東京都">東京都</option>
              <option value="神奈川県">神奈川県</option>
              <option value="新潟県">新潟県</option>
              <option value="富山県">富山県</option>
              <option value="石川県">石川県</option>
              <option value="福井県">福井県</option>
              <option value="山梨県">山梨県</option>
              <option value="長野県">長野県</option>
              <option value="岐阜県">岐阜県</option>
              <option value="静岡県">静岡県</option>
              <option value="愛知県">愛知県</option>
              <option value="三重県">三重県</option>
              <option value="滋賀県">滋賀県</option>
              <option value="京都府">京都府</option>
              <option value="大阪府">大阪府</option>
              <option value="兵庫県">兵庫県</option>
              <option value="奈良県">奈良県</option>
              <option value="和歌山県">和歌山県</option>
              <option value="鳥取県">鳥取県</option>
              <option value="島根県">島根県</option>
              <option value="岡山県">岡山県</option>
              <option value="広島県">広島県</option>
              <option value="山口県">山口県</option>
              <option value="徳島県">徳島県</option>
              <option value="香川県">香川県</option>
              <option value="愛媛県">愛媛県</option>
              <option value="高知県">高知県</option>
              <option value="福岡県">福岡県</option>
              <option value="佐賀県">佐賀県</option>
              <option value="長崎県">長崎県</option>
              <option value="熊本県">熊本県</option>
              <option value="大分県">大分県</option>
              <option value="宮崎県">宮崎県</option>
              <option value="鹿児島県">鹿児島県</option>
              <option value="沖縄県">沖縄県</option>
           </select>
        </div>
        <div class="input-saunalog">
          <label for="log-rank"> ランク（5段階）: </label>
          <select name="rank" id="rank">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="input-saunalog">
          <label for="log-comment"> コメント： </label>
          <textarea id="log-comment" name="log-comment"></textarea>
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
