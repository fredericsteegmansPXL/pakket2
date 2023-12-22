<script setup>
import { useSpaceShipStore } from '@/stores/spaceShipStore.js';
const spaceShipStore = useSpaceShipStore()


</script>

<template>
  <div class="delivery">
    <p><span>Free</span> shipping from ◊10,000</p>
    <p>Ordered before 32:59h, delivered next day</p>
    <p><span>Free</span> retour</p>
  </div>

  <nav>
    <div class="nav__container">
      <h1><router-link to="/"><span>STAR</span>DUST <i class="fa-brands fa-galactic-republic"></i></router-link></h1>
      <ul>
        <li><router-link to="/products" v-slot="{isActive}" :class="[isActive && 'router-link-active']"><i class="fa-solid fa-magnifying-glass"></i></router-link></li>
        <li><router-link to="/cart" v-slot="{isActive}" :class="[isActive && 'router-link-active']"><i class="fa-solid fa-cart-shopping"><span>{{ spaceShipStore.getCartCount }}</span></i></router-link></li>
        <li><router-link to="/profiel" v-slot="{isActive}" :class="[isActive && 'router-link-active']"><i class="fa-solid fa-user"></i></router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";
.delivery {
  margin: 0 auto;
  display: flex;justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: $bg;
  p{
    color: #ffffff;
  }
  p span {
    color: $green;
  }
}

nav {
  background-color: $bg;
  .nav__container {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    color: #fff;
    font-size: 3rem;
    font-family: Saira, sans-serif;
    margin: 1rem 0.5rem;
    a {
      text-decoration: none;
      color: white;
    }
    span {
      color: $green;
    }
    i {
      color: $green;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    li a {
      display: inline-block;
      color: #ffffff;
      font-size: 1.5rem;
      padding: 1rem 0.5rem;
      &:hover {
        color: $green;
      }
    }
    .router-link-active{
      color: $green;
    }
  }
}

</style>

