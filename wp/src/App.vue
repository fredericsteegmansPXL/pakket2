<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from "@/components/Footer.vue";
import Top from "@/components/Top.vue";

export default {
  components: {
    HelloWorld,
    Footer,
    Top
  },
}

</script>

<template>
<body>
<main>
  <HelloWorld></HelloWorld>
  <router-view></router-view>
</main>
<Footer></Footer>
<Top></Top>
</body>

</template>


<style lang="scss" >
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
  background-attachment: fixed;
}
</style>
