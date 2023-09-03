<template>
  <div id="app">
    <v-layout justify-center>
      <v-card width="600px">
        <h1>登録リスト一覧</h1>
        <v-container>
          <v-row dense v-for="log in saunaLogs" :key="log.id">
            <v-col>
              <v-card class="mt-5" elevation="6">
                <v-card-title class="text-h5">{{ log.name }}</v-card-title>
                <v-card-title class="text-h5">{{ log.area }}</v-card-title>
                <v-card-title class="text-h5">{{ log.rank }}</v-card-title>
                <v-card-title class="text-h5">{{ log.comment }}</v-card-title>
                <v-card-actions>
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
                    @click="deleteLog(log.id)"
                    color="green darken-1"
                    style="margin-bottom: 20px"
                  >
                    削除
                  </v-btn>
                  <v-btn
                    to="/"
                    style="margin-bottom: 20px"
                    nuxt
                  >
                    戻る
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
    async mounted() {
      try {
        const response = await this.$axios.get('http://localhost:3000/saunalog/');
        if(response.status === 200) {
          this.saunaLogs = response.data;
        } else {
          console.error('Error fetching logs:', response.data);
        }
      } catch(error) {
        console.error('API call failed:', error);
      }
    },
    methods: {
    async deleteLog(id) {
      try {
        const response = await this.$axios.delete(`http://localhost:3000/saunalog/${id}`);
        if(response.status === 200) {
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