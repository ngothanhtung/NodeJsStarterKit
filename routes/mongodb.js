var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

// TEST: INSERT
router.get('/insert', function (req, res, next) {
    var product = {
        name: 'iPhone 7 Plus 128GB',
        price: 900,
        discount: 0
    };
    db.insertDocument(product, 'products', function (result) {
        res.json(result);
    });
});

// TEST: UPDATE
router.get('/update', function (req, res, next) {
    var id = '58ed0329dc0d3e5eba5f5540';
    var data = {
        discount: 10
    };
    db.updateDocument(id, data, 'products', function (result) {
        res.json(result);
    });
});

// TEST: DELETE
router.get('/delete', function (req, res, next) {
    var id = '58ed0329dc0d3e5eba5f5540';

    db.removeDocument(id, 'products', function (result) {
        res.json(result);
    });
});

// TEST: FIND ONE
router.get('/getOne', function (req, res, next) {
    var id = '58ed0329dc0d3e5eba5f5540';

    db.findDocument(id, 'products', function (result) {
        res.json(result);
    });
});

// TEST: FIND MANY
router.get('/getMany', function (req, res, next) {
    db.findDocuments({}, 'products', function (result) {
        res.json(result);
    });
});

module.exports = router;