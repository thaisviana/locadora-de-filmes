<template>
  <div>
    <Header :controla_aba="controla_aba"/>
    <b-container>
      <b-row>
        <h1>{{ title }}</h1>
      </b-row>
      <b-row>
        <p>Carrinho: {{ quantidadeNoCarrinho }} filmes</p>
      </b-row>
      <b-row v-show="mostrarFilmes">
        <ListarFilmes :carrinho="carrinho" />
      </b-row>
      <b-row v-show="!mostrarFilmes">
          <ResumoPedido :carrinho="carrinho" />
          <DadosForm />
        </b-row>
    </b-container>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import DadosForm from "./components/DadosForm.vue";
import ResumoPedido from "./components/ResumoPedido.vue";
import ListarFilmes from "./components/ListarFilmes.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    DadosForm,
    ResumoPedido,
    ListarFilmes,
    Header
  },
  data() {
    return {
      title: "Locadora de Filmes",
      horas: new Date().getHours(),
      carrinho: [],
      mostrarFilmes: true,
    };
  },
  methods: {
    controla_aba(valor){
      this.mostrarFilmes=valor
    },
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
  computed: {
    quantidadeNoCarrinho: function () {
      return this.carrinho.length;
    }
    
  },
};
</script>

<style>
.table {
  width: 100%;
}
.pedido {
  width: 100%;
  display: block;
}
.container {
  font-family: "Quicksand", sans-serif;
  margin-top: 40px;
}
.row {
  justify-content: center;
}
.cards {
  display: flex;
  flex-wrap: inherit;
  justify-content: space-around;
}
.card:hover {
  transform: scale(1.05);
}
</style>