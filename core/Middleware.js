//Load module file ../core/Module.js
var Module = require('./Module.js')

class Middleware{
    isLoggedIn(req, res, next) {
        if (req.user) {
            next();
        } 
        else {
            res.redirect('/login');
        }
    }
}
module.exports = Middleware;