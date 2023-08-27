<template>
  <!-- マウスオーバーしたかどうかの状態を更新し、それに応じて見た目を変化 -->
  <div class="log"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    v-bind:class="{mouseover: isMouseOver && !log.editing}"  
  >
    <template v-if="log.editing">
      <input v-model="localLog.name" class="transparent" @keypress.enter="onEditEnd" />
    </template>
    <template v-else>
    <div class="log-icon">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="log-name">{{log.name}}</div>
       <div v-show="isMouseOver" class="buttons">
          <div class="button-icon">
            <i class="fas fa-sitemap"></i>
          </div>
          <div class="button-icon">
            <i class="fas fa-plus-circle"></i>
          </div>
          <div class="button-icon" @click="onClickEdit()">
            <i class="fas fa-edit"></i>
          </div>
          <div class="button-icon" @click="onClickDelete()">
            <i class="fas fa-trash"></i>
          </div>
        </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SaunalogItem',
  props: [
    'log',
  ],
  data() {
    return {
      isMouseOver: false,
      localLog: { ...this.log }
    }
  },
  watch: {
    log: {
      handler(newLog) {
        this.localLog = { ...newLog };
      },
      deep: true
    }
  },
  methods: {
    onMouseOver: function() {
      this.isMouseOver = true;   //log.mouseover を isMouseOver に変更
    },
    onMouseLeave: function() {
      this.isMouseOver = false;   //log.mouseover を isMouseOver に変更
    },
    onClickDelete: function() {
      this.$emit('delete', this.localLog);
    },
    onClickEdit: function() {
      this.$emit('editStart', this.localLog);
    },
    onEditEnd: function() {
      this.$emit('editEnd', this.localLog);
    },
  },
}
</script>


<style scoped lang="scss">
.log {
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 5px;
  color: rgba(25, 23, 17, 0.6);
  &.mouseover {
    background-color: rgb(232, 231, 228);
    cursor: pointer;
  }
  .log-icon {
    margin-left: 10px;
  }
  .log-name {
    width: 100%;
    padding: 3px 10px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    .button-icon {
      padding: 3px;
      margin-left: 3px;
      border-radius: 5px;
    }
  }
}
</style>
