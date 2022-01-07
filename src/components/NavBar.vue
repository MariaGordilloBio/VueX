<!-- barra de navegação -->

<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
        <NavBarQuandoLogado v-if="usuarioestaLogado" />
        <NavBarQuandoDeslogado v-else />
    </div>
  </nav>
</template>

<script>

import NavBarQuandoLogado from "./NavBarQuandoLogado.vue";
import NavBarQuandoDeslogado from "./NavBarQuandoDeslogado.vue";


export default {
  components: {
      NavBarQuandoLogado,
      NavBarQuandoDeslogado
  },
  computed:
//propriedade dinâmica que mudará de acordo com a interação do usuário ou usuária, 
//iremos inseri-la dentro de computed em <script>, ou seja, dentro das propriedades computadas.
  {

    usuarioestaLogado (){
//validar se usuário está logado para mostrar barra
      return this.$store.state.token;
    }
  }
};


</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>