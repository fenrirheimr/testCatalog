<script setup>
import { defineEmits } from 'vue'
defineProps({
  brands: {
    type: Object,
  }
})

const emit = defineEmits(['selectBrand'])
const handleSelectBrand = (item) => {
  emit('selectBrand', item)
}
</script>

<template>
  <v-list lines="two">
    <v-list-item title="All brands" @click="handleSelectBrand(null)"/>
    <v-list-item
        v-for="(item, index) in brands"
        :key="index"
        :title="item.title"
        :subtitle="item.code"
        @click="handleSelectBrand(item)"
    />
  </v-list>
</template>

<style scoped lang="scss">
</style>
