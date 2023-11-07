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
            label="username"
            placeholder="山田 太郎"
            counter="16"
            :rules="usernameRules"
            v-model="user.name"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-email-outline"
            label="email"
            placeholder="example@email.com"
            :rules="emailRules"
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
            :rules="passwordRules"
            v-model="user.password"
          ></v-text-field>
          <br />
          <v-card-actions>
            <v-btn :disabled="!valid" class="primary" @click="createUser">登録</v-btn>
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
  valid: true,
  data() {
    return {
      showPassword: false,
      user: {
        username: '',
        email: '',
        password: '',
      },
      usernameRules: [
        v => !!v || 'ユーザー名は必須です',
        v => (v && v.length <= 16) || 'ユーザー名は16文字以内で入力してください',
      ],
      emailRules: [
        v => !!v || 'Eメールは必須です',
        v => /.+@.+\..+/.test(v) || '有効なEメールを入力してください',
      ],
      passwordRules: [
        v => !!v || 'パスワードは必須です',
        v => v.length >= 8 || 'パスワードは8文字以上です',
        v => /[A-Z]/.test(v) || '少なくとも1つの大文字が必要です',
        v => /[a-z]/.test(v) || '少なくとも1つの小文字が必要です',
        v => /[0-9]/.test(v) || '少なくとも1つの数字が必要です',
      ],
    };
  },
  methods: {
    async createUser() {
      try {
        await this.$axios.post('http://localhost:3001/auth/signup', {
          username: this.user.name,
          email: this.user.email,
          password: this.user.password,
        });
        
        // 登録成功時の処理
        this.$router.push('/auth/login');
        alert('登録が完了しました。');
      } catch (error) {
        console.error(error.response.data);
        alert('入力内容に誤りがあります。もう一度入力内容を確認してください。')
      }
    },
  },
}
</script>
