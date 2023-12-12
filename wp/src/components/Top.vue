<script>
export default {
  name: "Top"
}
</script>

<template>
  <div id="top">
    <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
  </div>

</template>


<style lang="scss">
@import "@/assets/shared.scss";

#top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

#top a {
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  border: 3px solid #07ff4d;
  background-color: rgba(255, 255, 255, 0);
  color: #07ff4d;
}

#top a:hover {
  color: #ffffff;
  background-color: #07ff4d;
}

</style>