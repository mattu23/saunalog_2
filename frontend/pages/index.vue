<template>
  <div class="d-flex flex-column justify-center align-center min-vh-100">
    <div style="flex-grow: 1;" >
      <v-card elevation="16" width="800px" class="mx-auto mt-5" shaped>
        <v-card-title>
          <h2 class="mx-auto">Welcome to Saunalog！</h2>
        </v-card-title>
        <v-card-text>
          <v-card-actions>
            <v-row style="text-align: center">
              <v-col>
                <v-btn to="/register"  class="primary my-5" min-width="250">データの登録</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card-text>
        <v-card-text>
          <v-card-actions>
            <v-row style="text-align: center">
              <v-col>
                <v-btn to="/list"  class="primary my-5" min-width="200">登録一覧を見る</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>

    <!-- <v-footer class="bg-grey-lighten-1" style="margin-top: 20px;">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Saunalog</strong>
        </v-col>
      </v-row>
    </v-footer> -->
  </div>
</template>
