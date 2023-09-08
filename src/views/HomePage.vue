<script setup>
import { computed } from 'vue'
import SearchField from '@/components/SearchField.vue'
import BrandList from '@/components/BrandList.vue'
import ProductsList from '@/components/ProductsList.vue'

import { brandsStore } from '@/stores/brands'
import { productsStore } from '@/stores/products'
const brands = brandsStore().brands
const products = productsStore().products

let filteredProducts = computed({
  get() {
    return productsStore().products
  },
  set(value) {
    productsStore().products = value
  }
})
const handleSelectBrand = (item) => {
  if(item) {
    const code = item.code.split('_')[1]
    filteredProducts.value = products.filter(e => e.brand === Number(code))
  } else {
    filteredProducts.value = products
  }
}
const searchProduct = (text) => {
  if(text) {
    filteredProducts.value = products.filter(e => {
      return e.title.toLowerCase().includes(text.toLowerCase())
    })
  } else {
    filteredProducts.value = products
  }
}
</script>

<template>
  <v-row>
    <v-col>
      <search-field @handleBrand="searchProduct" />
    </v-col>
  </v-row>
  <v-divider class="my-8" />
  <v-layout class="container">
    <v-row>
      <v-col sm="2">
        <brand-list :brands="brands" @selectBrand="handleSelectBrand"/>
      </v-col>
      <v-col sm="10">
        <products-list :products="filteredProducts"/>
      </v-col>
    </v-row>
  </v-layout>
</template>
<style scoped lang="scss"></style>
