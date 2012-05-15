var users = require('../model/users');
exports.signup = function(req, res) {
    res.render('signup', {
        title: 'Signup'
    });
};

exports.login = function(req, res) {
    res.render('login', {
        title: 'Login'
    });
};

exports.authenticate = function(req, res) {

    // Get the username and password.
    var username = req.body.login
        , password = req.body.password;

    // Authenticate the username and password.
    users.authenticate(username, password, function(user) {
        if(user) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.render('login', {
                title: 'Login failed'
            });
        }
    });
};

exports.logout = function(req, res) {
    console.log(req.session.id);
    delete req.session.user;
    res.render('logout', {
        title: 'Logged out'
    })
};