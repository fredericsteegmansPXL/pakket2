<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from "@/components/Footer.vue";
import Top from "@/components/Top.vue";

</script>

<template>
<body>
<main>
  <HelloWorld/>
  <Header></Header>
  <Main></Main>
</main>
<Footer></Footer>
<Top></Top>
</body>

</template>


<style lang="scss">
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
