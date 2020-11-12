<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item @click="controla_aba(true)">Home</b-nav-item>
        <b-nav-item @click="controla_aba(false)">Carrinho</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: [ 'controla_aba' ],
  methods:{
  },
  created(){
    console.log(this.mostrarFilmes)
  }
}
</script>
