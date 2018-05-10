const express = require("express");
const router = express.Router();
const config = require("./../config/database");

const New = require("./../models/new");

router.post('/addNews', (req, res, next) => {
    let newNews = new New({

        topic: req.body.topic,
        content: req.body.content

    });
    New.addNews(newNews, (err, news) => {

        if (err) {
            res.json({success: false, msg: "failed to add News"})
        } else {

            res.json({success: true, msg: "New News added" + news})
        }
    });

});

router.get('/', (req, res, next) => {
    New.find({}, function (err, news) {
        if (err) {
            console.log(err)
        } else {
            res.send(news);
        }
    });


});
module.exports = router;