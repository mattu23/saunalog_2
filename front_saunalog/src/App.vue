<template>
  <div id="app">
    <NavigationBar />
    <MyList />
    <RegisterSaunalog />
    <UserLogin />
    <!--URLに対応したコンポーネントを表示-->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import MyList from '@/components/MyList.vue'
import RegisterSaunalog from '@/components/RegisterSaunalog.vue'
import UserLogin from '@/components/UserLogin.vue'
//import MainPage from '@/components/MainPage.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    MyList,
    RegisterSaunalog,
    UserLogin,
    //MainPage
  }
}
</script>

<style>
  #app {
    height: 100vh;
  }
  button.transparent {
    margin: 5px;
    background: transparent;
    border: none;
  }
  input.transparent {
    width: 100%;
    border: none;
  }
  input.transparent:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
</style>
