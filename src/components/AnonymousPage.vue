<template>
  <div class="info">
    <p>Você não está logado, faça <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>

export default {
    name: 'anonymous-page'
}

</script>

<style>
  .info {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>