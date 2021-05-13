<template>
  <b-card-group columns>
    <b-card
      v-for="filme in filmes"
      :key="filme.id"
      :title="filme.titulo"
      :img-src="filme.imagem"
      :img-alt="filme.descricao"
      style="max-width: 18rem"
      img-top
    >
      <!-- <b-card-text>
          {{ filme.descricao }}
        </b-card-text> -->
      <b-card-text> R${{ filme.valor }},00 </b-card-text>
      <b-card-text>
        <b-icon
          icon="star-fill"
          v-for="n in filme.avaliacao"
          @click="avaliar(filme, n)"
          :key="n + '-fill'"
          variant="warning"
        ></b-icon>
        <b-icon
          icon="star"
          v-for="n in 5 - filme.avaliacao"
          @click="avaliar(filme, n + filme.avaliacao)"
          :key="n + '-'"
          variant="warning"
        ></b-icon>
      </b-card-text>
      <b-button
        block
        v-if="filme.estoqueDisponivel > 1"
        variant="dark"
        @click="adicionarAoCarrinho(filme)"
        >ALUGAR</b-button
      >
      <b-button
        block
        v-else-if="filme.estoqueDisponivel == 1"
        variant="warning"
        @click="adicionarAoCarrinho(filme)"
        >ÚLTIMA UNIDADE</b-button
      >
      <b-button block v-else variant="danger">ESGOTADO</b-button>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "ListaFilmes",
  props:["carrinho"],
  data() {
    return {
      filmes: [
        {
          id: 1,
          estoqueDisponivel: 3,
          titulo: "Hulk",
          descricao: "Filme Ruim",
          valor: 2,
          avaliacao: 1,
          imagem: "https://i.imgur.com/0uthCmp.jpg",
        },
        {
          id: 2,
          estoqueDisponivel: 2,
          titulo: "Homem de Ferro",
          descricao: "Homem de Ferro",
          valor: 10,
          avaliacao: 3,
          imagem: "https://i.imgur.com/OA8pDFM.jpg",
        },
        {
          id: 3,
          estoqueDisponivel: 4,
          titulo: "Thor",
          descricao: "Bonito ",
          valor: 20,
          avaliacao: 3,
          imagem: "https://i.imgur.com/mt4ZRzw.jpg",
        },
        {
          id: 4,
          estoqueDisponivel: 2,
          titulo: "Capitão América",
          descricao: "Um filme de capitão",
          valor: 40,
          avaliacao: 3,
          imagem: "https://i.imgur.com/UFmSVtZ.jpg",
        },
        {
          id: 5,
          estoqueDisponivel: 9,
          titulo: "Doutor Estranho",
          descricao: "Magia",
          valor: 10,
          avaliacao: 4,
          imagem: "https://i.imgur.com/pVEDruM.jpg",
        },
        {
          id: 6,
          estoqueDisponivel: 6,
          titulo: "Pantera Negra",
          descricao: "Um segundo filme de força",
          valor: 10,
          avaliacao: 5,
          imagem: "https://i.imgur.com/JOSEGKf.jpg",
        },
      ],
    };
  },
  methods: {
      adicionarAoCarrinho: function (filme) {
      let indexFilme = this.carrinho.findIndex((f) => f.id == filme.id);
      filme.estoqueDisponivel -= 1;
      if (indexFilme >= 0) {
        filme.quantidade += 1;
        this.carrinho.splice(indexFilme, 1, filme);
      } else {
        filme.quantidade = 1;
        this.carrinho.push(filme);
      }
    },
    avaliar(filme, nEstrela){
      filme.avaliacao = nEstrela
    },
  },
};
</script>

<style>
.card-body {
  padding: 1.25rem 0 0 0 !important;
}
.card {
  overflow: hidden;
}
img:hover {
  transform: scale(1.1);
  transform-origin: 50% 50%;
}
img {
  transition: transform 0.2s; /* Animation */
  display: block;
}
</style>