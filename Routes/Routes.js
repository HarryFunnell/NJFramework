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
app.get('/register', (req, res) => {
    Routing.Use(req, res,{Controller: "User", Action: "index", Middleware: "auth"});
});

//lights
app.get('/lighton', (req, res) => {
    Routing.Use(req, res,{Controller: "User", Action: "lighton", Middleware: "auth"});
});

app.get('/lightoff', (req, res) => {
    Routing.Use(req, res,{Controller: "User", Action: "lightoff", Middleware: "auth"});
});

//Home Controls
app.get('/', (req, res) => {
    Routing.Use(req, res,{Controller: "Home", Action: "index", Middleware: "auth"});
});

module.exports = app;
