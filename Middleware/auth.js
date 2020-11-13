
class Auth{
    constructor(){

    }
    // Auth middleware that checks if the user is logged in
    isLoggedIn(req, res, next) {
        if (req.user) {
            next();
        } 
        else {
            res.redirect('/login');
        }
    }
}

module.exports = Auth;