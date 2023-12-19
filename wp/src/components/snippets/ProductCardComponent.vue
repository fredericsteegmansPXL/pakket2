<script setup>
import {computed} from 'vue'
import { useSpaceShipStore } from '@/stores/spaceShipStore.js';
import { useAuthStore } from '@/stores/auth.js';

const spaceShipStore = useSpaceShipStore()
const auth = useAuthStore()
const props = defineProps(  ["titel", "prijs", "afbeelding", "id" ])
</script>

<template>
  <article>
    <div class="card">
      <div class="img_space">
        <img :src="afbeelding" alt="f">
      </div>
      <div v-if="!auth.loggedIn">
        <button
            @click="spaceShipStore.addToCart(id)">Add to cart
        </button>
        <button
            @click="spaceShipStore.removeFromCart(id)">remove from cart
        </button>
      </div>


      <p class="heading">
        {{ titel }} - {{ id }}
      </p>
      <p>
        {{ "◊ " + prijs }}
      </p>
      <router-link :to="'/products/' + id">
        <p>See more</p>
      </router-link>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";

article {
  overflow: auto;
}

.img_space {
  width: 100%;
  height: 80%;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  opacity: 70%;
  transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);

}
article img {
  width: 80%;
  position: center;
  margin: 0 auto;
}

@media screen and (max-width: 700px) {
  article {
    width: 100%;
  }
}
.card {
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 8px;
  cursor: pointer;
  color: $bg;
  margin: 3rem .5rem;
  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: .5rem;
  }
  p{
    margin-top: .5rem;
  }
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #1CFF51FF;
  font-weight: 600;
}

.card:hover .img_space{
  opacity: 100%;
  transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);

}
</style>