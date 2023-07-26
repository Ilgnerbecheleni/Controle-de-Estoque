<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Editar Produto</h2>
      <form @submit.prevent="updateProduct">
        <label for="nome">Nome:</label>
        <input type="text" v-model="editedProduct.nome" required>

        <label for="preco">Preço:</label>
        <input type="number" v-model="editedProduct.preco" required>

        <label for="quantidade">Quantidade:</label>
        <input type="number" v-model="editedProduct.quantidade" required>

        <label for="barCode">Código de Barras:</label>
        <input type="text" v-model="editedProduct.barCode" required>

        <div class="modal-buttons">
          <button type="submit">Salvar</button>
          <button @click="cancelEdit">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: {
    produto: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedProduct: { ...this.produto },
    };
  },
  methods: {
    updateProduct() {
      axios
        .patch(`http://localhost:3000/produtos/${this.editedProduct.idProduto}`, this.editedProduct)
        .then(() => {
          // Produto atualizado com sucesso, emitindo o evento para atualizar na lista de produtos
          this.$emit('produto-atualizado', this.editedProduct);
          this.closeModal();
        })
        .catch((error) => {
          console.error('Erro ao atualizar o produto:', error);
        });
    },
    cancelEdit() {
      this.closeModal();
    },
    closeModal() {
      this.$emit('fechar');
    },
  },
};
</script>
<style scoped>
/* Estilos para o modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
  z-index: 9999; /* Valor alto para garantir que o modal esteja acima de outros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff; /* Fundo branco para o conteúdo do modal */
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px; /* Largura máxima do modal */
  width: 100%;
}

h2 {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

button {
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Estilos adicionais conforme necessário */
</style>