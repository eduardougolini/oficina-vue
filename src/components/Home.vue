<template>
  <div class="info">
    <p v-if="getAuthenticated">Você está logado, clique <span v-on:click="logout()">aqui</span> para sair</p>
    <p v-if="!getAuthenticated">Você não está logado, faça <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>

export default {
    name: 'home',
    computed: {
      getAuthenticated () {
        return this.$store.state.authentication.authenticated;
      }
    },
    methods: {
      logout () {
        this.$store.state.authentication.authenticated = false;
      }
    }
}

</script>

<style>
  span {
    text-decoration: underline;
    cursor: pointer;
  }

  .info {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>