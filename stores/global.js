import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 5,
        cart: []
    }),
    getters: {
        isInCart: (state) => {
            return (id) => state.cart.includes(id)
        }
    },
    actions: {
        increment () {
            this.count++
        },
        setCart(ids){
            if(!ids || !Array.isArray(ids)){
                this.cart = []
            }else{
            this.cart = ids
            }
        },
        /**
         * Add id to cart if not already in it
         * @param id
         */
        addToCart (id) {
            // Prevent recipe to be added multiple times
            if (!this.cart.includes(id)) {
                this.cart.push(id)
                localStorage.setItem('cart', JSON.stringify(this.cart))
            }
        },
        /**
         * Remove id from cart
         * Search id at a given index then splice cart array accordingly
         * @param id
         */
        removeFromCart (id) {
            const idIndex = this.cart.indexOf(id)
            if (idIndex === -1) return
            this.cart.splice(idIndex, 1)
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
    }
})