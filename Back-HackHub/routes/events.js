const express = require("express");
const router = express.Router();
const config = require("./../config/database");

const Event = require("./../models/event");

router.post('/createEvent', (req, res, next) => {
    let newEvent = new Event({

        name: req.body.name,
        host: req.body.host,
        Date: req.body.Date,
        Time: req.body.Time,
        place: req.body.place,
        specialNotes: req.body.specialNotes

    });
    Event.createEvent(newEvent, (err, event) =>{

        if(err) {
            res.json({success: false, msg: "failed to create the Event"})
        }else{
            res.json({success: true, msg: "new Event created"+ event})
        }
    });

});
router.delete('/deleteEvent', (req, res, next) => {

    const name = req.body.name;
    Event.deleteEvent(name, (err, event) => {
        if(err) {
            res.json({success: false, msg: "failed to delete the Event"})
        }else{

            res.json({success: true, msg: "Event was deleted"+ event})
        }
    })

});
router.put('/updateEvent', (req, res, next) =>{
    const name = req.body.name;
    Event.findOne({name: name}, (err, eventObj) =>{
        if(err){
            res.json({msg: "Error has occurred"})
        }else {
            if (!eventObj) {
                res.json({msg: "Event in that name is not found"})
            } else {
                if (req.body.host) {
                    eventObj.host = req.body.host;
                }
                if (req.body.startDate) {
                    eventObj.startDate = req.body.startDate;
                }
                if (req.body.closeDate) {
                    eventObj.closeDate = req.body.closeDate;
                }
                if (req.body.place) {
                    eventObj.place = req.body.place;
                }
                if (req.body.specialNotes) {
                    eventObj.specialNotes = req.body.specialNotes;
                }
                eventObj.save(function(err, updatedObj){
                    if(err){
                        res.json({msg: "Event could not be updated"})
                    }else{
                        res.json(updatedObj)
                    }
                })
            }
        }
    })
});
module.exports = router;