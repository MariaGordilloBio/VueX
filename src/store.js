//store - aquele que será responsável pela monitoração do estado do usuário
//impedir que alteração fora de escopo aconteça
//VueX é padrão para controle de estado
import Vuex from 'vuex'
import Vue from 'vue'
//informa ao vue que use o vuex para estar operante na aeplicação e disponível
import http from '@/http'

Vue.use(Vuex)

const estado = {
//definimos o estado inicial da aplicação
/*single state tree - 
that is, this single object contains all your application level state and serves as the "single source of truth." */
    token: null,
    usuario: {}
}
//mutações em VueX são escritas em caixa alta e as ações não
const mutations = {
//alterar estado
/*Vuex mutations are very similar to events: each mutation has a string type and a handler.*/
    DEFINIR_USUARIO_LOGADO(state, {
// vue disponibiliza estado, token e usuario sãodados enviados dentro da mutação        
        token, usuario }) {
            state.token = token
            state.usuario = usuario
        },
    DESLOGAR_USUARIO (state) {
            state.token = null
            state.usuario = {}
        }
}
const actions = {
//Actions, que são as possíveis maneiras que permitem que o usuário altere um estado
//é a forma como a aplicação reage às ações do usuário
/*actions commit mutations - asynchronous operations */
            efetuarLogin ({ commit }, usuario) {
                return new Promise( (resolve, reject) => {
                    http.post('auth/login', usuario)
                        .then(response => {
                            commit('DEFINIR_USUARIO_LOGADO', {
                                token: response.data.access_token,
                                usuario: response.data.user
                        })
                        resolve(response.data)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
                })
            }
        }
    

export default new Vuex.Store({
    state: estado,
    mutations,
    actions,

})
