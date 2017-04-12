'use strict';
var express = require('express');
var router = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '/Users/softech/WebstormProjects/NodeJsStarterKit/public/uploads/');
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

var upload = multer({storage: storage}).single('photo');

//Showing index.html file on our homepage
router.get('/', function (req, res) {
    res.render('./upload');
});

router.post('/', function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    upload(req, res, function (err) {
        if (err) {
            console.log('Error (file upload)', err);
            res.status(500).send('Error');
        } else {
            console.log(req.file);
            console.log('File was uploaded');

            var filename = '/uploads/' + req.file.filename;
            res.status(200).send(filename);
        }
    });
});

module.exports = router;