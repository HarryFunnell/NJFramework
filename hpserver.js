//Load module file
const Module = require('./core/Module.js');
var flash = require('connect-flash');

//Load module's
const express = Module.express;
const bodyParser = Module.bodyParser;
const bcrypt = Module.bcrypt;
const csurf = Module.csurf;
const cookieParser = Module.cookieParser;
const passport = Module.passport;
const cookieSession = Module.cookieSession;

//App Setup
const app = express();

//boostrap.json
var Settings = require("./config/bootstrap.json");

//Datbase connection
require('./src/database/connection');

//Static files
app.use(express.static('public'));

//view engine ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Initializes passport and passport sessions

app.use(cookieParser())
app.use(cookieSession({
    name: Settings.ServerSettings.SessionName,
    keys: [Settings.ServerSettings.SessionKeys.Keyone, Settings.ServerSettings.SessionKeys.Keytwo]
}));;

app.use(flash());

app.use(csurf({ cookie: true }))
app.use(function(req, res, next){
    var csrftoken = req.csrfToken();
    res.locals.csrftoken = csrftoken;
    next();
});

app.use(passport.initialize());
app.use(passport.session());

const Router = require('./Routes/Routes');

app.use(Router);

//Datbase check
// sequelize.authenticate().then(() => {
//     console.log('Connection established successfully.');
//   }).catch(err => {
//     console.error('Unable to connect to the database:', err);
//   }).finally(() => {
//     sequelize.close();
// });

//Server listening on port 
const PORT = process.env.PORT || Settings.ServerSettings.Port;

const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));