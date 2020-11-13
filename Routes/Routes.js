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

var Middleware = require('../core/Middleware');
Middleware = new Middleware();

// Auth middleware that checks if the user is logged in
function isLoggedIn(req, res, next) {
    // if (req.isAuthenticated())
    //     return next();
    // res.redirect('/login');
    if (req.user) {
        next();
    } 
    else {
        res.redirect('/login');
    }
}

//Auth
//Login Controls
app.get('/login', (req, res) => { 
    res.render('Login/login');
});
app.post('/login', passport.authenticate('local',{successRedirect: '/', failureRedirect: '/login', failureFlash: false }));

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
});

//Register Controls
app.get('/register', Middleware.isLoggedIn, (req, res, next) => {
    Routing.Use(req, res, next,{Controller: "User", Action: "index"})
});

//Home Controls
app.get('/',isLoggedIn, (req, res, next) => {
    Routing.Use(req, res, next,{Controller: "Home", Action: "index"})
});

module.exports = app;
