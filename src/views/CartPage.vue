<script setup>
import BigNumber from 'bignumber.js'
import { formatMoney } from 'accounting'
import { cartStore } from '@/stores/cart'

const cartItems = cartStore().items
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
  <v-layout class="layout">
    <v-container v-for="(item, index) in cartItems" :key="index" class="container">
      <v-row v-if="cartStore().ids[index].quantity > 0">
        <v-col sm="2">
          <v-img
            :src="item.image"
            height="100px"
           />
        </v-col>
        <v-col sm="4">
          <h2>{{ item.title }}</h2>
          <h4>Brand: {{ item.brand }}</h4>
          <p class="my-2">Price: {{ formatPrice(item.regular_price.value) }}</p>
          <p class="my-2">
            <v-chip @click="handleRemove(item, index)" class="mr-2">
              -
            </v-chip>
            {{ cartStore().ids[index].quantity }}
            <v-chip @click="handleAdd(item, index)" class="ml-2">
              +
            </v-chip>
          </p>
        </v-col>
        <v-divider class="my-8" />
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          Total price: {{ formatPrice(cartStore().totalPrice) }}
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<style scoped lang="scss">
.layout {
  max-width: 100%;
  min-width: 100%;
  flex-direction: column;
}
</style>
