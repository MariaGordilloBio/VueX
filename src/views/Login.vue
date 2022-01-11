<template>
    <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div 
      class="form-group">
        <label for="senha">Senha</label>
        <input type="password" 
        class="form-control" 
        v-model="usuario.senha" />
      </div>
      <div 
        class="form.group">
         <label for="email">Email</label>
         <input type="email" 
         class="form-control" 
         v-model="usuario.email">
      </div>
      <p 
      class="alert alert-danger" 
      v-if="mensagemErro">{{ mensagemErro }}
      </p>
        <button 
        class="btn btn-primary brn-block" type="submit">Entrar</button>
      <router-link :to="{ name: 'novo.usuario' }">
        Não possui um cadastro? Cadastre-se aqui!
      </router-link>
     </form>
  </div>
</template>

<script>
//import http from '@/http' - não mais necessário desde que declarado como global - importado em main.js
//baseURL descrita no http - método necessita apenas de endpoint

export default{
    data(){
        return {
            usuario : {},
            mensagemErro: " "
        };
    },
    //código anterior omitido

    methods: {
        efetuarLogin() {
            this.$store
                .dispatch("efetuarLogin", this.usuario)
                .then(() => 
                    this.$router.push({ name: 'gerentes' }))
    //em caso de erro, mostrar mensagem ao usuário:
                .catch(erro => {
                  if (erro.request.status == 401) {
                    this.mensagemErro = "Login ou senha inválido(s)";
          }
        });
      }
    }
                 //.then(response => {
                     //console.log(response)
    //redireciona usuário para rota gerentes
    //armazena token no localstorage para não perder ao reccaregar
                     //localStorage.setItem('token', response.data.access_token) - VueX não usa LocalStorage
                     //this.$store.state.token = response.data.access_token
                     //this.$store.sate.usuario = response.data.user
                     //salvando token e usuario
                     //this.$router.push({ name: 'gerentes' })
                     //this.$store.commit('DEFINIR_USUARIO_LOGADO',{
                         //token: response.data.access_token,
                         //usuario: response.data.user })
                     //this.$router.push({name : 'gerentes'})
                     
};
            
</script>