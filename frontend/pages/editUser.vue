<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="700px" class="mx-auto mt-5" color="" shaped>
      <v-card-title>
        <h2 class="mx-auto">ユーザー編集ページ</h2>
      </v-card-title>
      <v-card-title>
      <h3 v-if="user">ユーザー名：{{ user.username }}</h3>
      <v-btn  dark min-width="100" color="green darken-1" style="margin: 10px" >ユーザー名を編集</v-btn>
      </v-card-title>
      
      <v-card-title>
      <h3 v-if="user">メールアドレス：{{ user.email }}</h3>
      <v-btn  dark min-width="100" color="green darken-1" style="margin: 10px" >メールアドレスを編集</v-btn>
      </v-card-title>

      <v-card-title>
      <h3 v-if="user">パスワード： </h3>
      <v-btn  dark min-width="100" color="green darken-1" style="margin: 10px" >パスワードを編集</v-btn>
      </v-card-title>

      <v-card-text>
        <v-btn  dark color="red darken-1" min-width="100" @click="deleteUser()" >ユーザーの削除</v-btn>
        <v-btn to="/list">戻る</v-btn>
      </v-card-text>

    </v-card>
  </v-layout>
</template>



<script>

export default {
  data() {
    return {
      user: null
    };
  },
  async mounted() {
    await this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const response = await this.$axios.get(`${process.env.API_ENDPOINT}/auth/user`);
      this.user = response.data;
    },
    async deleteUser() {
      try {
        await this.$axios.delete(`${process.env.API_ENDPOINT}/auth/delete/${this.user.id}`);
        alert('ユーザー情報を削除しました。トップページに戻ります。');
        this.$router.push('/')
      } catch(error) {
        alert('削除できませんでした。もう一度お試しください。');
      }
    },
  }
}  
</script>