var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var model = {
        name: "Iphone",
        price: 800,
        discount: 0
    };
    var type = req.query.type;
    var viewname = "product";
    if (type == 1) {
        viewname = "promotion";
    }
    res.render(viewname, model);
});


module.exports = router;
