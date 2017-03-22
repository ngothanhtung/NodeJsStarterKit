var express = require('express');
var router = express.Router();
var songs = [{
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
        "artist": "Sơn Tùng MT",
        "mp3Url": "http://zmp3-mp3-s1.zmp3-vtnhcm-2.za.zdn.vn/d41230d1df9536cb6f84/1181817601640857205?key=lEpi_jU_jraMx7j0RLUdrg&expires=1488530405"
    },
    {
        "id": 3,
        "imgSrc": "images/3.jpg",
        "name": "Tâm tư giữ riêng em",
        "artist": "Liz (LIME)",
        "mp3Url": "http://zmp3-mp3-s1.zmp3-vtnhcm-1.za.zdn.vn/477082296d6d8433dd7c/159940778632602739?key=82-bCGnVBEUEZFotO7hCkg&expires=1488527906"
    },
    {
        "id": 4,
        "imgSrc": "images/4.jpg",
        "name": "Để cho em khóc",
        "artist": "Vy Oanh",
        "mp3Url": "http://zmp3-mp3-s1.zmp3-vtnhcm-1.za.zdn.vn/04012077cf33266d7f22/3177598637209028991?key=Bisoi0i5yH8le6z98FpbgA&expires=1488528038"
    },
    {
        "id": 5,
        "imgSrc": "images/5.jpg",
        "name": "Muốn yêu ai đó cả cuộc đời",
        "artist": "Hoàng Yến Chibi",
        "mp3Url": ""
    },
    {
        "id": 6,
        "imgSrc": "images/6.jpg",
        "name": "Nhạc Hoa lời Việt",
        "artist": "Nhiều ca sĩ",
        "mp3Url": ""
    },
    {
        "id": 7,
        "imgSrc": "images/7.jpg",
        "name": "Một lần sau cuối",
        "artist": "Nguyễn Kiều Anh",
        "mp3Url": ""
    },
    {
        "id": 8,
        "imgSrc": "images/8.jpg",
        "name": "Nhạc Hot US-UK",
        "artist": "Nhiều ca sĩ",
        "mp3Url": ""
    },
    {
        "id": 9,
        "imgSrc": "images/9.jpg",
        "name": "Shape of You",
        "artist": "Ed Sheeran",
        "mp3Url": ""
    },
    {
        "id": 10,
        "imgSrc": "images/10.jpg",
        "name": "K.A.R.D Project Vol.2",
        "artist": "K.A.R.D",
        "mp3Url": ""
    },
    {
        "id": 11,
        "imgSrc": "images/11.jpg",
        "name": "Tình ca năm 2000",
        "artist": "Đan Trường",
        "mp3Url": ""
    },
    {
        "id": 12,
        "imgSrc": "images/12.jpg",
        "name": "Old Style Love Songs",
        "artist": "Nhiều ca ",
        "mp3Url": ""
    }];


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('song');
});

router.get('/songdetail', function (req, res, next) {
    var id = req.query.id;
    console.log('Song ID:', id);
    res.render('songdetail');
});

router.get('/getjson', function (req, res, next) {
    res.json(songs);
});


module.exports = router;
