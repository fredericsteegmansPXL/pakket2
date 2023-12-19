<script>
export default {
  name: "ProductsCardComponent",
  props: ["titel", "prijs", "afbeelding" ]
}
</script>

<template>
  <article>
    <div class="card">
      <div class="img_space">
        <img :src="afbeelding" alt="f">
      </div>
      <p class="heading">
        {{ titel }}
      </p>
      <p>
        {{ "◊ " + prijs }}
      </p>
      <p>
        See more
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";

article {
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
article img {
  width: 80%;
  position: center;
  margin: 0 auto;
}

@media screen and (max-width: 700px) {
  article {
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
  margin: 3rem .5rem;
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