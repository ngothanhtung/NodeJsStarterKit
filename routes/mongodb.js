var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

// TEST: INSERT
router.get('/insert', function (req, res, next) {
    res.render('insert');
});

router.post('/insert', function (req, res, next) {
    var data = req.body;
    var collectionName = 'products';
    db.insertDocument(data, collectionName, function (result) {
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
    var categoryName = req.query.category;
    db.findDocuments({category: categoryName}, 'products', function (result) {
        res.json(result);
    });
});

module.exports = router;