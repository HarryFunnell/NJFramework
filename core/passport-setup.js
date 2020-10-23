//Datbase connection
const database = require('../Config/database.js');
const connection = database.Connection;

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//Passport 
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
function(username,password,done){
  connection.query('SELECT * FROM users WHERE username = ?', [username], function(err, user){
   if(err)
   {
      console.log('datbase error');  
      return done(err);         
   }
   if(!user[0])
   {
      console.log('username error');  
      return done(null,false,{message: 'Incorrect user name'});           
   }
   if(user[0].password != password)
   {
      console.log('password error');  
      return done(null,false,{message: 'Incorrect password'});
   }
   return done(null,user[0]);     

  });
}
));

passport.serializeUser(function(user, done) { 
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  connection.query('SELECT * FROM users WHERE id = ?', +id, function(error, user){
      done(null, user[0]);
  });
});