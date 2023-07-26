<script setup lang="ts">
import MenuItem from '../components/MenuItem.vue';
import axios from 'axios';
import { ref } from 'vue';

const form = ref({
  nome: '',
  preco: 0,
  quantidade: 0,
  barCode: '',
});

const handleSubmit = async () => {
  try {
    console.log(form.value)
    await axios.post('http://localhost:3000/produtos', form.value);
    alert('Produto cadastrado com sucesso!');
    clearForm();
  } catch (error) {
    alert('Erro ao cadastrar produto. Verifique os campos e tente novamente.');
  }
};

const clearForm = () => {
  form.value.nome = '';
  form.value.preco = 0;
  form.value.quantidade = 0;
  form.value.barCode = '';
};
</script>

<template>
  <MenuItem />
  <section class="cadastro-prod">
    <form @submit.prevent="handleSubmit">

      <div class="form-group">
        <label for="nome">Nome do produto:</label>
        <input type="text" class="input-produto" v-model="form.nome" required/>
      </div>
      <div class="form-group">
        <label for="preco">Preço:</label>
        <input type="number" class="input-produto" v-model="form.preco" min="1" max="999" required/>
      </div>
      <div class="form-group">
        <label for="quantidade">Quantidade:</label>
        <input type="number" class="input-produto" v-model="form.quantidade" required/>
      </div>
      <div class="form-group">
        <label for="barCode">Código de barras:</label>
        <input type="text" class="input-produto" v-model="form.barCode" required/>
      </div>

      <div class="form-group">
        <button class="button-form" type="submit">Cadastrar</button>
        <button class="button-form clear" type="button" @click="clearForm">Limpar</button>
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
  padding-left: 6px;

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
