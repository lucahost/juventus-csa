const {
    body,
    validationResult
} = require('express-validator/check');
const {
    sanitizeBody
} = require('express-validator/filter');
const db = require('../db/dbconnection');

exports.login_get = function (req, res) {
    res.render('login');
};

exports.login_post = function (req, res) {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    res.cookie('username', req.body.username);
    res.cookie('password', req.body.password);
    res.redirect('/api');
}; 