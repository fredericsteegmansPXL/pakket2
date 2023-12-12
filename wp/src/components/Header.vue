<link rel="stylesheet" href="../assets/shared.scss">
<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <div class="header__container">
      <h1>GO  INTERSTELLAR</h1>
      <h2>// SPACESHIPS // PARTS // SERVICES //</h2>
    </div>
  </header>

</template>


<style lang="scss">
@import "@/assets/shared.scss";

header .header__container {
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 18rem 0;

}

header .header__container h1 {
  color: white;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.5rem;
  font-size: 5rem;
  border-radius: 10px 10px 0 10px;
}

header .header__container h2 {
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.65);
  color: #07ff4d;
  font-size: 1.25rem;
  border-radius: 0 0 10px 10px;
}

h1, h2 {
  margin: 0;
}
</style>