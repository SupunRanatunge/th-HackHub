const express = require("express");
const router = express.Router();
const config = require("./../config/database");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Hackathon = require("./../models/hackathon");

router.post('/createHackathon', (req, res, next) => {
    let newHackathon = new Hackathon({

        name: req.body.name,
        host: req.body.host,
        startDate: req.body.startDate,
        startTime: req.body.startTime,
        closeDate: req.body.closeDate,
        place: req.body.place,
        price: req.body.price,
        numbOfMems: req.body.numbOfMems,
        regLink: req.body.regLink,
        specialNotes: req.body.specialNotes,
        news: Array

    });
    Hackathon.createHackathon(newHackathon, (err, hackathon) => {

        if (err) {
            res.json({success: false, msg: "failed to create Hackathon"})
        } else {

            res.json({success: true, msg: "new Hackathon created" + hackathon})
        }
    });

});
router.delete('/deleteHackathon', (req, res, next) => {

    const name = req.body.name;
    Hackathon.findOne({name: name}, (err, hackObj) => {
        if (err) {
            console.log("Error has occurred")
        } else {
            if (!hackObj) {
                console.log("Hackathon in that name is not found")
            } else {

                hackObj.remove(function (err, removedObj) {
                    if (err) {
                        console.log("Hackathon could not be " + err);
                    } else {
                        console.log(removedObj);

                    }
                })
            }
        }
    })
});

router.put('/updateHackathon', (req, res, next) => {
    const name = req.body.name;
    Hackathon.findOne({name: name}, (err, hackObj) => {
        if (err) {
            console.log("Error has occurred")
        } else {
            if (!hackObj) {
                console.log("Hackathon in that name is not found")
            } else {
                if (req.body.host) {
                    hackObj.host = req.body.host;
                }
                if (req.body.startDate) {
                    hackObj.startDate = req.body.startDate;
                }
                if (req.body.startTime) {
                    hackObj.startTime = req.body.startTime;
                }
                if (req.body.closeDate) {
                    hackObj.closeDate = req.body.closeDate;
                }
                if (req.body.place) {
                    hackObj.place = req.body.place;
                }
                if (req.body.price) {
                    hackObj.place = req.body.place;
                }
                if (req.body.numbOfMems) {
                    hackObj.numbOfMems = req.body.numbOfMems;
                }
                if (req.body.regLink) {
                    hackObj.regLink = req.body.regLink;
                }
                if (req.body.specialNotes) {
                    hackObj.specialNotes = req.body.specialNotes;
                }
                hackObj.save(function (err, updatedObj) {
                    if (err) {
                        console.log("Hackathon could not be updated" + err);
                    } else {
                        console.log(updatedObj);
                    }
                })
            }
        }
    })
});

router.get('/', (req, res, next) => {
    Hackathon.find({}, function (err, hackathons) {
        if (err) {
            console.log(err)
        } else {
            res.send(hackathons);
        }
    });


});

router.put('/addNews', (req, res, next) => {
    const name = req.body.name;
    console.log(name);
    var news1 = {
        date: new Date(),
        news: req.body.news.news
    };

    console.log(req.body.news.news);
    Hackathon.findOneAndUpdate({name: name},
        {
            $push:
                {
                    news: news1
                }},
        {upsert : true },
        function(err, data){
            if(err) {
                res.json(err)
            }else{
                res.send(data)
            }

        });
});

module.exports = router;