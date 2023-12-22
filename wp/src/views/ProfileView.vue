<script setup>
import { useAuthStore } from '@/stores/auth.js';


const auth = useAuthStore()



</script>

<template>


  <section>
    <div class="form-container" v-if="!auth.loggedIn">
      <h1>Login</h1>
      <form class="loginForm" v-on:submit.prevent="auth.login()" action="">
        <div class="form-row">
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" required>
        </div>
        <div class="form-row">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required>
        </div>
        <div class="form-action">
          <button class="button button-primary" type="submit">{{ !auth.loggedIn && "Log in"}}</button>
        </div>
      </form>
    </div>
    <div class="container" v-else>
      <h1>Greetings, creature!</h1>
      <p>You have successfully logged in!</p>
      <button v-on:click="auth.logout()" type="button" class="button button-secondary">{{ auth.loggedIn && "Logout" }}</button>
      <p>or</p>
      <router-link to="/cart"><button class="button button-tertiary">view cart</button></router-link>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "@/assets/shared.scss";

.container {
  text-align: center;
  margin: 0 auto;
  h1, p, button {
    margin-top: 2rem;
  }
}

.button {
  position: relative;
  display: inline-block;
  margin: 0;
  overflow: visible;
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid $bg;
  color: $bg;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.1s, border-color 0.1s, color 0.1s, box-shadow 0.1s, outline 0.1s;
}

.button-secondary {
  background-color: $white;
  color: $bg;
}

.button-secondary:hover {
  background-color: $bg;
  color: #EBEBEB;
}

.button-tertiary {
  background-color: $bg;
  color: $white;
}

.button-tertiary:hover {
  background-color: $white;
  color: $bg;
}

.button-primary {
  background-color: $white;
  color: $bg;
}

.button-primary:hover {
  background-color: $bg;
  color: $white;
}

section {
  width: 50%;
  height: 70vh;
  margin: 5rem auto;
  background-color: #fdfdff;
  padding: 6rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.loginForm {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  input{
    padding: .4rem;
    border-radius: 20px;
    border: $bg solid 2px;
  }
}

.form-row {
  width: 100%;
  margin: .5rem .2rem;
}

label {
  display: block;
  width: 100%;
}
input {
  width: 100%;
}

.form-action {
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

</style>
}