<template>
  <div class="container">
   <!-- Login -->
    <div class="signInForm">
      <h1> Login </h1>
      <form action="post">
        <label> Enter Your Email </label>
        <input type="text" name="email" v-model="input.email" placeholder="email" />
        
        <label> Enter your Password </label>
        <input type="password" name="password" v-model="input.password" placeholder="password"/>
         <button type="button" class="button--green" @click="logIn()">Log In</button>
      </form>
    </div>
    <div><button type="button"  class="button--green" @click="logout()">Log out</button></div>
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
  components: {
    
  },
  data() {
           return {
               input: {
                  email: "",
                  password: ""
                }
          }
        },

  methods: {
     logIn(){
      //create new instance of the user class
      let user= Parse.User.logIn(this.input.email, this.input.password).then(function(user) {
           
            console.log('User signIn successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
    this.$nuxt.$router.push("/timeline");
    },
    
    logout(){
        Parse.User.logOut().then(() => {
        var currentUser = Parse.User.current();  // this will now be null
         console.log('User logged ');
    });
    }
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
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 30px auto;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 30px auto;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.signInForm {
  width: 800px;
  border-radius: 5px;
  /* margin: top right bottom left*/
  margin: 25px 25px 75px 25px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: left;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.signInForm h1{
  text-align: center;
  font-size: 24px;
}
.signInForm button{
  display: block;
  max-width: 300px;
  margin: auto;
}
    
</style>
