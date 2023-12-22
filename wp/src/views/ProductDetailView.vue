<script setup>
import producten from "../../producten.json";
import { ref } from "vue";
import { useSpaceShipStore } from "@/stores/spaceShipStore.js";
import { useAuthStore } from "@/stores/auth.js";
import { useRoute } from "vue-router";

const route = useRoute();
const spaceShipStore = useSpaceShipStore();
const auth = useAuthStore();

const product = ref(producten.filter((p) => p.id == route.params.id)[0]);
</script>

<template>
  <div>
    {{ product }}
  </div>
  <div v-if="auth.loggedIn">
    <button @click="spaceShipStore.addToCart(product.id)">+</button>
    <button @click="spaceShipStore.removeFromCart(product.id)">-</button>
  </div>
</template>

<style scoped></style>
