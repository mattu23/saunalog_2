<template>
  <v-layout align-center justify-center>
    <v-card elevation="16" width="600px" class="mx-auto mt-5" color="" shaped>
      <v-card-title>
        <h2 class="mx-auto">サウナログの登録</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="name"
            placeholder="勝どきの湯"
            counter="20"
          ></v-text-field>
          <v-text-field
            prepend-icon="mdi-cellphone"
            label="area"
            placeholder="東京都 中央区"
            counter="20"
          ></v-text-field>
          <v-select
            prepend-icon="mdi-cellphone"
            label="rank"
            :items="numbers"
            placeholder="3"
          ></v-select>
          <v-textarea
            prepend-icon="mdi-cellphone"
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
              >登録</v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn
              dark
              to="/"
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
  data() {
    return {
      numbers: [1,2,3,4,5]
    };
  }
};
</script>