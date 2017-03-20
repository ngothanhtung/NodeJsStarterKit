var express = require('express');
var router = express.Router();

<<<<<<< HEAD
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
=======
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/OnlineMusic';
/* GET home page. */
router.get('/', function (req, res, next) {

// Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        removeDocument(db, function () {
            db.close();
        });
    });

    res.send('ok');
});

var insertDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a: 1}, {a: 2}, {a: 3}
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
};


var updateDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({a: 2}
        , {$set: {b: 1}}, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
};

var removeDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteOne({a: 3}, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
};

module.exports = router;
>>>>>>> origin/master
