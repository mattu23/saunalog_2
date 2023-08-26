<template>
  <!-- マウスオーバーしたかどうかの状態を更新し、それに応じて見た目を変化 -->
  <div class="log"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    v-bind:class="{mouseover: isMouseOver}"  
  >
    <div class="log-icon">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="log-name">{{log.name}}</div>
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
      isMouseOver: false   //ローカルの状態として isMouseOver を追加
    }
  },
  methods: {
    onMouseOver: function() {
      this.isMouseOver = true;   //log.mouseover を isMouseOver に変更
    },
    onMouseLeave: function() {
      this.isMouseOver = false;   //log.mouseover を isMouseOver に変更
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
}
</style>
