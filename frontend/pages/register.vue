<template>
  <v-layout align-center justify-center>
    <v-card elevation="10" width="600px" class="mx-auto mt-5" color="" shaped>
      <v-card-title>
        <h2 class="mx-auto">サウナログの登録</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="log.name"
            :rules="nameRules"
            prepend-icon="mdi-home-variant"
            label="name"
            placeholder="勝どきの湯"
            counter="20"
          ></v-text-field>
          <v-text-field
            v-model="log.area"
            :rules="areaRules"
            prepend-icon="mdi-map-marker"
            label="area"
            placeholder="東京都 中央区"
            counter="20"
          ></v-text-field>
          <v-select
            v-model="log.rank"
            :rules="rankRules"
            prepend-icon="mdi-star"
            label="rank"
            :items="numbers"
            placeholder="3"
          ></v-select>
          <v-textarea
            v-model="log.comment"
            :rules="commentRules"
            prepend-icon="mdi-tooltip"
            label="comment"
            placeholder=""
            counter="100"
            maxlength="100"
          ></v-textarea>
          <br />
          <v-card-actions>
            <v-btn
              dark
              color="green darken-1"
              class="font-weight-bold"
              @click="registerLog"
              >登録</v-btn
            >
            <v-btn
              dark
              to="/list"
              color="green darken-1"
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
  head() {
    return {
      title: 'Saunalog-Register'
    }
  },
  data() {
    return {
      valid: true,
      log: {
        name: '',
        area: '',
        rank: null,
        comment: '',
      },
      numbers: [1,2,3,4,5],
      nameRules: [
        v => !!v || '施設名は必須項目です',
        v => (v && v.length <= 20) || '施設名は20文字以内で入力してください'
      ],
      areaRules: [
        v => !!v || 'エリアは必須項目です',
        v => (v && v.length <= 20) || 'エリアは20文字以内で入力してください'
      ],
      rankRules: [
        v => !!v || '評価は必須項目です',
      ],
      commentRules: [
        v => !!v || 'コメントは必須項目です',
        v => (v && v.length <= 100) || 'コメントは100文字以内で入力してください'
      ],
    };
  },
  methods: {
    async registerLog() {
      try {
        await this.$axios.post(`${process.env.API_ENDPOINT}/saunalog/`, this.log);
        alert('データを登録しました！');
        this.$router.push('/list');
      } catch(error) {
        console.error(error);
        if(error.response && error.response.data && error.response.data.message) {
          alert(`エラー： ${error.response.data.message}`)
        }
      }
    }
  }
}
</script>