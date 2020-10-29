<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item @click="mostrarFilmes = true" >Home</b-nav-item>
        <b-nav-item @click="mostrarFilmes = false">Carrinho</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <b-row>
        <h1>{{ title }}</h1>
      </b-row>
      <b-row>
        <HelloWorld msg="" />
      </b-row>
      <b-row>
        <p>Carrinho: {{ quantidadeNoCarrinho }} filmes</p>
      </b-row>
      <b-row v-show="mostrarFilmes">
        <div class="cards">
          <b-card
            :key="filme.id"
            v-for="filme in filmes"
            :title="filme.titulo"
            :img-src="filme.imagem"
            :img-alt="filme.descricao"
            :id="filme.id"
            img-top
            tag="article"
            style="max-width: 18rem"
            class="mb-3 text-center"
          >
            <b-card-text>
              {{ filme.descricao }}
            </b-card-text>
            <b-card-text> R$ {{ filme.valor }},00 </b-card-text>

            <b-button
              v-if="filme.estoqueDisponivel > 1"
              href="#"
              block
              variant="dark"
              @click="adicionarAoCarrinho(filme)"
            >
              ALUGAR</b-button
            >
            <b-button
              v-else-if="filme.estoqueDisponivel == 1"
              variant="warning"
              @click="adicionarAoCarrinho(filme)"
            >
              ÚLTIMA UNIDADE</b-button
            >
            <b-button v-else href="#" block variant="danger" disabled>
              ESGOTADO</b-button
            >
          </b-card>
        </div>
      </b-row>
      <b-row v-show="!mostrarFilmes">
        <b-row class="table">
          <h2> Resumo de pedido</h2>
          <b-table block striped hover dark responsive head-variant="light" :items="carrinho" :fields="fields"></b-table>
          <b-row> <p>Total : R${{ somaPedido}},00</p></b-row>
        </b-row>
      </b-row>
    </b-container>
  </div>
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
      carrinho: [],
      fields: ['titulo', 'preço', 'quantidade'],
      mostrarFilmes: true,
      filmes: [
        {
          id: 1,
          estoqueDisponivel: 3,
          titulo: "Hulk",
          descricao: "Filme Ruim",
          valor: 2,
          imagem: "https://i.imgur.com/0uthCmp.jpg",
        },
        {
          id: 2,
          estoqueDisponivel: 2,
          titulo: "Homem de Ferro",
          descricao: "Homem de Ferro",
          valor: 10,
          imagem: "https://i.imgur.com/OA8pDFM.jpg",
        },
        {
          id: 3,
          estoqueDisponivel: 4,
          titulo: "Thor",
          descricao: "Bonito ",
          valor: 20,
          imagem: "https://i.imgur.com/mt4ZRzw.jpg",
        },
        {
          id: 4,
          estoqueDisponivel: 2,
          titulo: "Capitão América",
          descricao: "Um filme de capitão",
          valor: 40,
          imagem: "https://i.imgur.com/UFmSVtZ.jpg",
        },
        {
          id: 5,
          estoqueDisponivel: 9,
          titulo: "Doutor Estranho",
          descricao: "Magia",
          valor: 10,
          imagem: "https://i.imgur.com/pVEDruM.jpg",
        },
        {
          id: 6,
          estoqueDisponivel: 6,
          titulo: "Pantera Negra",
          descricao: "Um segundo filme de força",
          valor: 10,
          imagem: "https://i.imgur.com/JOSEGKf.jpg",
        },
      ],
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
    adicionarAoCarrinho: function (filme) {
      if (filme.estoqueDisponivel > 0) {
        let indexFilme = this.carrinho.findIndex((obj) => obj.id == filme.id);   
        filme.quantidade = (filme.quantidade || 0) +1
        if(indexFilme == -1){
          filme.preço = `R$${filme.valor},00`
          this.carrinho.push(filme)
        }else{
          this.carrinho.splice(indexFilme, 1, filme)
        }
        filme.estoqueDisponivel -= 1;
      }  
    },
  },
  computed: {
    quantidadeNoCarrinho: function () {
      return this.carrinho.length;
    },
    somaPedido: function(){
      return this.carrinho.reduce(function (accumulator, filme) {
          return accumulator + (filme.valor * filme.quantidade)
      }, 0)
    }
  },
};
</script>

<style>
.table{
  width: 100%;
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
