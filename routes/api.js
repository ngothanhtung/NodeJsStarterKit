var express = require('express');
var router = express.Router();

router.get('/getsongs', function (req, res, next) {

    var json = [
        {
            "id": 1,
            "imgSrc": "images/1.jpg",
            "name": "Love Me Too (Single)",
            "artist": "Đông Nhi",
            "mp3Url": "http://zmp3-mp3-s1.zmp3-bdhcm-2.za.zdn.vn/b23effba10fef9a0a0ef/4184940879316037681?key=pwiwMT1DPOcDUleDnj98QA&expires=1488527616"
        },
        {
            "id": 2,
            "imgSrc": "images/2.jpg",
            "name": "Nơi này có Anh",
            "artist": "Sơn Tùng MTP",
            "mp3Url": "http://zmp3-mp3-s1.zmp3-vtnhcm-2.za.zdn.vn/d41230d1df9536cb6f84/1181817601640857205?key=lEpi_jU_jraMx7j0RLUdrg&expires=1488530405"
        },

    ];

// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    res.send(json);
});
module.exports = router;