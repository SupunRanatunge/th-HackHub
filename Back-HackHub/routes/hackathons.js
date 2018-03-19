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
        closeDate: req.body.closeDate,
        place: req.body.place,
        price: req.body.price,
        numbOfMems: req.body.numbOfMems,
        specialNotes: req.body.specialNotes

    });
    Hackathon.createHackathon(newHackathon, (err, hackathon) =>{

        if(err) {
            res.json({success: false, msg: "failed to create Hackathon"})
        }else{

            res.json({success: true, msg: "new Hackathon created"+ hackathon})
        }
    });

});
router.delete('/deleteHackathon', (req, res, next) => {

    const name = req.body.name;
    Hackathon.findOne({name: name}, (err, hackObj) =>{
        if(err){
            console.log("Error has occurred")
        }else {
            if (!hackObj) {
                console.log("Hackathon in that name is not found")
            } else {

                hackObj.remove(function(err, updatedObj){
                    if(err){
                        console.log("Hackathon could not be "+ err);
                    }else{
                        console.log(updatedObj);
                        
                    }
                    })
                }
            }
        })


    // const name = req.body.name;
    // console.log('from routes hackathons '+name);
    // Hackathon.deleteHackathon(name, (err, hackathon) => {
    //     if(err) {
    //         console.log("failed to delete the Hackathon");
    //     }else{
    //         console.log("Hackathon was deleted "+ hackathon.name);
    //     }
    // })

});
router.put('/updateHackathon',  (req, res, next) =>{
    const name = req.body.name;
    Hackathon.findOne({name: name}, (err, hackObj) =>{
        if(err){
            console.log("Error has occurred")
        }else {
            if (!hackObj) {
                console.log("Hackathon in that name is not found")
            } else {
                if (req.body.host) {
                    hackObj.host = req.body.host;
                }
                if (req.body.staDate) {
                    hackObj.staDate = req.body.staDate;
                }
                if (req.body.cloDate) {
                    hackObj.cloDate = req.body.cloDate;
                }
                if (req.body.place) {
                    hackObj.place = req.body.place;
                }
                if (req.body.price) {
                    hackObj.place = req.body.place;
                }
                if (req.body.numOfMems) {
                    hackObj.numOfMems = req.body.numOfMems;
                }
                if (req.body.spNotes) {
                    hackObj.spNotes = req.body.spNotes;
                }
               hackObj.save(function(err, updatedObj){
                   if(err){
                       console.log("Hackathon could not be updated"+ err);
                   }else{
                       console.log(updatedObj);
                   }
               })
            }
        }
    })
});

// router.get('/hackathons', (req, res, next) =>{
//     // console.log("djhfsdhfjdhfdhfasgvfhag");
//     // console.log("req - aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+req);
//     // console.log("res-bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"+res);
//     // console.log("res.json-ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"+res.json);
//     Hackathon.getHackathon(req,res,next)
//         res.json({})
//
//
//
// });
module.exports = router;