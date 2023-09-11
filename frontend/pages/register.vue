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
            prepend-icon="mdi-home-variant"
            label="name"
            placeholder="勝どきの湯"
            counter="20"
          ></v-text-field>
          <v-text-field
            v-model="log.area"
            prepend-icon="mdi-map-marker"
            label="area"
            placeholder="東京都 中央区"
            counter="20"
          ></v-text-field>
          <v-select
            v-model="log.rank"
            prepend-icon="mdi-star"
            label="rank"
            :items="numbers"
            placeholder="3"
          ></v-select>
          <v-textarea
            v-model="log.comment"
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
          </v-card-actions>
          <v-card-actions>
            <v-btn
              dark
              to="main"
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
      log: {
        name: '',
        area: '',
        rank: null,
        comment: '',
      },
      numbers: [1,2,3,4,5]
    };
  },
  methods: {
    registerLog() {
      this.$axios.post('http://localhost:3001/saunalog', {
        name: this.log.name,
        area: this.log.area,
        rank: this.log.rank,
        comment: this.log.comment,
      })
      .then((response) => {
        if(response.status >= 200 && response.status < 300) {
          this.$router.push('/list');
        } else {
          console.error('Error registering log:', response.data);
        }
      })
      .catch((error) => {
        console.error('API call failed:', error);
      });
    },
  }
};


</script>