<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item >
          <router-link to="/">Home</router-link>
          </b-nav-item>
        <b-nav-item >Carrinho</b-nav-item>
        <b-nav-item >
          <router-link to="/form">Formulario</router-link>
          </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  methods:{
  },
  created(){
    console.log(this.mostrarFilmes)
  }
}
</script>
