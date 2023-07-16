<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import MenuItem from './components/MenuItem.vue';

const route = useRoute().name;

const isLoginRoute = route == 'login';


</script>

<template>

  <RouterView  />
</template>

<style scoped>
</style>
