<template>
  <b-container>
    <b-row>
      <h1>{{ title }}</h1>
    </b-row>
    <b-row>
      <HelloWorld msg="" />
    </b-row>
    <b-row>
      <p> Carrinho: {{ quantidadeNoCarrinho }} filmes </p>
    </b-row>
    <b-row>
      <div class="cards">
         <b-card :key="filme.id" v-for="filme in filmes"
          :title="filme.titulo"
          :img-src="filme.imagem"
          :img-alt="filme.descricao"
          :id="filme.id"
          img-top
          tag="article"
          style="max-width: 18rem;"
          class="mb-3 text-center"
        >
          <b-card-text>
            {{ filme.descricao}}
          </b-card-text>
          <b-card-text>
            R$ {{ filme.valor}},00
          </b-card-text>

          <b-button v-if="filme.estoqueDisponivel > 0" href="#" block variant="dark" @click="adicionarAoCarrinho(filme)"> ALUGAR</b-button>
          <b-button v-else href="#" block variant="danger" disabled> ESGOTADO</b-button>
        </b-card>
      </div>
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
    HelloWorld
  },
  data() {
    return {
      title: "Locadora de Filmes",
      horas: new Date().getHours(),
      carrinho : [],
      filmes : [
        { id: 1, estoqueDisponivel : 3, titulo: "Hulk", descricao: "Filme Ruim", valor: 2, imagem: "https://i.imgur.com/0uthCmp.jpg" },
        { id: 2, estoqueDisponivel : 2, titulo: "Homem de Ferro", descricao: "Homem de Ferro", valor: 10, imagem: "https://i.imgur.com/OA8pDFM.jpg" },
        { id: 3, estoqueDisponivel : 4, titulo: "Thor", descricao: "Bonito ", valor: 20, imagem: "https://i.imgur.com/mt4ZRzw.jpg" },
        { id: 4, estoqueDisponivel : 2, titulo: "Capitão América", descricao: "Um filme de capitão", valor: 40, imagem: "https://i.imgur.com/UFmSVtZ.jpg" },
        { id: 5, estoqueDisponivel : 9, titulo: "Doutor Estranho", descricao: "Magia", valor: 10, imagem: "https://i.imgur.com/pVEDruM.jpg" },
        { id: 6, estoqueDisponivel : 6, titulo: "Pantera Negra", descricao: "Um segundo filme de força", valor: 10, imagem: "https://i.imgur.com/JOSEGKf.jpg" }
      ]
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
    adicionarAoCarrinho: function(filme) {
      if (filme.estoqueDisponivel > 0){
        this.carrinho.push(filme.id)
        filme.estoqueDisponivel -= 1 
      }
    }
  },
  computed: {
    quantidadeNoCarrinho: function() {
      return this.carrinho.length;
    }
  }
};
</script>

<style>
body{
  font-family: 'Quicksand', sans-serif;
  margin-top: 40px;
}
.row{
  justify-content: center;
}
.cards{
  display: flex;
  flex-wrap: inherit;
  justify-content: space-around;
}
.card:hover{
  transform: scale(1.05);
}
</style>
