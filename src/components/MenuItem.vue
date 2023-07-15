<template>
    <nav>
        <img src="../assets/logo.png" alt="logo sistema" class="img-logo">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cadastroProduto">Cadastro Produtos</RouterLink>
        <RouterLink to="/registroentrada">Registro Entrada</RouterLink>
        <RouterLink to="/venda">Venda</RouterLink>
        <RouterLink to="/login">Logout</RouterLink>
      </nav>
</template>

<style scoped>

nav {
 width: 200px;
 display: flex;
 justify-content: start;
 gap: 30px;
 align-items: center;
 background-color:#3498db ;
 color: white;
 padding:15px;
 flex-direction: column;
 position: fixed;
 height: 100vh;
}

nav a{
    text-decoration: none;
    text-transform: uppercase;
    color: aliceblue;
font-weight: 500;
}
nav a:hover{
    transform: scale(1.08);
    color: black;
    font-weight: bold;
}
.img-logo{
    max-width:70%;
    border: none;
    border-radius: 100%;
}
</style>