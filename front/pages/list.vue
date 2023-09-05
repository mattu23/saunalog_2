<template>
  <div id="app">
    <v-layout justify-center>
      <v-card width="600px">
        <h1>登録リスト一覧</h1>
        <v-container>
          <v-row dense>
            <v-col>
              <v-card v-for="log in saunaLogs" :key="log.id" class="mt-5" elevation="6">
                <v-card-title class="text-h5">
                 施設名： {{ log.name }}
                </v-card-title>
                <v-card-title class="text-h5">
                 エリア： {{ log.area }}
                </v-card-title>
                <v-card-title class="text-h5">
                 評価（5段階）： {{ log.rank }}
                </v-card-title>
                <v-card-title class="text-h5">
                 コメント：{{ log.comment }}
                </v-card-title>
                  <v-btn
                    dark
                    :to="`edit/${log.id}`"
                    color="green darken-1"
                    style="margin-bottom: 20px"
                    nuxt
                  >
                    編集
                  </v-btn>
                  <v-btn
                    dark
                    color="green darken-1"
                    style="margin-bottom: 20px"
                    @click="deleteLog(log.id)"
                  >
                    削除
                  </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-btn
         to="/"
         style="margin-bottom: 20px"
         nuxt
         >
         戻る
        </v-btn>
      </v-card>
    </v-layout>
  </div>
</template>

<script>

export default {
  data() {
    return {
      saunaLogs: [],
    };
  },
    created() {
      this.$axios.get('http://localhost:3001/saunalog').then((response) => {
        this.saunaLogs = response.data
      })
    },
    methods: {
    async deleteLog(id) {
      try {
        const response = await this.$axios.delete(`http://localhost:3001/saunalog/${id}`);
        if(response.status >= 200 && response.status < 300) {
          this.saunaLogs = this.saunaLogs.filter(log => log.id !== id);
        } else {
          console.error('Error deleting log:', response.data);
        }
      } catch(error) {
          console.error('API call for deletion failed', error);
        }
    },
  }
}
</script>