window.Parse = require('parse');
window.Parse.initialize("IX5KrR75ETrXfUi9H9YAo9GSCnNF2QquGZefH1vR", "JQ1oTgUMjnnbkKhSENcGLtARYxqU0GCgBWhXYI0k");
//javascriptKey is required only if you have it on server

window.Parse.serverURL = 'https://parseapi.back4app.com'
var GameScore = Parse.Object.extend("GameScore");

// Create a new instance of that class.
var gameScore = new GameScore();
