<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="usuarioestaLogado">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class = "nav-item">
            <router-link to="/gerentes" class="nav-link">
              Gerentes
            </router-link>
          </li>
          <li class="nav-item">
            <a 
            href = "#" 
            class = "nav-link"
            @click.prevent="efetuarLogout">Logout</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cadastre-se" class="nav-link">
            Registre-se
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default{
  methods:{
    efetuarLogout (){
      localStorage.removeItem('token')
      this.$router.push({ name : 'login' })

    }
  },
  computed:
//propriedade dinâmica que mudará de acordo com a interação do usuário ou usuária, 
//iremos inseri-la dentro de computed em <script>, ou seja, dentro das propriedades computadas.
  {

    usuarioestaLogado (){
//validar se usuário está logado para mostrar barra
      return Boolean(localStorage.getItem('token'))
    }
  }

}

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
