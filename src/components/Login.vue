<template>
    <div class="w-25">
        <div class="form-group">
            <label for="email-input">E-mail</label>
            <input v-model="login.email" type="email" class="form-control" id="email-input" placeholder="E-mail">
        </div>
        <div class="form-group">
            <label for="password-input">Senha</label>
            <input v-model="login.senha" type="password" class="form-control" id="password-input" placeholder="Senha">
        </div>
        <button v-on:click="loginAction(login)" class="btn btn-primary">Login</button>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'LoginComponent',
    data() {
        return {
            login: {
            }
        }
    },
    computed: {
        ...mapGetters('Authentication', [
            'getAuthenticated'
        ]),
    },
    methods: {
      ...mapActions('Authentication', [
          'loginAction'
      ])
    },
    watch: {
      getAuthenticated(value) {
        if (value) {
          this.$router.push({ name: 'Home'});
        }
      }
    }
}
</script>
