<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer.vue";
import Top from "@/components/Top.vue";

export default {
  components: {
    Header,
    HelloWorld,
    Footer,
    Top
  },
}

</script>

<template>
<body>
<main>
  <HelloWorld/>
  <Header></Header>
  <Main></Main>
  <div class="topnew">
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
  </div>
  <div class="new">
    <h1>EMPIRIAL TIE FIGHTER</h1>
    <p>fast, agile, deadly</p>
    <button>shop now</button>
  </div>
  <div class="topnew">
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
    <h2>// NEW //</h2>
  </div>
  <div class="uitgelicht">
    <div class="primate">
      <h1>EMPIRIAL TIE FIGHTER</h1>
      <p>fast, agile, deadly</p>
      <button>shop now</button>
    </div>
    <div class="cruisers">
      <h1>EMPIRIAL TIE FIGHTER</h1>
      <p>fast, agile, deadly</p>
      <button>shop now</button>
    </div>
    <div class="parts">
      <h1>EMPIRIAL TIE FIGHTER</h1>
      <p>fast, agile, deadly</p>
      <button>shop now</button>
    </div>
  </div>
</main>
<Footer></Footer>
<Top></Top>
</body>

</template>


<style lang="scss" >
@import "@/assets/shared.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Ubuntu, sans-serif;
}
body {
  background-image: url("../public/casey-horner-RmoWqDCqN2E-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.topnew {
  height: 30px;
  background-color: $bg;
  display: flex;
  justify-content: space-between;
  h2 {
    color: $white;
    font-size: 15pt;
    padding: 10px;
  }
}

.new {
  height: 700px;
  background-color: $bg;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  h1{
    color: $white;
    font-size: 60pt;
    text-shadow: rgba(6, 17, 6, 0.91) 2px 0 10px;
  }
  p {
    color: $white;
    font-size: 17pt;
    font-weight: 100;
    font-family: "Helvetica Neue", sans-serif;
    padding-top: 2rem;
  }
  button {
    padding: 10px 30px;
    background-color: transparent;
    border: solid white 2px;
    color: white;
    margin-top: 2rem;
    border-radius: 5px;
    transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);
    &:hover{
      background-color: white;
      color: black;
      transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);
      cursor: pointer;
    }
  }
  background-image: url("../public/TIE_Fighter_DICE.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
}


.uitgelicht{
  height: 800px;
  border: solid 2px red;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e;
  color: white;
  button {
    padding: 10px 30px;
    background-color: transparent;
    border: solid white 2px;
    color: white;
    margin-top: 2rem;
    border-radius: 5px;
    transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);

    &:hover {
      background-color: white;
      color: black;
      transition: all 0.5s cubic-bezier(0.61, 1, 0.88, 1);
      cursor: pointer;
    }
  }
  .primate, .cruisers{
    width: 50%;
    height: 50%;
    border: 2px solid yellow;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
  .parts{
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

}

</style>
