//Load module file
const Module = require('../core/Module.js')
const express = Module.express;
const passport = Module.passport;
//App Setup
const app = express();
//user passport settings
require('../core/passport-setup');

var Route = require('../core/Route');
Routing = new Route();

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    // console.log(req.user);
    if (req.user) {
        // console.log(req.user);
        next();
    } 
    else {
        res.redirect('/login');
    }
}

//Home Controls
app.get('/',isLoggedIn, (req, res, next) => {
    Routing.Use(req, res, next,{Controller: "Home", Action: "index"})
});

//Login Controls
app.get('/login', (req, res) => { 
    res.render('Login/login');
});
app.post('/login', passport.authenticate('local',{successRedirect: '/', failureRedirect: '/login', failureFlash: false }));

//Register Controls
app.get('/register', isLoggedIn, (req, res, next) => {
    Routing.Use(req, res, next,{Controller: "User", Action: "index"})
});

module.exports = app;
