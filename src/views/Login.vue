<template>
  <div class="login">
    <h1>Controle de estoque</h1>
    <img src="../assets/undraw_bear_market_ania.png" alt="" class="imgLogin">
    <form action="" class="formLogin">
        <input type="text" v-model="usuario" placeholder="login" class="inputTxt">
        <input type="text" v-model="senha" placeholder="senha" class="inputTxt">
        <RouterLink to="/"><button>Entrar</button></RouterLink>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.login{
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap:20px;
}
.imgLogin{
    max-width: 400px;
    max-height: 400px;
    
}
.formLogin{
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
}
.inputTxt{
padding-left: 4px;
width: 300px;
border-radius:5px ;
height: 35px;
font-size:16px;
background:#f7f8fa;
border:none;
text-align: center;
}

.formLogin button{
    width: 100px;
    height: 30px;
    border-radius:5px ;
    background:#3498db;
    color: #f7f8fa;
    border: none;
    text-transform: uppercase;
    font-weight: bold;  

}

</style>