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

//favicon
app.use('/favicon.io', express.static('Images/favicon.ico'));

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
    Routing.Use(req, res,{Controller: "User", Action: "index"});
});

//Home Controls
app.get('/', (req, res) => {
    Routing.Use(req, res,{Controller: "Home", Action: "index", Middleware: "auth"});
});

//error page
app.get('*', function(req, res){
    console.log("Error 404");
});

module.exports = app;
