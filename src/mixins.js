//Mixins são uma forma flexível de distribuir funcionalidade reutilizável em diversos componentes Vue

export const logoutMixin = {
//reaproveitar o comportamento do método em outros componentes
    methods: {
        efetuarLogout () { 
            this.$provedor.commit('DESLOGAR_USUARIO')
            this.$router.push({ name: 'login' })

        }
    }  
}