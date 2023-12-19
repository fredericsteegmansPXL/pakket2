import { defineStore } from 'pinia'
import producten from "../../producten.json";
import {computed, ref} from 'vue'

export const useSpaceShipStore = defineStore('spaceShipStore', () => {

    const allProducts = ref(producten)
    const productIdsInCart = ref([])

    const getProductsInCart = computed(() => {
        // get the ids as a set (no duplicates )
        const ids = new Set(productIdsInCart.value.map((prod) => prod.id))
        return [...ids].reduce((acc, value) => {
            // get the item
            const product = allProducts.value.find((prod) => prod.id === value)
            // get the amount it has been chosen
            const amount = productIdsInCart.value.find((prod) => prod.id === value)?.amount
            acc.push({...product, amount})
            return acc
        }, [])
    });

    const getCartCount = computed(() => productIdsInCart.value.reduce((acc, value) =>  acc + value.amount, 0 ))

    // mutators
    function addToCart(id) {
        // find the correct item
        const item = productIdsInCart.value.find((prod) => prod.id === id)
        if (!item) {
            productIdsInCart.value.push({id, amount: 1})
        } else {
            // find the index
            const index = productIdsInCart.value.indexOf(item)
            // replace the item
            productIdsInCart[index] = {...item, amount: item.amount++ }
        }
    }

    function removeFromCart(id) {
        // find the correct item
        const item = productIdsInCart.value.find((prod) => prod.id === id)

        if (item && item.amount > 1) {
            const index = productIdsInCart.value.indexOf(item)
            productIdsInCart[index] = {...item, amount: item.amount-- }
        } else {
            productIdsInCart.value = productIdsInCart.value.filter((prod) => prod.id !== id)
        }

    }

    function clearCart() {
        productIdsInCart.value.length = 0 // remove all refs and empty
    }


    return {allProducts, productIdsInCart, addToCart, removeFromCart, clearCart, getProductsInCart, getCartCount}

})