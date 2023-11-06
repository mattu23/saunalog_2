<template>
  <v-layout align-center justify-center>
    <v-card elevation="15" width="600px" class="mx-auto mt-5" shaped>
      <v-card-title>
        <h2 class="mx-auto">ログイン</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="user.email"
            prepend-icon="mdi-account-circle"
            label="email"
            placeholder="example@email.com"
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
          新規登録は<nuxt-link to="/auth/signup">こちら</nuxt-link>
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
        email: '',
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
         alert('ログインに成功しました!');
       } catch (error) {
         console.error(error);
         alert('ログインに失敗しました');
       }
    },
  },
}
</script>
