var express = require('express');
var router = express.Router();
var demo = require('../../demo.js');
/* GET home page. */
router.get('/', function (req, res, next) {

    var model = {
        data: demo.products()
    };
    var view = 'admin/product/index';
    res.render(view, model);
});


router.get('/create', function (req, res, next) {
    var view = 'admin/product/create';
    res.render(view, {});
});

router.post('/create', function (req, res, next) {
    console.log(req.body);
    var model = {
        data: demo.products()
    };
    var view = 'admin/product/index';
    res.render(view, model);
});

module.exports = router;
