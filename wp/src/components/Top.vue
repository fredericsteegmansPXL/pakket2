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


<style lang="scss" scoped>
@import "@/assets/shared.scss";

#top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  a {
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    border: 3px solid $green;
    background-color: rgba(255, 255, 255, 0);
    color: $green;
    border-radius: 10px;
    &:hover {
      color: #ffffff;
      background-color: $green;
    }
  }
}
</style>