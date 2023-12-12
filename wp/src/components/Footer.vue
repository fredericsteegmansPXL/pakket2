<script>
export default {
  name: "Footer"
}
</script>


<template>
  <footer>
    <div class="footer__container">
      <div class="footer__container__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7239.152760923044!2d5.35587174911297!3d50.93812482705693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sbe!4v1670858220479!5m2!1snl!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="footer__container__adress">
        <h1>STARDUST SPACESHIP SHOP</h1>
        <p>Elfde-Liniestraat 24</p>
        <p>3500 Hasselt</p>
        <p>België</p>
        <p>0477 / 90 02 37</p>
        <p>011 / 26 77 89 </p>
      </div>
    </div>
  </footer>

</template>


<style lang="scss" scoped>
@import "@/assets/shared.scss";

footer {
  background-color: #111;
  padding: 2rem 0.5rem;
  .footer__container {
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .footer__container .footer__container__map {
    flex: auto;
  }
  .footer__container .footer__container__adress {
    flex: auto;
    h1 {
      text-align: right;
      color: $green;
    }
    p {
      text-align: right;
      color: #ffffff;
      padding: 0.5rem 0;
    }
  }
}

</style>