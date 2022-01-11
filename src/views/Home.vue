<template>
  <div class="container">
    <div class="jumbotron mt-2">
      <h1 class="display-4">Bem-vindo!</h1>
      <p>Aplicação disponível para listagem dos gerentes do banco.</p>
    </div>
    <button class = "btn btn-danger" @click = "efetuarLogout">Sair</button>
  </div>
</template>

<script>
  import { logoutMixin } from '@/mixins'
    export default {
        name: 'home',
        mixins: [logoutMixin]
    }
</script>
