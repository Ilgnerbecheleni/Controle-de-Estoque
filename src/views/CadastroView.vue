<script setup lang="ts">
import MenuItem from '../components/MenuItem.vue';

</script>
<template>
   <MenuItem  />
<section class="cadastro-prod">

  <form action="">

<div class="form-group">
  <label for="nome">Nome do produto :</label>
  <input type="text" class="input-produto">
</div>
<div class="form-group">
  <label for="nome">Fabricante :</label>
  <input type="text" class="input-produto">
</div>
<div class="form-group">
  <label for="nome">Preço compra :</label>
  <input type="number" class="input-produto">
</div>
<div class="form-group">
  <label for="nome">Preço venda :</label>
  <input type="number" class="input-produto">
</div>
<div class="form-group">
  <label for="nome">Codigo de barras :</label>
  <input type="text" class="input-produto">
</div>

<div class="form-group">
 <button class="button-form">Cadastrar</button>
 <button class="button-form clear">Limpar</button>
</div>


  </form>
</section>
</template>


<style>
.cadastro-prod{
  padding: 20px;
  margin-left: 250px;
}

.input-produto{
  width: 200px;
  height: 25px;
  margin: 10px;

}
.form-group{
  display: flex;
  align-items:center ;
  justify-content: space-between;
  max-width: 400px;
}

.button-form{
  background-color:#3c8dbc;
  color: white;
  border: none;
  padding: 4px;
  width:100px;
  height: 35px;
  margin-right: 10px;
  border-radius: 8px;
  text-transform: uppercase;
  margin-top: 20px;
  cursor:pointer;
}
.clear{
  background-color:#c51d63;
}
</style>
