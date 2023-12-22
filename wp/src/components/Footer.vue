<script>
export default {
  name: "Footer"
}
</script>


<template>
  <footer>
    <div class="footer__container">
      <div class="footer__container__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d792.630644302191!2d-5.985885499999999!3d37.3774721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2sbe!4v1703197291099!5m2!1snl!2sbe" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="footer__container__adress">
        <h1>STARDUST SPACESHIP SHOP</h1>
        <p>Theed Royal Palace</p>
        <p>35789B399 Theed</p>
        <p>Naboo</p>
        <p>+32 456 61 86 98</p>
        <p>011 26 77 89 </p>
      </div>
    </div>
  </footer>

</template>


<style lang="scss" scoped>
@import "@/assets/shared.scss";

footer {
  background-color: $bg;
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