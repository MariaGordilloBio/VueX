
<template>
<!--visual do nosso componente
two-way binding com v-model conecta inputs com propriedades do objeto-->
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div 
      class="form-group">
        <label for="nome">Nome</label>
        <input type="text" 
        class="form-control" 
        v-model="usuario.nome" />
      </div>
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
        <button 
        class="btn btn-primary" type="submit">Salvar</button>
     </form>
  </div>
</template>

<script>
//importando a biblioteca axios
//import http from "@/http";

//exportar o objeto que terá todas as configurações do componente
export default {

  data: function() {
    return {
      usuario: {
        nome: "",
        senha: "",
        email: "",
        }
    };
  },
   methods: {
    enviarFormulario () {
        //axios realiza post na url indicada do backend
        this.$http
        .post("auth/register", this.usuario)
        //axios retorna promise - then chama callback com resp do servidor
        .then(resposta => console.log(resposta))
        //captura de falha
        .catch(erro => console.log(erro))
      }
   }
};


</script>