<template>
<div class="container">


<h1>User Menu</h1>
  <select name="userMenu" id="userMenu">
    <option v-for="option in options" :key="option">{{option}}</option>
  </select>

</div>
</template>

<script>
export default {
  props:{
         options:{type:Array,required:true}
    },
};
</script>
<style scoped>
.conteiner{
     padding-top: 522px;
    background: chartreuse;
}
</style>