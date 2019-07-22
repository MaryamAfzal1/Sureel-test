<template>
  <div class="container">
    <div class="registerForm">
      <form action="post">
        <h1> Register Here </h1>
        <label> Please Enter Your Name </label>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />

        <label> Please Enter Your Email </label>
        <input type="text" name="email" v-model="input.email" placeholder="Email" />

        <label>Enter Your Password </label>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />

        <button type="button" class="button--green" v-on:click="signUp()">Register</button>
      </form>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
           return {
               input: {
                  username: "",
                  email: "",
                  password: ""
                }
          }
        },

  methods: {
    signUp(){
      //create new instance of the user class
     // let user=new Parse.User();
      let User = Parse.Object.extend('User');
      let user= new User();
     
      //set the properties to object user
      user.set("username", this.input.username);
      user.set("email", this.input.email);
      user.set("password", this.input.password);
      user.save();
       
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
.registerForm {
  width: 800px;
  border-radius: 5px;
  /* margin: top right bottom left*/
  margin: 25px 25px 75px 25px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: left;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.registerForm h1{
  text-align: center;
  font-size: 24px;
}
.registerForm button{
  display: block;
  max-width: 300px;
  margin: auto;
}
    
</style>
