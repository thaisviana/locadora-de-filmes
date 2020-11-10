<template>
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

            <b-card-text>
              <b-icon icon="star-fill" variant="warning" v-for="estrelas in filme.avaliacao" :key="estrelas"></b-icon>
              <b-icon icon="star" variant="warning" v-for="estrelas_vazadas in 5 - filme.avaliacao" :key="'star'+estrelas_vazadas"></b-icon>
            </b-card-text>
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
</template>

<script>
export default {
  name: 'ListarFilmes',
  data(){
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
      }
  },
  props: {
    carrinho: Array,
  },
  methods:{
      adicionarAoCarrinho: function (filme) {
        let carrinho_local =  this.carrinho 
        if (filme.estoqueDisponivel > 0) {
            let indexFilme = carrinho_local.findIndex((obj) => obj.id == filme.id);
            filme.quantidade = (filme.quantidade || 0) + 1;
            if (indexFilme == -1) {
            filme.preço = `R$${filme.valor},00`;
            carrinho_local.push(filme);
            this.$emit('update:carrinho', carrinho_local);
            } else {
            carrinho_local.splice(indexFilme, 1, filme);
            this.$emit('update:carrinho', carrinho_local);
            }
            filme.estoqueDisponivel -= 1;
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
