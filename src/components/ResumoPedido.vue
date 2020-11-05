<template>
  <b-row class="table">
    <h2>Resumo de pedido</h2>
    <b-table
      block
      striped
      hover
      dark
      responsive
      head-variant="light"
      :items="carrinho"
      :fields="fields"
    ></b-table>
    <b-row>
      <p>Total : R${{ somaPedido }},00</p></b-row
    >
  </b-row>
</template>

<script>
export default {
  name: "ResumoPedido",
  props: {
    carrinho: Array,
  },
  data() {
    return {
      fields: ["titulo", "preço", "quantidade"],
    };
  },
  computed: {
    somaPedido: function () {
      return this.carrinho.reduce(function (accumulator, filme) {
        return accumulator + filme.valor * filme.quantidade;
      }, 0);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
