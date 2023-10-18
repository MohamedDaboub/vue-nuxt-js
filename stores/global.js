import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 0,
        cart: [],
        
    }),
    actions: {
        increment() {
            this.count++
        },
        setCart (ids){
            // this.cart = ids
            if (!ids || !Array.isArray(ids)) {
                return (id)
            }
            this.cart = ids
        
        },
        addToCart(id) {
            // prevent recipe ti be added multiple times
            if (!this.cart.includes(id))
                this.cart.push(id)
                localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        removeFromCart(id) {
            const index = this.cart.indexOf(id)
            this.cart.splice(index, 1)             
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        getCart() {
            const cart = localStorage.getItem('cart')
            if (cart) {
                this.cart = JSON.parse(cart)
            }
        },
        clearCart() {
            localStorage.removeItem('cart')
            this.cart = []
        }

    },
})