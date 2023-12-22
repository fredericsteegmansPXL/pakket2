<script>

</script>

<template>
  <section class="container">
    <h1 class="main-heading">We are updating the store.</h1>
    <p>come back soon for parts</p>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";
.container{
  height: 100vh;
  background-image: url("../../public/error.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: $white;
    font-size: 30pt;
  }
  p {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: 100;
    margin-top: 10px;
    font-size: 13pt;
    color: $white;
  }
}
</style>