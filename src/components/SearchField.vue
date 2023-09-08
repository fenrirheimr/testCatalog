<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['handleBrand'])
const handleInputBrand = (event) => {
  emit('handleBrand', event.target.value)
}
</script>

<template>
  <v-form class="d-flex">
    <v-text-field
        label="Search"
        required
        hide-details
        variant="solo"
        @input="handleInputBrand"
    ></v-text-field>
  </v-form>
</template>

<style scoped lang="scss">
</style>
