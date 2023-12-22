<script>
import producten from "../../producten.json";
import ProductsCardComponent from "@/components/snippets/ProductCardComponent.vue";
export default {
  name: "ProductsView",
  components: { ProductsCardComponent },
  data() {
    return {
      producten: producten,
      selectedPriceFilter: "",
      selectedColorFilter: "",
      itemsPerPage: 9,
      currentPage: 0,
      activePage: 0
    };
  },
  methods: {
    clearPriceFilter() {
      this.selectedColorFilter = "";
      this.selectedPriceFilter = "";
    },
    clearColorFilter() {
      this.selectedColorFilter = "";
    },
    arrayRange(start, stop, step) {
      return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
      );
    },
    setCurrenPage(page) {
      this.currentPage = page;
    },
    setCurrenPage(page) {
      this.currentPage = page;
      this.activePage = page;
    }
  },
  computed: {
    priceFilter() {

      const orderedFilters = ['cheap', 'not cheap', 'I come from a diamond planet'];

      return orderedFilters.filter(filter => this.uniqueFilters.includes(filter));
    },
    colorFilter() {

      const orderedFilters = ['black', 'blue', 'brown', 'grey', 'orange', 'purple', 'white'];

      return orderedFilters.filter(color => this.uniqueColors.includes(color));
    },
    uniqueFilters() {
      return [...new Set(producten.map((prod) => prod.filter))];
    },
    uniqueColors() {
      return [...new Set(producten.map((prod) => prod.color))];
    },
    filteredProducts() {
      let filteredProds = producten;
      if (this.selectedPriceFilter) {
        filteredProds = filteredProds.filter(
          (prod) => prod.filter === this.selectedPriceFilter
        );
      }

      if (this.selectedColorFilter) {
        filteredProds = filteredProds.filter(
          (prod) => prod.color === this.selectedColorFilter
        );
      }
      return filteredProds;
    },
    paginatedProducts() {
      const startIndex = this.currentPage * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    numberOfPages() {
      const max = Math.floor(this.filteredProducts.length / this.itemsPerPage);
      return this.arrayRange(0, max, 1);
    }
  }
};
</script>

<template>
  <main>
    <h1>Products</h1>

    <div class="filt">
      <div>
        <select v-model="selectedPriceFilter">
          <option value="">Select Price Filter</option>
          <option v-for="filter in priceFilter" :value="filter" :key="filter">
            {{ filter }}
          </option>
        </select>
        <button @click="clearPriceFilter">Clear price filter</button>
      </div>

      <div>
        <select v-model="selectedColorFilter">
          <option value="">Select Color Filter</option>
          <option v-for="filter in colorFilter" :value="filter" :key="filter">
            {{ filter }}
          </option>
        </select>
        <button @click="clearColorFilter">Clear color filter</button>
      </div>
    </div>

    <section class="main__part1">
      <div class="container">
        <ProductsCardComponent
            v-for="product in paginatedProducts"
            :key="product.id"
            :titel="product.titel"
            :afbeelding="product.afbeelding"
            :prijs="product.prijs"
            :id="product.id"
        />
      </div>
    </section>

    <div class="pag">
      <p v-for="number in numberOfPages" :key="number" @click="setCurrenPage(number)" :class="{ 'active': number === activePage }">
        {{ number + 1 }}
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";
main {
  background-color: $white;
  h1 {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-size: 70pt;
  }
  .filt {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    select {
      padding: 0.2rem 0.3rem;
      margin: 0.3rem 0.5rem;
    }
  }
}

.container {
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
}

@media screen and (max-width: 700px) {
  .container {
    flex-direction: column;
  }
}

.pag {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  padding: 3rem;
  justify-content: center;
  p {
    margin-right: 0.5rem;
    &:hover {
      color: $green;
      cursor: pointer;
    }
    &.active {
      text-decoration: underline $green;
      color: $green;
    }
  }
}
</style>
