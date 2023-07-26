<template>
    <div class="modal">
      <div class="modal-content">
        <slot></slot>
        <div class="modal-buttons">
          <button @click="confirm" class="confirm">Confirmar</button>
          <button @click="cancel">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      confirm() {
        this.$emit('confirmed');
      },
      cancel() {
        this.$emit('canceled');
      },
    },
  };
  </script>
  
  <style scoped>

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
  
  button {
    margin-left: 5px;
    width: 100px;
    height: 30px;
    border-radius: 4px;
    border:none;
    text-transform: uppercase;
    font-weight: bolder;
  }
  .confirm{
    background: #3c8dbc;
    color:white;
    text-transform: uppercase;
  }
  </style>
  