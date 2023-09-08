

<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="600px" class="mx-auto mt-5" color="" shaped>
      <v-card-title>
        <h2 class="mx-auto">登録ログを編集</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="log.name"
            prepend-icon="mdi-account-circle"
            label="name"
            counter="20"
          ></v-text-field>
          <v-text-field
            v-model="log.area"
            prepend-icon="mdi-cellphone"
            label="area"
            counter="20"
          ></v-text-field>
          <v-select
            v-model="log.rank"
            prepend-icon="mdi-cellphone"
            label="rank"
            :items="numbers"
          ></v-select>
          <v-textarea
            v-model="log.comment"
            prepend-icon="mdi-cellphone"
            label="comment"
            counter="100"
            maxlength="100"
          ></v-textarea>
          <br />
          <v-card-actions>
            <v-btn
              dark
              color="green darken-1"
              class="font-weight-bold"
              @click="updateLog(log)"
              >更新</v-btn
            >
            <v-btn
              to="list"
              class="font-weight-bold"
              >戻る</v-btn
            >
            
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      log: {
        name: '',
        area: '',
        rank: null,
        comment: '',
      },
      numbers: [1,2,3,4,5]
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.getLogData(id);
  },
  methods: {
    async getLogData(id) {
      try {
        const response = await this.$axios.get(`http://localhost:3001/saunalog/${id}`);
        this.log = response.data;
      } catch (error) {
        alert(error);
      }
    },
    async updateLog(log) {
      try {
        await this.$axios.put(`http://localhost:3001/saunalog/${log.id}`, this.log);
        alert('正常に登録されました。');
        this.$router.push('./list');
      } catch(error) {
        alert('更新に失敗しました。' + error);
      }
    }
  }
};
</script>