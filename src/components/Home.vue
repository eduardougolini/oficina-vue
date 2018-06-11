<template>
  <div class="info">
    <p v-if="getAuthenticated">Você está logado, clique <span v-on:click="logout()">aqui</span> para sair</p>
    <p v-if="!getAuthenticated">Você não está logado, faça <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'home',
    computed: {
        ...mapGetters('Authentication', [
            'getAuthenticated'
        ]),
    },
    methods: {
      ...mapActions('Authentication', [
          'logoutAction'
      ]),
      logout () {
        this.logoutAction();
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
