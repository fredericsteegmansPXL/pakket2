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
  <div class="detail">
    <div class="img">
      <img :src="product.afbeelding"/>
    </div>
    <div class="description">
        <h1>{{ product.titel }}</h1>
        <p>{{ product.omschrijving }}</p>
      <div class="add">
        <router-link to="/cart"><button class="check">checkout</button></router-link>
        <div v-if="auth.loggedIn">
          <button @click="spaceShipStore.addToCart(product.id)">+</button>
          <button @click="spaceShipStore.removeFromCart(product.id)">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";

.detail{
  height: 100vh;
  width: 100%;
  background-color: $white;
  margin: 0 auto;
  padding: 10rem 13rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .img{
    width: 60%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #f3f3f3;
    img{
      width: 80%;
    }
  }
  .description{
    width: 35%;
    padding-top: 2rem;
    p {
      font-family: Arial, sans-serif;
      font-weight: 100;
      margin-top: 2rem;
    }
    .add {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      button {
        background-color: $bg;
        color: $white;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        border: solid 2px $bg;
        margin-right: 1rem;

        &:hover {
          background-color: $white;
          color: $bg;
        }
      }
      .check {
        padding: 1rem 2rem;
        font-size: 14pt;
      }
    }
  }

}
</style>
