import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/account/'
})

export default {

    list(){
        return api.get('/list')
    },

    save(account){
        console.log("O que chegou aqui foi" + account.name)
      return api.post('/save',account)
    }

}


