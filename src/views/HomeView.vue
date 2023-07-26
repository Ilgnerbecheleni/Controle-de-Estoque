<script >

import MenuItem from '../components/MenuItem.vue';
// Dados do gráfico

import axios from 'axios';

export default {
  components:{
    MenuItem,
  },
  data() {
    return {
      totalProdutos: 0,
      estoqueTotal: 0,
    };
  },
  async mounted() {
    try {
      await this.fetchTotalProdutos();
    } catch (error) {
      console.error('Erro ao buscar total de produtos:', error);
    }
  },
  methods: {
    async fetchTotalProdutos() {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        this.totalProdutos = response.data.length;
        this.estoqueTotal = this.calculateEstoqueTotal(response.data);
      } catch (error) {
        console.error('Erro ao buscar total de produtos:', error);
      }
    },
    calculateEstoqueTotal(produtos) {
      let total = 0;
      for (const produto of produtos) {
        total += produto.quantidade * produto.preco;
      }
      return total.toFixed(2);
    },
  },
};



</script>

<template>
    <MenuItem  />
  <main class="home">
   <h1 class="home-title">Dashboard</h1>
   <section class="cards">
    <div class="card-info estoque-tot">
    <!-- Card -->
    <h2>Estoque Total</h2>
    <h2>R$ {{ estoqueTotal }}</h2>
   </div>
   <div class="card-info prod-cadastrado">
    <!-- Card -->
    <h2>Produtos Cadastrados</h2>
    <h2>{{ totalProdutos }}</h2>
  </div>
 
    <div class="card-info">
    <!-- Card -->
    <h2>Vendas no dia</h2>
    <h2>R$  0</h2>
   </div>
   <div class="card-info vendas-mes">
    <!-- Card -->
    <h2>Vendas no mês</h2>
    <h2>R$  0</h2>
   </div>

   </section>
   <div class="chart">
    <GChart :data="chartData" :options="chartOptions" type="ColumnChart"  />
   </div>
  
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

@media only screen  and (max-width:508px) {
  .chart{
    width: 400px;
  }
}


</style>