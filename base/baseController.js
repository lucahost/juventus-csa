const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.index = function(req, res) {
  res.render('index', { title: 'Juventus Demos', message: 'Diverse Code Projekte und Demos für die Schule' });
};
