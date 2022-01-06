//responsável por criar a instância do axios a ser usada por diferentes componentes
//sem precisar importare analisar a cada componente

import axios from 'axios'

const http = axios.create({
//obj http faz requisições para back-end
//criar uma nova instância nos permite definir algumas propriedades comuns para todas as requisições
baseURL: 'http://localhost:8000/',
//baseURL - todas as nossas requisições começam do mesmo jeito: 'http://localhost:8000'
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
//Quando uma requisição for protegida, 
//precisaremos enviar um headers cujo nome é Authorization e o valor é o nosso token em si, concatenado com Bearer    
    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default http