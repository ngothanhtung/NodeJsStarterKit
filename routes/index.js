var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var dataModel = {
        data: []
    };
    var view = 'site/index';

    res.render(view, dataModel);
});

module.exports = router;
