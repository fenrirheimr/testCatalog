<script setup>
import BigNumber from 'bignumber.js'
import { formatMoney } from 'accounting'
import { cartStore } from '@/stores/cart'

defineProps({
  products: {
    type: Array,
  }
})
const formatPrice = (num) => {
  const value = new BigNumber(num)
  return formatMoney(value, { symbol: "$", precision: 2, thousand: ".", decimal: "," });
}
const handleAdd  = (item, index) => {
  cartStore().add(item, index)
}
const handleRemove  = (item, index) => {
  cartStore().remove(item, index)
}
</script>

<template>
  <v-container class="container">
    <v-row v-if="products.length > 0">
      <v-col v-for="(item, index) in products" :key="index" sm="4">
        <v-card class="card">
          <v-img
              :src="item.image"
              height="200px"
          ></v-img>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            Brand {{ item.brand }}
          </v-card-subtitle>
          <v-card-text>
            {{ formatPrice(item.regular_price.value) }}
          </v-card-text>
          <v-card-actions v-if="cartStore().ids[index] && cartStore().ids[index].quantity > 0">
            <v-chip @click="handleRemove(item, index)" class="mr-2">
              -
            </v-chip>
            {{ cartStore().ids[index].quantity }}
            <v-chip @click="handleAdd(item, index)" class="ml-2">
              +
            </v-chip>
          </v-card-actions>
          <v-card-actions v-else>
            <v-btn @click="handleAdd(item, index)">В корзину</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-card class="card" text="nothing here yet" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.container {
  max-width: 100%;
  min-width: 100%;
}
</style>
