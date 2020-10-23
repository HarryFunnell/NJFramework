//Load module file
const Module = require('./core/Module.js')

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

//Datbase connection
const database = require('./Config/database.js');
const connection = database.Connection;

//Static files
app.use(express.static('public'));

//view engine ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Initializes passport and passport sessions

app.use(cookieParser())
app.use(cookieSession({
    name: 'HP-session',
    keys: ['key1', 'key2']
}));;

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
connection.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MYSQL Connected');
});

//Server listening on port 
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));