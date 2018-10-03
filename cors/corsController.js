const {
    body,
    validationResult
} = require('express-validator/check');
const {
    sanitizeBody
} = require('express-validator/filter');
var request = require('request');

exports.cors_get = function (req, res) {
    res.render('cors');
};

exports.cors_get_simplecors = function (req, res) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
};

exports.cors_get_nocors = function (req, res) {
    res.json({msg: 'This CORS-disabled for external origins!'})
};


exports.cors_post = function (req, res) {
    res.send({
        success: 'cors_post called'
    });
};