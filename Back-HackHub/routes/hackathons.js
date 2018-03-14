const express = require("express");
const router = express.Router();
const config = require("./../config/database");

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
    Hackathon.deleteHackathon(name, (err, hackathon) => {
        if(err) {
            res.json({success: false, msg: "failed to delete the Hackathon"})
        }else{

            res.json({success: true, msg: "Hackathon was deleted"+ hackathon})
        }
    })

});
router.put('/updateHackathon', (req, res, next) =>{
    const name = req.body.name;
    Hackathon.findOne({name: name}, (err, hackObj) =>{
        if(err){
            res.json({msg: "Error has occurred"})
        }else {
            if (!hackObj) {
                res.json({msg: "Hackathon in that name is not found"})
            } else {
                if (req.body.host) {
                    hackObj.host = req.body.host;
                }
                if (req.body.startDate) {
                    hackObj.startDate = req.body.startDate;
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
                if (req.body.specialNotes) {
                    hackObj.specialNotes = req.body.specialNotes;
                }
               hackObj.save(function(err, updatedObj){
                   if(err){
                       res.json({msg: "Hackathon could not be updated"})
                   }else{
                       res.json(updatedObj)
                   }
               })
            }
        }
    })
});
module.exports = router;