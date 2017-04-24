var express = require('express');
var router = express.Router();
var db = require('../../helpers/MongoDbHelper');

router.get('/', function (req, res, next) {
    db.findDocuments({}, 'products', function (result) {
        var view = 'admin/product/index';
        res.render(view, {model: result});
    });
});

router.get('/create', function (req, res, next) {
    var view = 'admin/product/create';
    res.render(view, {});
});

router.post('/create', function (req, res, next) {
    var data = req.body;
    db.insertDocument(data, 'products', function (result) {
        var url = '/admin/product';
        res.redirect(url);
    });
});

router.get('/edit/:id', function (req, res, next) {
    var id = req.params.id;
    db.findDocument(id, 'products', function (result) {
        var view = 'admin/product/edit';
        res.render(view, {model: result});
    });
});

router.post('/edit/:id', function (req, res, next) {
    var id = req.params.id;
    var data = req.body;
    db.updateDocument(id, data, 'products', function (result) {
        var url = '/admin/product';
        res.redirect(url);
    });
});
module.exports = router;
