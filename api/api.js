var express = require('express');
var router = express.Router();

var base_controller = require('../base/baseController');
var login_controller = require('../login/loginController');
var xss_controller = require('../xss/xssController');
var cors_controller = require('../cors/corsController');

router.get('/', base_controller.index);

router.get('/login', login_controller.login_get);

router.post('/login', login_controller.login_post);

router.get('/xss', xss_controller.xss_get);

router.get('/xss/blogpost/:id', xss_controller.xss_get_id);

router.post('/xss', xss_controller.xss_post);

router.get('/cors', cors_controller.cors_get);

router.post('/cors', cors_controller.cors_post);

module.exports = router;