<template>
<div class="container">
    <table class="table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Transactions</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(accounty) in accounts" :key="accounty.id">
                <td>{{accounty.id}}</td>
                <td>{{accounty.name}}</td>
                <td></td>
                <td><button>Inserir transação</button></td>
            </tr>
        </tbody>
    </table>
</div>

<div>
    <h1>New Account</h1>
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" v-model="account.name"> 
    <button @click="salvaAccount">Save</button>

</div>
</template>
<script>

import { ref, toRefs, reactive, onMounted } from "vue";
import api from '../services/manager-api'
export default {
 
     setup() {

        const accounts = ref({})

        const account = ref({})

        const methods = reactive({
            async refresh(){
                const {data} = await api.list()
                accounts.value = data;
            }
        })

        function salvaAccount() {  
           //api.save(account.value).then(response => this.account.id = response.data.id);
           api.save(account.value).then(response => console.log(response));

         
           methods.refresh()
        }

        onMounted( () => methods.refresh())

        return{
            ...toRefs(methods),
            accounts,account,salvaAccount
            
            };
    },
            
}
</script>
<style scoped>
.container {
    padding-top: 50px;
}
table, th, td {
  border: 1px solid black;
}

th {
  background-color: #04AA6D;
  color: white;
}
</style>