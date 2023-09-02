<template>
  <div id="app">
    <v-layout justify-center>
      <v-card width="600px">
        <h1>登録リスト一覧</h1>
        <v-container>
          <v-row dense>
            <v-col>
              <v-card
                class="mt-5"
                elevation="6"
              >
                <v-card-title class="text-h5"
                  ></v-card-title
                >
                <v-btn
                  style="margin-bottom: 12px"
                  nuxt
                >
                  詳細
                </v-btn>
                <v-btn
                  to="/"
                  style="margin-bottom: 12px"
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