<script>
export default {
  data() {
    return {
      accountButtonText: 'Login',
      loggedIn: false
    }
  },

  name: "ProfileView",

  methods: {
    submitForm() {
      this.accountButtonText = "Logout";
      this.loggedIn = true;
    },
    logout() {
      this.accountButtonText = "Login";
      this.loggedIn = false;
    }
  }
}
</script>

<template>


  <section>
    <div class="form-container" v-if="!loggedIn">
      <h1>Login</h1>
      <form class="loginForm" v-on:submit.prevent="submitForm()" action="">
        <div class="form-row">
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email">
        </div>
        <div class="form-row">
          <label for="password">Wachtwoord</label>
          <input type="password" name="password" id="password">
        </div>
        <div class="form-action">
          <button class="button button-primary" type="submit">{{ accountButtonText }}</button>
        </div>
      </form>
    </div>
    <div class="container" v-else>
      <h1>Welkom!</h1>
      <p>Je bent succesvol ingelogd!</p>
      <button v-on:click="logout()" type="button" class="button button-secondary">{{ accountButtonText }}</button>
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