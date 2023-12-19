<script>
import producten from "../../producten.json";
import ProductsCardComponent from "@/components/snippets/ProductCardComponent.vue";
export default {
  data () {
    return {
      producten: producten
    }
  },
  name: "ProductsView",
  components: {ProductsCardComponent}
}
</script>

<template >
  <main>
  <h1>Dit is de productpagina</h1>
    <section class="main__part1">
      <div class="container">

        <ProductsCardComponent v-for="product in producten" :titel="product.titel" :afbeelding="product.afbeelding" :prijs="product.prijs" :id="product.id"/>

      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";
main {
  background-color: $white;
}

.container {
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;

}

@media screen and (max-width: 700px) {
  .container  {
    flex-direction: column;

  }
}
</style>