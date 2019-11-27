<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <div id="app">
    <!-- <v-header></v-header> -->
    <router-view />
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from "./components/home/index";
// import header from "./components/header/header";
// import footer from "./components/footer/footer";
export default {
  name: "app",
  components: {
    // "v-header": header,
    "v-footer": footer
  }
};
</script>
