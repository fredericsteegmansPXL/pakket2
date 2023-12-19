<script setup>

</script>

<template>
  <div class="delivery">
    <p><span>Free</span> shipping from ◊10,000</p>
    <p>Ordered before 32:59h, delivered next day</p>
    <p><span>Free</span> retour</p>
  </div>

  <nav>
    <div class="nav__container">
      <h1><a href="/"><span>STAR</span>DUST <i class="fa-brands fa-galactic-republic"></i></a></h1>
      <ul>
        <li><a href="/favoriet" class="router-link-active"><i class="fa-solid fa-heart"></i></a></li>
        <li><a href="/cart" class="router-link-active"><i class="fa-solid fa-cart-shopping"></i></a></li>
        <li><a href="/profiel" class="router-link-active"><i class="fa-solid fa-user"></i></a></li>
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
        router-link-active{
          color: $green;
        }
      }
    }

}
</style>
