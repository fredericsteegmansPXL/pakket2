<script setup>
import { useAuthStore } from '@/stores/auth.js';
import { useRouter } from 'vue-router';
import { useSpaceShipStore } from '@/stores/spaceShipStore.js';
import { storeToRefs } from 'pinia'

const spaceShipStore = useSpaceShipStore()

const {getProductsInCart} = storeToRefs(spaceShipStore)

console.log('getProductsInCart', getProductsInCart.value)
// get all the titles example
const names = getProductsInCart.value.map((product) => ({name: product.titel}))

// example reroute on not logged in
const auth = useAuthStore()
const router = useRouter()
if (!auth.loggedIn) {
router.push('profiel')
}
</script>

<template>
  <h1>Dit is de CART pagina</h1>
  <h2 v-for="product in getProductsInCart" > {{ product }}</h2>
</template>

<style scoped>

</style>