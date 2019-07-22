<template>
  <div class="container">
    <div>    
      <h1 class="title">
        Sureel
      </h1>
    </div>
    <div id="signUp">
        <button type="button" class="button--green" v-on:click="redirectToRegister()">Register</button>
    </div>
    <div id="logIn">
      <button type="button" class="button--green" @click="redirectToLogIn()">Log In</button>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },

  methods: {
  redirectToRegister(){
    this.$nuxt.$router.push("/register");
  },
  redirectToLogIn(){
    this.$nuxt.$router.push("/login");
  },
    
}
}

</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
 .signUp {
        width: 500px;
        border: 1px solid rgb(10, 10, 10);
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    
</style>
