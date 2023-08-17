import { createApp } from 'vue';

// const app = createApp({
//     data() {
      
//     },
//     methods: {
//     addList: function(event) {
       
//     }
//   }
// })

// app.mount('#app')

const app = Vue.createApp({
  data: () => ({
    newItem: '',
    saunalogs: []
  }),
  methods: {
    addList: function(event) {
      console.log('Clicked!')
      let saunalog = {
        item: this.newItem
      }
      this.saunalogs.push(saunalog)
      this.newItem = ''
    }
  }
})
app.mount('#app')


