<script setup>
import producten from "../../producten.json";
import ProductsCardComponent from "@/components/snippets/ProductCardComponent.vue";
import {computed} from 'vues'
import {ref} from "vue";

const selectedFilter = ref('')
const filters = computed(() => producten.map((prod) => prod.filter))
console.log(filters)
const prods = computed(() => producten.filter((product) => {
  if (selectedFilter) {
    return product.filter((prod) => product.filter === selectedFilter.value)
  }
  return producten
}))

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
        <v-select :options="filters" v-model="selectedFilter"></v-select>
        <ProductsCardComponent v-for="product in prods" :titel="product.titel" :afbeelding="product.afbeelding" :prijs="product.prijs" :id="product.id"/>

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