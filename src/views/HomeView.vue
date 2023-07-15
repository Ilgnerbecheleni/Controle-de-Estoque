<script setup lang="ts">
import { ref } from 'vue';
import { GChart } from 'vue-google-charts'

// Dados do gráfico
const chartData = ref([
  ['Ano', 'Vendas', 'Despesas'],
  ['2015', 1000, 400],
  ['2016', 1170, 460],
  ['2017', 660, 1120],
  ['2018', 1030, 540],
]);

// Opções do gráfico
const chartOptions = ref({
  title: 'Vendas e Despesas',
  width: 810,
  height: 400,
  
});

// Tipo do gráfico
const chartType = ref('ColumnChart');


</script>

<template>
 
  <main class="home">
   <h1 class="home-title">Dashboard</h1>
   <section class="cards">
    <div class="card-info">
    <!-- Card -->
    <h2>Vendas no dia</h2>
    <h2>R$  2300</h2>
   </div>
   <div class="card-info vendas-mes">
    <!-- Card -->
    <h2>Vendas no mês</h2>
    <h2>R$  23.000</h2>
   </div>
   <div class="card-info estoque-tot">
    <!-- Card -->
    <h2>Estoque Total</h2>
    <h2>R$  93.000</h2>
   </div>
   <div class="card-info prod-cadastrado">
    <!-- Card -->
    <h2>Produtos Cadastrados</h2>
    <h2>100</h2>
   </div>
 
   </section>
   <GChart :data="chartData" :options="chartOptions" type="ColumnChart" class="chart" />
  </main>
</template>


<style scoped>
.home{
  margin-left: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-title{
  margin-left: 20px;
  text-transform: uppercase;

}

.card-info{
  display: flex;
  justify-content: space-between;
padding:20px ;
  max-width: 350px;
  align-items: center;
  height: 150px;
  border-radius: 8px;
  border:1px solid #aaa;
  background: #3498db ;
  color:white;
  box-shadow: 0px 10px 56px 30px rgba(0,0,0,0.1),0px 10px 15px 6px rgba(0,0,0,0.1);
}

.vendas-mes{
  background: #0a0db9;
}

.prod-cadastrado{
  background: #585996;
}

.estoque-tot{
  background: #7576c4;
}

.cards{
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 800px;
  gap:20px;
}

.chart{
  width: 800px;
  box-shadow: 0px 10px 56px 30px rgba(0,0,0,0.1),0px 10px 15px 6px rgba(0,0,0,0.1);
  
}


</style>