<template>
  <div class="container">
     <!--- Create a Post--->
    <div class="Posts">
      <form action="post">
      <h1> Create a Post </h1>
        <label >Title</label>
        <input type="text" name="title" v-model="input.title" placeholder="title" />
      
        <label > Text </label>
        <input type="text" name="text" v-model="input.text" placeholder="text" /> 
      
      <button type="button" class="button--green" v-on:click="CreatePost()"> Add </button>
      </form>
    </div>

     <!--- Update a Posts--->
     <div class="Posts">
      <form action="post">
      <h1> Update a Post </h1>
        <label >Id</label>
        <input type="text" name="title" v-model="input.id" placeholder="id" />

        <label> Title </label>
        <input type="text" name="title" v-model="input.title" placeholder="title" />
    
        <label > Text </label>
        <input type="text" name="text" v-model="input.text" placeholder="text" /> 
      
      <button type="button" class="button--green" v-on:click="updatePost()"> Update </button>
      </form>
    </div>

     <!--- Delete a Post--->
     <div class="Posts">
      <form action="post">
      <h1> Delete a Post </h1>
    <input type="id" name="id" v-model="input.id" placeholder="id" />
    <button type="button" class="button--green" @click="deletePost()"> Delete a Post </button> 
      </form>
    </div>

    <!--- Show All Posts--->
     <div class="allposts">
       <table class="table table-striped table-borders">
         <caption> Show All Posts </caption>
         <thead>
           <tr>
             <th> id </th>
             <th> Title </th>
             <th> Text</th>
             <th> Created by</th>
           </tr>
         </thead> 
        <tbody>
          <tr v-for="posts in posts" :key="posts.id">
            <td>{{posts.get('id')}}</td>
            <td>{{posts.get('title')}}</td>
            <td>{{posts.get('text')}}</td>
            <td>{{posts.get('user').get('username')}}</td>
          </tr>
          <tr>   
            <td colspan="4"> <button type="button" class="button--green" v-on:click="retrievePOST()">Show all Posts</button></td>         
          </tr>
        </tbody>
        </table>
     </div> 
  </div>
</template>

<script>
import { log } from 'util';
import { constants } from 'crypto';

export default {
  middleware: 'authentication',
  components: {
   
  },
  data() {
           return {
               input: {
                  title:"",
                  text: "",
                  user:"",
                  id:"",
                },
                posts:[]
          }
        },

  methods: {
    CreatePost(){
        let Posts=Parse.Object.extend('Post');
        let posts= new Posts();
        posts.setACL(new Parse.ACL(Parse.User.current()));
        posts.set("title", this.input.title);
        posts.set("text", this.input.text);
        posts.set();
        posts.save("user", Parse.User.current());
        console.log(posts);
    },
    updatePost(){

    const Posts = Parse.Object.extend('Post');
    const posts=new Posts();
    
    const query = new Parse.Query(Posts);

        // Retrieve the object by id
        query.get(this.input.id)
        .then((posts) => {
        // The object was retrieved successfully and it is ready to update.
        posts.set("text", this.input.text);
        posts.set("title", this.input.title);
        posts.save();

        }, (error) => {
        //The object was not retrieved successfully.
        });

    },
     deletePost(){
    

    const Posts = Parse.Object.extend('Post');
    const query = new Parse.Query(Posts);

        // Retrieve the object by id
        query.get(this.input.id)
        .then((posts) => {
       // The object was retrieved successfully and it is ready to update.
        posts.destroy().then((Posts) => {
            // The object was deleted from the Parse Cloud.
        }, (error) => {
            // The delete failed.
            // error is a Parse.Error with an error code and message.
        })
        }, (error) => {
        //The object was not retrieved successfully.
        });

    },
   async retrievePOST(){
    let posts = Parse.Object.extend("Post");
    let query = new Parse.Query(posts);
    this.posts=await query.find();

    console.log(posts);
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
.allposts {
  font-family:Georgia, 'Times New Roman', Times, serif;
  border-collapse: collapse;
  width: 100%;
  padding: 20px;
}

.allposts td, .allposts th {
  border: 1px solid #ddd;
  padding: 12px;
}
.allposts caption{
  text-align: center;
  font-size: 24px;
}
.allposts tr:nth-child(even){background-color: #f2f2f2;}

.allposts tr:hover {background-color: #ddd;}

.allposts th {
  padding: 14px;
  text-align: left;
  background-color: #f2f2f2;
}

.links {
  padding-top: 15px;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px auto;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
}
.Posts {
  border-radius: 5px;
  /* margin: top right bottom left*/
  margin: 25px 25px 75px 25px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: left;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
.Posts h1 {
  text-align: center;
  font-size: 24px;
}
.Posts button{
  display: block;
  max-width: 300px;
  margin: auto;
}
    
</style>
