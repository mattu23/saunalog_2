<template>
  <div id="app">
    <v-layout justify-center>
      <v-card width="600px">
        <h1>登録リスト一覧</h1>
        <v-container>
          <v-row dense v-for="log in saunaLogs" :key="log.id">
            <v-col>
              <v-card
                class="mt-5"
                elevation="6"
              >
                <v-card-title class="text-h5"
                  >{{ log.name }}</v-card-title
                >
                <v-card-title class="text-h5"
                  >{{ log.area }}</v-card-title
                >
                <v-card-title class="text-h5"
                  >{{ log.rank }}</v-card-title
                >
                <v-card-title class="text-h5"
                  >{{ log.comment }}</v-card-title
                >
                <v-btn
                  dark
                  to="edit"
                  color="green darken-1"
                  style="margin-bottom: 20px"
                  nuxt
                >
                  編集
                </v-btn>
                <v-btn
                  dark
                  to="list"
                  color="green darken-1"
                  style="margin-bottom: 20px"
                  nuxt
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
}
</script>