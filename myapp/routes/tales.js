var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET tales page. */
router.get('/', function(req, res, next) {
    var textJson;
    fs.readFile('1.json', function(err, data){
        textJson = data.toString();
        textJson =JSON.parse(textJson);
        var t = req.query.t;
        console.log(t);
        if (t) {
            var title, src, text;
            textJson.map(item => {
                if(+item.id == +t) {
                    title = item.title;
                    img = item.img;
                    fl = item.fl;
                    text = item.text;

                    res.render('tales', {title: title, src: src, img: img, fl: fl, text: text});
                }
            });
        } else {
            res.render('tales', {data: textJson});
        }
    });
});
module.exports = router;
