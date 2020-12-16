# NJFramework
Node.js Framework using express and other technologies

This framework is a small project I have been working on, it allows users to create RestAPI's quickly, it uses the MVC architecture for simple and easy use(This is still in the alpha phase)

There are a few node packages you will need to learn to use this, Express, sequelize and ejs.

Once you have cloned this to your computer, run npm install, this will install all the dependencies.

next you will need to create a config.json file in the config directory.

add this code to that file.
{
  "development": {
    "username": "",
    "password": ,
    "database": "development_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "",
    "password": ,
    "database": "test_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": ,
    "database": "production_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
depending on what stage your app is at put your database details in development, test or production. please put the right database structure you are using in dialect for example mysql or postgresql

Next in the same directory as your config.json file you should see a bootstrap.json file, open that up and you should see this.
{
    "ServerSettings":{
        "Port": "3000",
        "SessionName": "",
        "SessionKeys":{
            "Keyone": "",
            "Keytwo": ""
        },
        "Passportsettings":{
            "UsernameField": "",
            "PassportField": ""
        },
        "development": true,
        "test": false,
        "production": false
    }
}
these are the settings for your server, put a port you want your app to run on(you can see mine is running on 3000), eneter a session name and two keys(these guys should be private)
if you are using a login system then use the passport-setup file in core directory, ignore the bootstrap passport settings as that is a later update to come.

If your database is not running on localhost then you will need to change it in the src/database connection.js file(where it says host)

Next lets move onto Routes
the directory Routes will have a Routes.js file, this file is where you will set up your app routes.

Read Express documentation here https://expressjs.com/en/guide/routing.html to learn more about how these routes will work.

In this framework Routing can be done very quickly and through controllers with middleware added, example below
app.get('/', (req, res) => {
    Routing.Use(req, res,{Controller: "Home", Action: "index", Middleware: "auth"});
});

This route will be using the home route as seen with “/”, it can then take a request and/or send a response, this is placed into a function, 
next using the Routing.Use function we can then assign what controller we want this route to use in the example above you can see I’m using the Home controller
(you will only need to type the controller name without controller at the end we will go into this later), 
next the action we want this route to take this action is a function in the controller, for this example we will use the index function, 
and last we will assign it a middleware , for this example I’m using the auth middleware.

And its that easy to set up a route.

Next we will look at Controllers.

Creating a controller is very simple, in your terminal type npm run buildcontroller then put a controller name, example below

"npm run buildcontroller Home"

Try and put capital letters for the first word of your controler

This will create the controller in the Controller directory.

If we open this file that was created we can then place our index function inside.

//Load module file
var Module = require('../core/Module.js')

var Controller = require('../core/Controller');

class HomeController extends Controller{
    index(req, res){
        console.log('Home Page');
    }
}
module.exports = HomeController;

Example above will console.log Home Page when I run the server and go to this page in my browser



