var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var products = [];
    products.push({
        id: 1,
        name: 'iPhone 7',
        price: 600,
        discount: 5,
        description: 'text ...'
    });

    products.push({
        id: 2,
        name: 'iPhone 7 Plus',
        price: 700,
        discount: 0,
        description: 'text ...'
    });

    var model = {
        data: products
    };

    var view = 'product';
    res.render(view, model);
});


module.exports = router;
