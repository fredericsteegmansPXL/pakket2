<script>
  import producten from "../../producten.json";
  import ProductsCardComponent from "@/components/snippets/ProductCardComponent.vue";
  export default {
  name: "ProductsView",
  components: {ProductsCardComponent},
  data () {
  return {
  producten: producten,
  selectedPriceFilter: '',
  selectedColorFilter: '',
  itemsPerPage: 24,
  currentPage: 0,
}
},
  methods: {
  clearPriceFilter() {
  this.selectedColorFilter = ''
  this.selectedPriceFilter = ''
},
  clearColorFilter() {
  this.selectedColorFilter = ''
},
  arrayRange (start, stop, step) {
  return Array.from({length: (stop - start) / step + 1 }, (value, index) => start + index * step );
},
  setCurrenPage(page) {
  this.currentPage = page
}

},
  computed: {
  priceFilter() {
  return [...new Set(producten.map((prod) => prod.filter))]
},
  colorFilter() {
  return [...new Set(producten.map((prod) => prod.color))]
},
  filteredProducts() {
  let filteredProds = producten
  if (this.selectedPriceFilter) {
  filteredProds =  filteredProds.filter((prod) => prod.filter === this.selectedPriceFilter )
}

  if (this.selectedColorFilter) {
  filteredProds = filteredProds.filter((prod) => prod.color === this.selectedColorFilter )
}
  return filteredProds
},
  paginatedProducts() {
  const startIndex = Math.ceil((this.filteredProducts.length / this.itemsPerPage) * this.currentPage)
  const endIndex = startIndex + this.itemsPerPage
  return this.filteredProducts.slice(startIndex , endIndex)
},
  numberOfPages() {
  const max = Math.floor(this.filteredProducts.length / this.itemsPerPage)
  return this.arrayRange(0, max, 1);
},
}
}
</script>

<template >
  <main>
    <h1>Dit is de productpagina</h1>
    <!-- price filter ex: goedkoop -->
    <div>
      <select v-model="selectedPriceFilter">
        <option v-for="filter in priceFilter" :value="filter">{{filter}}</option>
      </select>
      <button @click="clearPriceFilter">Clear price filter</button>
    </div>
    <!-- color filter ex: blue -->
    <div v-if="selectedPriceFilter">
      <select v-model="selectedColorFilter">
        <option v-for="filter in colorFilter" :value="filter">{{filter}}</option>
      </select>
      <button @click="clearColorFilter">Clear color filter</button>
    </div>

    <section class="main__part1">
      <div class="container">
        <ProductsCardComponent v-for="product in paginatedProducts" :titel="product.titel" :afbeelding="product.afbeelding" :prijs="product.prijs" :id="product.id"/>
      </div>
    </section>
    <p v-for="number in numberOfPages" @click="setCurrenPage(number)">{{ number + 1 }}</p>
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