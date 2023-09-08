import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', {
  state: () => {
    return {
      ids: [],
      items: []
    }
  },
  getters: {
    count() {
      return Object.keys(this.ids).reduce((acc, id) => {
        return acc + this.ids[id].quantity
      }, 0)
    },
    totalPrice() {
      return Object.keys(this.items).reduce((acc, id) => {
        return acc + this.items[id].regular_price.value * this.ids[id].quantity
      }, 0)
    },
  },
  actions: {
    add(item, index) {
      if (this.ids[index]) {
        this.ids[index].quantity += 1
      }
      else {
        this.ids[index] = {
          index,
          quantity: 1,
        }
        this.items.push(item)
      }
    },
    remove(item, index) {
      if (!this.ids[index])
        return

      this.ids[index].quantity -= 1

      if (this.ids[index].quantity === 0)
        return; this.items.indexOf(index)
    }
  }
})
