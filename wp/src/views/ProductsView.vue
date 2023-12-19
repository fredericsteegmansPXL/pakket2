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

        <ProductsCardComponent v-for="product in producten" :titel="product.titel" :afbeelding="product.afbeelding" :prijs="product.prijs"/>

       <!-- <article>
          <div class="card">
            <div class="img_space">
              <img src="../../public/spaceship1Asset-1-496x300.png" alt="f">
            </div>
            <p class="heading">
              GHAERBIDGKEN
            </p>
            <p>
              ◊ 12,670
            </p>
            <p>
              See more
            </p>
          </div>
        </article>


        <article>
          <div class="card">
            <div class="img_space">
              <img src="../../public/ufo.png" alt="f">
            </div>
            <p class="heading">
              Identified Flying Object
            </p>
            <p>
              ◊ 32,700
            </p>
            <p>
              See more
            </p>
          </div>

        </article>
        <article>
          <div class="card">
            <div class="img_space">
              <img src="../../public/TIE_Fighter_DICE.webp" alt="f">
            </div>
            <p class="heading">
              TIE-fighter
            </p>
            <p>
              ◊ 200,001
            </p>
            <p>
              See more
            </p>
          </div>
        </article>

        <article>
          <div class="card">
            <div class="img_space">
              <img src="../../public/pngtree-x-wing-starfighter-red1-png-image_8631999.png" alt="f">
            </div>
            <p class="heading">
              X-WING
            </p>
            <p>
              ◊ 67,300
            </p>
            <p>
              See more
            </p>
          </div>
        </article>


        <article>
          <div class="card">
            <div class="img_space">
              <img src="../../public/c00a0f2556d78284dc3b23a8df6b5dc5.png" alt="f">
            </div>
            <p class="heading">
              STARFLEET
            </p>
            <p>
              ◊ 55,555
            </p>
            <p>
              See more
            </p>
          </div>

        </article>
        <article>
          <div class="card">
            <div class="img_space">
              <img src="../../public/Spaceship-No-Background.png" alt="f">
            </div>
            <p class="heading">
            MOONHOPPER
          </p>
            <p>
              ◊ 8,989
            </p>
            <p>
              See more
            </p>
          </div>
        </article> -->
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