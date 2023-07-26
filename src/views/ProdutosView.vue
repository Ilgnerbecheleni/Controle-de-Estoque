<template>
  <div>
    <MenuItem />

    <div class="about">
      <h1>Lista de Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Código de Barras</th>
            <th>Criado em</th>
            <th>Atualizado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos" :key="produto.idProduto">
            <td>{{ produto.idProduto }}</td>
            <td>{{ produto.nome }}</td>
            <td>R$ {{ produto.preco }}</td>
            <td>{{ produto.quantidade }}</td>
            <td>{{ produto.barCode }}</td>
            <td>{{ formatarData(produto.createdAt) }}</td>
            <td>{{ formatarData(produto.updatedAt) }}</td>
            <td class="buttons">
              <!-- Botão de Editar -->
              <button @click="editProduct(produto)" class="material-icons">edit</button>

              <!-- Botão de Excluir -->
              <button @click="showDeleteModal(produto)" class="material-icons">delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal for delete confirmation -->
      <ConfirmModal v-if="showDeleteConfirm" @confirmed="deleteProduct" @canceled="cancelDelete">
        Tem certeza que deseja excluir o produto?
      </ConfirmModal>
      <!-- Modal para editar produto -->
      <EditModal v-if="showEditModal" :produto="produtoSelecionado" @produto-atualizado="atualizarProduto" @fechar="fecharModalEdicao" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MenuItem from '@/components/MenuItem.vue';
import ConfirmModal from '@/components/ConfirmModal.vue';
import EditModal from '@/components/EditModal.vue';
export default {
  components: {
    MenuItem,
    ConfirmModal,
    EditModal,
  },
  data() {
    return {
      produtos: [],
      showDeleteConfirm: false,
      productToDelete: null,
      showEditModal: false,
      produtoSelecionado: null,
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
    formatarData(data) {
      const dateObj = new Date(data);
      const dataFormatada = dateObj.toLocaleDateString();
      const horaFormatada = dateObj.toLocaleTimeString();
      return `${dataFormatada} - ${horaFormatada}`;
    },
    async fetchProdutos() {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        this.produtos = response.data;
      } catch (error) {
        console.error('Erro ao buscar lista de produtos:', error);
      }
    },
    showDeleteModal(produto) {
      this.productToDelete = produto;
      this.showDeleteConfirm = true;
    },
    async deleteProduct() {
      if (this.productToDelete) {
        try {
          // Perform the delete request using axios.
          await axios.delete(`http://localhost:3000/produtos/${this.productToDelete.idProduto}`);
          
          // Remove the deleted product from the list
          this.produtos = this.produtos.filter((produto) => produto.idProduto !== this.productToDelete.idProduto);
          
          console.log('Product deleted:', this.productToDelete);
        } catch (error) {
          console.error('Erro ao excluir o produto:', error);
        } finally {
          this.showDeleteConfirm = false;
          this.productToDelete = null;
        }
      }
    },
    cancelDelete() {
      this.showDeleteConfirm = false;
      this.productToDelete = null;
    },
    editProduct(produto) {
      this.produtoSelecionado = { ...produto };
      this.showEditModal = true;
    },
    fecharModalEdicao() {
      this.showEditModal = false;
      this.produtoSelecionado = null;
    },
    // Método para atualizar a lista local de produtos após edição
    atualizarProduto(produtoAtualizado) {
      // Encontre o índice do produto na lista local de produtos
      const index = this.produtos.findIndex((produto) => produto.idProduto === produtoAtualizado.idProduto);
      if (index !== -1) {
        // Atualize o produto na lista local com o produto atualizado
        this.produtos.splice(index, 1, produtoAtualizado);
      }
    },
  },
};
</script>

<style>
/* Estilos para a tabela (opcional) */

/* Importe o arquivo de estilos do Material Design */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  text-align: center;
}

.about {
  margin-left:235px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
