<template>
  <b-container>
    <b-row>
      <h1>{{ title }}</h1>
    </b-row>
    <b-row>
      <HelloWorld msg="hello!" />
    </b-row>
    <b-row>
      <p>{{ parteDoDia() }}</p>
    </b-row>
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Locadora de Filmes",
      horas: new Date().getHours(),
    };
  },
  methods: {
    parteDoDia() {
      if (this.horas < 12) {
        return "Está de dia!";
      } else if (this.horas >= 12 && this.horas < 18) {
        return "Está de tarde!";
      } else if (this.horas >= 18) {
        return "Está de noite!";
      }
    },
  },
};
</script>

<style>
.row{
  justify-content: center;
}
</style>
