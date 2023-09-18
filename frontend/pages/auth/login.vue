<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="600px" class="mx-auto mt-5" shaped>
      <v-card-title>
        <h2 class="mx-auto">ログイン</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="user.name"
            prepend-icon="mdi-account-circle"
            label="name"
            placeholder="山田 太郎"
            counter="16"
          ></v-text-field>
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="user.password"
            prepend-icon="mdi-lock"
            label="password"
            placeholder="大文字・小文字・記号を含んで下さい"
            counter="32"
          ></v-text-field>
          <v-card-actions>
            <v-btn class="primary" @click="login" >ログイン</v-btn>
            <v-btn to="/" >戻る</v-btn>
          </v-card-actions>
        </v-form>
        <p>
          新規登録は<nuxt-link to="/auth/signUp">こちら</nuxt-link>
        </p>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
      showPassword: false,
    }
  },
  methods: {
     async login() {
       try {
         await this.$auth.loginWith('local', {
           data: this.user
         });
         // ログイン成功時のアラート
         alert('ログインに成功しました!');
       } catch (error) {
         // ログイン失敗時のアラート
         alert('ログインに失敗しました');
         console.log('Login error:', error);
       }
    }
  },
}
</script>
