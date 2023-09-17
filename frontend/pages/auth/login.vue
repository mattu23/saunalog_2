<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="600px" class="mx-auto mt-5" shaped>
      <v-card-title>
        <h2 class="mx-auto">ログイン</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="name"
            placeholder="田中 花男"
            counter="16"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-lock"
            label="password"
            placeholder="大文字・小文字・記号を含んで下さい"
            counter="32"
          ></v-text-field>
          <v-card-actions>
            <v-btn class="primary">ログイン</v-btn>
            <v-btn to="../main">戻る</v-btn>
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
  layout: 'home',
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
      await this.$auth.loginWith('local').then(
        (responce) => {
          return responce
        },
        (error) => {
          return error
        }
      )
    },
  },
}
</script>
