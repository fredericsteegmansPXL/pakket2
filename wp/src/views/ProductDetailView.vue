<script>
import producten from "../../producten.json";

export default {
  name: "ProductDetailView",
  props: ["product"],
  data() {
    return {
      product: producten.filter(p => p.id===this.$route.params.id)[0]
    }
  },
}

</script>

<template>
  <div>
    {{ product.prijs }}
  </div>
</template>


<style scoped>

</style>