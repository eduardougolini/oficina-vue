<template>
    <div class="w-25">
        <div class="form-group">
            <label for="email-input">E-mail</label>
            <input v-model="email" type="email" class="form-control" id="email-input" placeholder="E-mail">
        </div>
        <div class="form-group">
            <label for="password-input">Senha</label>
            <input v-model="senha" type="password" class="form-control" id="password-input" placeholder="Senha">
        </div>
        <button v-on:click="loginAction()" class="btn btn-primary">Login</button>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            email: null,
            senha: null
        }
    },
    methods: {
        loginAction() {
            console.log(`Tentou logar com as credenciais "email: ${this.email} e senha: ${this.senha}`);
            axios.post('http://localhost:8081/login',{
                email: this.email,
                senha: this.senha
            }).then(response => {
                if (response.data.authenticated === true) {
                    this.$store.state.authentication.authenticated = true;

                    this.$router.push({ name: 'Home'});
                }
            });
        }
    }
}
</script>
