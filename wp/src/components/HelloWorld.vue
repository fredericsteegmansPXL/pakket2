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
      <h1><span>STAR</span>DUST <i class="fa-brands fa-galactic-republic"></i></h1>
      <ul>
        <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/shared.scss";
.delivery {
  margin: 0 auto;
  display: flex;justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: #111111;
}

.delivery p{
  color: #ffffff;
}

.delivery p span {
  color: $green;
}

nav {
  background-color: #111111;
}

nav .nav__container {
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

nav .nav__container h1 {
  color: #fff;
  font-size: 3rem;
  font-family: Saira, sans-serif;
  margin: 1rem 0.5rem;
}
nav .nav__container h1 span {
  color: $green;
}

nav .nav__container h1 i {
  color: $green;
}

nav .nav__container ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

nav .nav__container ul li a {
  display: inline-block;
  color: #ffffff;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
}

nav .nav__container ul li a:hover {
  color: $green;
}
</style>
