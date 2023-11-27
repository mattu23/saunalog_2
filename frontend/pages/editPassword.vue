<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="600px" class="mx-auto mt-5" shaped>
      <v-card-title>
        <h2 class="mx-auto">パスワードの編集</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-lock"
            label="新しいパスワード"
            placeholder="大文字・小文字・記号を含んで下さい"
            counter="32"
            v-model="user.password"
            :rules="passwordRules"
          ></v-text-field>
          <br />
          <v-card-actions>
            <v-btn dark color="green" @click="updateUserPassword">編集</v-btn>
            <v-btn to="/editUser">戻る</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>


<script>
export default {
  head() {
    return {
      title: 'Password-Edit'
    }
  },
  data() {
    return {
      user: {
        password:'',
      },
      passwordRules: [
        v => !!v || 'パスワードは必須です',
        v => v.length >= 8 || 'パスワードは8文字以上です',
        v => (v && v.length <= 32) || 'パスワードは32文字以内で入力してください',
        v => /[A-Z]/.test(v) || '少なくとも1つの大文字が必要です',
        v => /[a-z]/.test(v) || '少なくとも1つの小文字が必要です',
        v => /[0-9]/.test(v) || '少なくとも1つの数字が必要です',
        v => /^[A-Za-z0-9]+$/.test(v) || 'パスワードは半角英数字のみで入力してください',
      ],
    };
  },
  async mounted() {
    await this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const response = await this.$axios.get(`${process.env.API_ENDPOINT}/auth/user`);
      this.user = response.data;
      this.user.password = '';
    },
    async updateUserPassword() {
      try{
        await this.$axios.put(`${process.env.API_ENDPOINT}/auth/updateUserPassword/${this.user.id}`, {password: this.user.password});
        alert('パスワードを編集しました。');
        this.$router.push('/editUser');
      } catch(error){
        console.error(error);
        alert('編集できませんでした。もう一度お試しください。');
      }
    },
  }
}  
</script>

