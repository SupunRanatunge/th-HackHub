const express = require("express");
const router = express.Router();
const config = require("./../config/database");

const Team = require("./../models/team");

router.post('/createTeam', (req, res, next) => {
    let newTeam = new Team({

        teamName: req.body.teamName,
        members: req.body.members

    });
    Team.createTeam(newTeam, (err, team) => {

        if (err) {
            res.json({success: false, msg: "failed to create the Team"})
        } else {
            res.json({success: true, msg: "new Team is created" + team})
        }
    });
});

router.get('/', (req, res, next) => {
    Team.find({}, function (err, teams) {
        if (err) {
            console.log(err)
        } else {
            res.send(teams);
        }
    });
});

router.delete('/removeTeam', (req, res, next) => {

    const teamName = req.body.teamName;
    Team.findOne({teamName: teamName}, (err, teamObj) => {
        if (err) {
            console.log("Error has occurred")
        } else {
            if (!teamObj) {
                console.log("Team in that name is not found")
            } else {

                teamObj.remove(function (err, removedObj) {
                    if (err) {
                        console.log("Team could not be removed" + err);
                    } else {
                        console.log(removedObj);

                    }
                })
            }
        }
    })
});


module.exports = router;