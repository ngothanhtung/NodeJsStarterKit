var express = require('express');
var router = express.Router();

/* GET home page. */
var products = [{
    id: 1,
    name: 'iphone 7',
    price: 900,
    imageUrl: 'http://cdn.shopify.com/s/files/1/0742/5113/products/black_black_aa9cea5f-8054-4a54-b594-c1066ef371a9_grande.png?v=1473979599',
}, {
    id: 2,
    name: 'iphone 7 plus',
    price: 980,
    imageUrl: 'http://cdn.shopify.com/s/files/1/0742/5113/products/black_black_aa9cea5f-8054-4a54-b594-c1066ef371a9_grande.png?v=1473979599',
}, {
    id: 3,
    name: 'iphone 7 plus',
    price: 980,
    imageUrl: 'http://cdn.shopify.com/s/files/1/0742/5113/products/black_black_aa9cea5f-8054-4a54-b594-c1066ef371a9_grande.png?v=1473979599',
}, {
    id: 4,
    name: 'iphone 7 plus',
    price: 980,
    imageUrl: 'http://cdn.shopify.com/s/files/1/0742/5113/products/black_black_aa9cea5f-8054-4a54-b594-c1066ef371a9_grande.png?v=1473979599',
}, {
    id: 5,
    name: 'iphone 7 plus',
    price: 980,
    imageUrl: 'http://cdn.shopify.com/s/files/1/0742/5113/products/black_black_aa9cea5f-8054-4a54-b594-c1066ef371a9_grande.png?v=1473979599',
}, {
    id: 6,
    name: 'iphone 7 plus',
    price: 980,
    imageUrl: 'http://cdn.shopify.com/s/files/1/0742/5113/products/black_black_aa9cea5f-8054-4a54-b594-c1066ef371a9_grande.png?v=1473979599',
}];

router.get('/', function (req, res, next) {
    var dataModel = {
        data: products
    };
    res.render('index', dataModel);
});

router.get('/site', function (req, res, next) {
    var dataModel = {
        data: products
    };
    res.render('site', dataModel);
});

module.exports = router;
