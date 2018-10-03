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
    request('http://node-cors-server.herokuapp.com/simple-cors', function(error, response, body){
        let obj = { 
            "res": JSON.parse(response.body), 
            "err": JSON.parse(error)
        };
        res.send(obj);
    });
};

exports.cors_get_nocors = function (req, res) {
    request('http://node-cors-server.herokuapp.com/no-cors', function(error, response, body){
        let obj = { 
            "res": JSON.parse(response.body), 
            "err": JSON.parse(error)
        };
        res.send(obj);
    });
};


exports.cors_post = function (req, res) {
    res.send({
        success: 'cors_post called'
    });
};