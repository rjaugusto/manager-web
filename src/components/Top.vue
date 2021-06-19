<template>
  <div class="container">
    <div class="divLogo">
      <img alt="Vue logo" class="logo" src="../assets/logo.png" />
    </div>
    <div>
      <nav class="saldos">
        <li>
            <span>Total Bruto </span><br>
            <span>R$ 520.365,87</span>
        </li>
        <li><span>Valor Aplicado </span><br>
            <span>R$ 220.365,87</span></li>
        <li><span>Lucro Líquido</span><br>
            <span>R$ 365,87</span></li>
        <li><span>Rentabilidade </span><br>
            <span>82%</span></li>
      </nav>
    </div>
    <div>
      <nav class="conta">
        <li>Minha Carteira </li>
        <li>Conexões</li>
        <li>Conta</li>
      </nav>
    </div>
  </div>
  <hr/>
  <UserMenu options='["teste","Teste2"]' ></UserMenu>
</template>

<script>


import UserMenu from './UserMenu.vue';

export default {

  components:{UserMenu},

  setup() {
   
  },

  
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,100&display=swap');

.container{
    display: flex;
    justify-content:space-between;
    font-family: 'Montserrat', sans-serif;
}

.divLogo{
    padding-top: 5px;
    padding-left: 15px;
}

.logo {
  max-width: 150px;
  max-height: 100px;
  width: auto;
  height: auto;
}

span{
  text-align: center;
}

.saldos{
    display: flex;
  
}

.conta{
     display: flex;
    
}

li{ 
  list-style-type: none;
  padding-top: 20px;
  padding-right: 30px;
  padding-left: 80px;
}


</style>