<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from './components/Header';


export default {
  name: "App",
  components:{
    Header,
  }
};
</script>