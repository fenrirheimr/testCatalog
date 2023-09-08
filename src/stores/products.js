import { defineStore } from 'pinia'
export const productsStore = defineStore('products', {
  state: () => {
    return {
      products: [
        {
          "type": "simple",
          "id": 0,
          "sku": "s1",
          "title": "Дешевая серая куртка",
          "regular_price": {
            "currency": "USD",
            "value": 10
          },
          "image": "/images/1.png",
          "brand": 9
        },
        {
          "type": "simple",
          "id": 1,
          "sku": "s1",
          "title": "Серая куртка",
          "regular_price": {
            "currency": "USD",
            "value": 27.12
          },
          "image": "/images/1.png",
          "brand": 9
        },
        {
          "type": "simple",
          "id": 2,
          "sku": "s2",
          "title": "Красная толстовка с капюшоном",
          "regular_price": {
            "currency": "USD",
            "value": 36.87
          },
          "image": "/images/2.png",
          "brand": 8
        },
        {
          "type": "simple",
          "id": 3,
          "sku": "s3",
          "title": "Жёлтая футболка",
          "regular_price": {
            "currency": "USD",
            "value": 28.91
          },
          "image": "/images/3.png",
          "brand": 2
        },
        {
          "type": "simple",
          "id": 4,
          "sku": "s4",
          "title": "Полосатая футболка",
          "regular_price": {
            "currency": "USD",
            "value": 41.23
          },
          "image": "/images/4.png",
          "brand": 7
        },
        {
          "type": "simple",
          "id": 5,
          "sku": "s5",
          "title": "Какая-то кофта",
          "regular_price": {
            "currency": "USD",
            "value": 88.00
          },
          "image": "/images/5.png",
          "brand": 3
        },
        {
          "type": "simple",
          "id": 6,
          "sku": "s6",
          "title": "Какая-то футболка",
          "regular_price": {
            "currency": "USD",
            "value": 127.41
          },
          "image": "/images/6.png",
          "brand": 6
        },
        {
          "type": "simple",
          "id": 7,
          "sku": "s7",
          "title": "Фиолетовый свитер",
          "regular_price": {
            "currency": "USD",
            "value": 123.40
          },
          "image": "/images/7.png",
          "brand": 5
        },
        {
          "type": "simple",
          "id": 8,
          "sku": "s8",
          "title": "Серая кофта на молнии",
          "regular_price": {
            "currency": "USD",
            "value": 92.32
          },
          "image": "/images/8.png",
          "brand": 1
        },
        {
          "type": "simple",
          "id": 9,
          "sku": "s9",
          "title": "Красный рюкзак",
          "regular_price": {
            "currency": "USD",
            "value": 53.40
          },
          "image": "/images/9.png",
          "brand": 2
        }
      ]
    }
  },
  getters: {
    // automatically infers the return type as a number
    getBrands(state) {
      return state.brands
    },
  },
})
