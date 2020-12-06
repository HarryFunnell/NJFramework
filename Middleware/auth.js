
class Auth{
    constructor(){

    }
    // Auth middleware that checks if the user is logged in
    handler(req, res) {
        if (req.user) {
            console.log("Logged in");
        } 
        else {
            console.log('Not logged in');
            res.redirect('/login');
        }
    }
}

module.exports = Auth;