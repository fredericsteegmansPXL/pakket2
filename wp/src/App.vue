<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer.vue";
import Top from "@/components/Top.vue";

</script>

<template>
<body>
<main>
  <HelloWorld/>
  <Header></Header>
  <div class="">
    <h1>NEW IN</h1>
  </div>
</main>
<Footer></Footer>
<Top></Top>
</body>

</template>


<style lang="scss" scoped>
@import "@/assets/shared.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Ubuntu, sans-serif;
}
body {
  background-image: url("../public/casey-horner-RmoWqDCqN2E-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;}


</style>
