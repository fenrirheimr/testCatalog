<script setup>
import { RouterLink } from 'vue-router'
import { cartStore } from '@/stores/cart'
defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
  <v-app-bar :elevation="2" :title="title">
    <template v-slot:title>
      <RouterLink to="/">{{ title }}</RouterLink>
    </template>
    <v-divider vertical class="ml-10 mr-5" />
    <template v-slot:append>
      <v-btn icon="mdi:mdi-cart" to="/cart" />
      <v-chip class="ml-3">{{ cartStore().count }}</v-chip>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">
.navigation {
  a {
    margin: 0 20px;
  }
}
</style>
