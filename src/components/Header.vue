<template>
   <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand @click="controlaFilmes = true">{{ title }}</b-navbar-brand>
      <b-navbar-nav right @click="atualizaControlaFilmes">
        <b-nav-item href="#" right class="h4 mb-2">
          <b-badge variant="warning">{{ quantidadeNoCarrinho }}</b-badge>
          <b-icon icon="cart4" variant="white"></b-icon>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: "Header",
    props: ["quantidadeNoCarrinho"],
    data(){
        return{
            title : "Locadora de Filmes VueJS",
            controlaFilmes : true
        }
    },
    methods:{
        atualizaControlaFilmes(){
            this.controlaFilmes = this.controlaFilmes ? false : true
            this.$emit("controlaFilmes", this.controlaFilmes)
        }
    }
}
</script>

<style>
.badge {
  position: absolute;
  right: 18px;
  top: 40px;
  z-index: 10;
}
.bi-cart4 {
  position: absolute;
  right: 35px;
}

</style>