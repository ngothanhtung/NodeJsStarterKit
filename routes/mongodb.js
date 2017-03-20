var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

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
    var mongodb_url = 'mongodb://188.166.218.3:27017/OnlineShop';
    MongoClient.connect(mongodb_url, function (err, db) {
        if (err) console.log(err);
        else {

            findDocuments(db, function (result) {
                var dataModel = {
                    data: result
                };
                db.close();
                res.render('index', dataModel);
            });
        }
    });

    // var dataModel = {
    //     data: products
    // };
    // res.render('index', dataModel);

});

var findDocuments = function (db, callback) {
    var collection = db.collection('products');
    collection.find().toArray(function (err, items) {
        return callback(items);
    });
};

module.exports = router;
