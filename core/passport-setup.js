//load bcrypt
var passport = require('passport');
var bCrypt = require('bcryptjs');
var User = require('../Models/Modelsinit/Usersinit');
const { cookieSession } = require('./Module');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password'
        // passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    async function(email, password, done) {
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }
        var user = await User.findOne(
        { 
            where: {
                email: email
            }
        });
        if (user == null) {
            console.log("Wrong Email");
            return done(null, false, { message: 'Incorrect email.' });
        }
        if (!isValidPassword(user.password, password)) {
            console.log("Wrong password");
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});