<script>
export default {
  name: "ProductsView"
}
</script>

<template >
  <main>
  <h1>Dit is de productpagina</h1>
    <section class="main__part1">
      <div class="container">
        <article>
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
        </article>
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

.container article {
  overflow: auto;
}

.img_space {
  width: 100%;
  height: 80%;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  opacity: 70%;
  transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);

}
.container article img {
  width: 80%;
  position: center;
  margin: 0 auto;
}

@media screen and (max-width: 700px) {
  .container  {
    flex-direction: column;

  }
  .container article {
    width: 100%;
  }
}
.card {
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 8px;
  cursor: pointer;
  color: $bg;
  margin: 2rem .5rem;
  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: .5rem;
  }
  p{
    margin-top: .5rem;
  }
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #1CFF51FF;
  font-weight: 600;
}

.card:hover .img_space{
  opacity: 100%;
  transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);

}
</style>