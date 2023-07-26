<template>
    <div>
      <MenuItem />
  
      <div class="entrada">
        <h1>Lista de Produtos</h1>
        <table>
          <!-- Tabela dos produtos -->
        </table>
  
        <!-- Card de Produtos Cadastrados -->
        <div class="card-info prod-cadastrado">
          <h2>Produtos Cadastrados</h2>
          <h2>{{ produtos.length }}</h2>
        </div>
  
        <!-- Card de Estoque Total -->
        <div class="card-info estoque-tot">
          <h2>Estoque Total</h2>
          <h2>R$ {{ calcularValorTotalEstoque() }}</h2>
        </div>
  
        <!-- Formulário para atualizar quantidade do produto -->
        <div class="update-form">
          <h2>Atualizar Quantidade do Produto</h2>
          <form @submit.prevent="atualizarQuantidade">
            <label for="codigoBarra">Código de Barras:</label>
            <input type="text" v-model="codigoBarra" required>
  
            <label for="quantidade">Quantidade:</label>
            <input type="number" v-model="quantidade" required>
  
            <button type="submit">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MenuItem from '@/components/MenuItem.vue';
  
  export default {
    components: {
      MenuItem,
    },
    data() {
      return {
        produtos: [],
        codigoBarra: '',
        quantidade: null,
      };
    },
    async mounted() {
      try {
        await this.fetchProdutos();
      } catch (error) {
        console.error('Erro ao buscar lista de produtos:', error);
      }
    },
    methods: {
      async fetchProdutos() {
        try {
          const response = await axios.get('http://localhost:3000/produtos');
          this.produtos = response.data;
        } catch (error) {
          console.error('Erro ao buscar lista de produtos:', error);
        }
      },
  
      calcularValorTotalEstoque() {
        // Inicializa o valor total como zero
        let valorTotal = 0;
  
        // Itera sobre a lista de produtos
        this.produtos.forEach((produto) => {
          // Verifica se o produto possui uma quantidade válida
          if (produto.quantidade !== null && !isNaN(produto.quantidade)) {
            // Calcula o valor do produto multiplicando o preço pela quantidade
            const valorProduto = produto.preco * produto.quantidade;
  
            // Soma o valor do produto ao valor total do estoque
            valorTotal += valorProduto;
          }
        });
  
        // Retorna o valor total formatado com duas casas decimais
        return valorTotal.toFixed(2);
      },
  
      async atualizarQuantidade() {
        if (this.codigoBarra && this.quantidade !== null) {
          try {
            await axios.patch(`http://localhost:3000/produtos/atualizar-quantidade`, {
              codigoBarra: this.codigoBarra,
              quantidade: this.quantidade,
            });
  
            // Após a atualização bem-sucedida, recarregue a lista de produtos.
            await this.fetchProdutos();
  
            // Limpe os campos do formulário após a atualização.
            this.codigoBarra = '';
            this.quantidade = null;
          } catch (error) {
            console.error('Erro ao atualizar a quantidade do produto:', error);
          }
        }
      },
    },
  };
  </script>
  
  <style>
  /* Estilos para a tabela (opcional) */
  .entrada {
    padding-left: 240px;
  }
  /* Estilos adicionais conforme necessário */
  </style>
  