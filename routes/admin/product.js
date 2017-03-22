var express = require('express');
var router = express.Router();
var demo = require('../../demo.js');
/* GET home page. */
router.get('/', function (req, res, next) {

    var model = {
        data: demo.products()
    };
    var view = 'admin/product';
    res.render(view, model);
});

module.exports = router;
