<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="600px" class="mx-auto mt-5" shaped>
      <v-card-title>
        <h2 class="mx-auto">新規登録</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="name"
            placeholder="山田 太郎"
            counter="16"
            v-model="user.name"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-email-outline"
            label="email"
            placeholder="example@email.com"
            counter="64"
            v-model="user.email"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            label="password"
            placeholder="大文字・小文字・記号を含んで下さい"
            counter="32"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="user.password"
          ></v-text-field>
          <br />
          <v-card-actions>
            <v-btn class="primary" @click="createUser">登録</v-btn>
            <v-btn to="login">戻る</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      showPassword: false,
      user: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async createUser() {
      try {
        await this.$axios.post('https://saunalog-backend-5253beda3c29.herokuapp.com/auth/signup', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        });
        
        // 登録成功時の処理
        this.$router.push('/auth/login');
        alert('登録が完了しました。');
      } catch (error) {
        console.error('Error during registration:', error.response.data);
        alert('登録ができませんでした。もう一度確認してください。')
      }
    },
  },
}
</script>
