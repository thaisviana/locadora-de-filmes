<template>
  <div>
   <Header 
    v-on:controlaFilmes="atualizaMostrarFilmes"
    :quantidadeNoCarrinho="quantidadeNoCarrinho" 
    :mostrarFilmes="mostrarFilmes" />
    <b-container class="text-center" id="app" v-if="mostrarFilmes">
      <ListaFilmes :carrinho="carrinho" />
    </b-container>
    <b-container v-else>
      <h1>Carrinho</h1>
      <div>
        <b-table striped hover :items="carrinho" :fields="fields"></b-table>
        <b-row>
          <p><b>Total :</b> R$ {{ SumCarrinho }},00</p>
        </b-row>
        <Formulario />
      </div>
    </b-container>
  </div>
</template>

<script>
import Formulario from "./components/Formulario.vue"
import ListaFilmes from "./components/ListaFilmes.vue"
import Header from "./components/Header.vue"

export default {
  name: "App",
  components:{
    Formulario,
    ListaFilmes,
    Header
  },
  data() {
    return {
      fields: [
        { key: "titulo", sortable: true },
        { key: "quantidade" },
        {
          key: "valor",
          formatter: (value, key, item) => {
            return `R$ ${item.valor},00`;
          },
        },
      ],
      mostrarFilmes: true,
      carrinho: [],
    };
  },
  methods:{
    atualizaMostrarFilmes(controlaFilmes){
      this.mostrarFilmes = controlaFilmes
    }
  },
  computed: {
    quantidadeNoCarrinho: function () {
      return this.carrinho.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantidade,
        0
      );
    },
    SumCarrinho: function () {
      return this.carrinho.reduce(
        (accumulator, v) => accumulator + v.valor * v.quantidade,
        0
      );
    },
  },
};
</script>

<style>
.container {
  margin-top: 40px;
}
h1 {
  margin-bottom: 2.5rem !important;
}

h2 {
  margin-bottom: 2.5rem !important;
}


</style>
