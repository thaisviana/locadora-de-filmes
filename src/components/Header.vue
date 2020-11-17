<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item >
          <router-link tag="nav" to="/">Home</router-link>
          </b-nav-item>
        <b-nav-item >Carrinho</b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/form">Formulario</router-link>
          </b-nav-item>
        <b-nav-item >
          <router-link tag="nav" to="/hello">Hello</router-link>
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
