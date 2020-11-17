<template>
    <b-container>
        <b-row></b-row> 
        <b-row>
            <b-col>
                <b-img :src="filme.imagem" fluid :alt="filme.titulo"></b-img>
            </b-col>
            <b-col>
                <h1>{{ filme.titulo }}</h1>
                <h3> <span>Descrição : </span>{{ filme.descricao }}</h3>
                <p><span>Valor : </span> R${{ filme.valor }},00</p>
                 <p><span>Avaliação : </span></p>
                <p>
                    <b-icon icon="star-fill" variant="warning" v-for="estrelas in filme.avaliacao" :key="estrelas"></b-icon>
                    <b-icon icon="star" variant="warning" v-for="estrelas_vazadas in 5 - filme.avaliacao" :key="'star'+estrelas_vazadas"></b-icon>
                </p>

            </b-col>
            
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'Filme',
  data(){
      return { 
          id : this.$route.params.id.name,
          filme : this.$route.params.filme 
          }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
