const {
    body,
    validationResult
} = require('express-validator/check');
const {
    sanitizeBody
} = require('express-validator/filter');

exports.cors_get = function (req, res) {
    res.send({
        success: 'cors_get called'
    });
};


exports.cors_post = function (req, res) {
    res.set()
    res.send({
        success: 'cors_post called'
    });
};