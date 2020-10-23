//Core Module's 
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const usbDetect = require('usb-detection');
const SerialPort = require('serialport')

exports.express = express;
exports.passport = passport;
exports.cookieSession = cookieSession;
exports.bodyParser = bodyParser;
exports.bcrypt = bcrypt;
exports.csurf = csurf;
exports.cookieParser = cookieParser;
exports.mysql = mysql;
exports.usbDetect = usbDetect;
exports.SerialPort = SerialPort;
