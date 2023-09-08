<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <v-layout class="main">
    <header-component title="Catalog"/>
  </v-layout>
  <RouterView />
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  padding-top: 80px;
}
</style>
