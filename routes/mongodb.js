var express = require('express');
var router = express.Router();
// 1. Khai bao thu vien MONGODB
var MongoClient = require('mongodb').MongoClient;


// 2. Connection URL
var url = 'mongodb://localhost:27017/TestDB';

// 3. INSERT
var insertDocument = function (db, data, callback) {
    // Get the documents collection
    var collection = db.collection('products');
    // Insert some documents
    collection.insertOne(data, function (err, result) {
        callback(result);
    });
};
// 4. FIND (GET ALL)
var findDocuments = function (db, condition, callback) {
    // Get the documents collection
    var collection = db.collection('products');
    // Find some documents
    collection.find(condition).toArray(function (err, result) {
        callback(result);
    });
};


var updateDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({a: 2}
        , {$set: {b: 1}}, function (err, result) {
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
};

var removeDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteMany({discount: '0'}, function (err, result) {
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
};


/* GET home page. */

router.get('/create', function (req, res, next) {
    res.render('createmongo');
});

router.post('/create', function (req, res, next) {

    // 3.1 TEST INSERT
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
        console.log("Connected successfully to server");
        var product = req.body;
        insertDocument(db, product, function (result) {
            console.log(result);
            db.close();
        });
    });

    res.render('createmongo');
});

router.get('/getAll', function (req, res, next) {
    // 4.1 TEST GET ALL
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
        console.log("Connected successfully to server");
        findDocuments(db, {}, function (result) {
            console.log(result);
            db.close();
            // CHUYEN DATA MODEL SANG CLIENT
            res.render('viewmongo', {data: result});
        });
    });
    //res.send('ok');
});


router.get('/', function (req, res, next) {
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
        console.log("Connected successfully to server");
        db.close();
    });

    res.send('ok');
});


module.exports = router;