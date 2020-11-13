//Core Module's 
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');


exports.express = express;
exports.passport = passport;
exports.cookieSession = cookieSession;
exports.bodyParser = bodyParser;
exports.bcrypt = bcrypt;
exports.csurf = csurf;
exports.cookieParser = cookieParser;
exports.mysql = mysql;
// exports.mysql = mysql;

