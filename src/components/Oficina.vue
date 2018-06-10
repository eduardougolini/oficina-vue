<template>
    <div class="login-box mt-5">
        <h2 class="mt-3">Login</h2>
        <login-component></login-component>
    </div>
</template>

<script>

import LoginComponent from './Login'

export default {
    name: 'oficina',
    components: {
        LoginComponent
    }
}

</script>

<style>
    .login-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>
