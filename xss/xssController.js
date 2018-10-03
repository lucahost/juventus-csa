const {
    body,
    validationResult
} = require('express-validator/check');
const {
    sanitizeBody
} = require('express-validator/filter');
const db = require('../db/dbconnection');

exports.xss_get = function (req, res) {
    db.query("SELECT * FROM blog", (function (err, rows, fields) {
        if (err) {
            res.json(err);
        } else {
            res.render('xss', {
                "bloglist": rows
            });
            //res.send(rows[6].creator);
        }
    }));
};

exports.xss_get_id = function (req, res) {
    db.query("SELECT * FROM blog WHERE ID=" + req.params.id, (function (err, rows, fields) {
        if (err) {
            res.json(err);
        } else {
            res.send(rows[0].content);
        }
    }));
};

exports.xss_post = function (req, res) {
    let requestBody = req.body;
    req.session.username = requestBody.username;
    db.query("INSERT INTO blog SET ?", requestBody, (function (err, rows, fields) {
        db.query("SELECT * FROM blog", (function (err, rows, fields) {
            if (err) {
                res.json(err);
            } else {
                res.render('xss', {
                    "bloglist": rows
                });
            }
        }));
    }));
    res.set('X-XSS-Protection', 0);
};