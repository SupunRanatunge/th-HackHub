const express = require("express");
const router = express.Router();
const config = require("./../config/database");

const Hackathon = require("./../models/hackathon");
const Team = require("./../models/team");

router.put('/createTeam', (req, res, next) => {
    const name = req.body.hackathonName;
    let newTeam = new Team({
        teamName: req.body.team.teamName,
        members: req.body.team.members
    });
    console.log(newTeam.teamName);
    Hackathon.findOneAndUpdate({name: name},
        {$push :{teams: newTeam}},

        function(err, data){
            if(err) {
                res.json(err)
            }else{
                res.send(data)
            }

        });
    // Hackathon.teams.push(newTeam)
    // Hackathon.save(done)
    // Hackathon.update(
    //     { name: name },
    //     { $push: { teams: newTeam } },
    //
    // );
    // Hackathon.findOne({name: name}, (err, hackObj) => {
    //     console.log(name);
    //     console.log(newTeam.teamName);
    //     console.log(newTeam.members);
    //     if (err) {
    //         console.log("Error has occurred "+ err)
    //     } else {
    //         if (!hackObj) {
    //             console.log("Hackthon in that name is not found")
    //         } else {
    //             hackObj.teams.add(newTeam)
    //
    //         }
    //     }
    // })

    // Team.createTeam(newTeam, (err, team) => {
    //
    //     if (err) {
    //         res.json({success: false, msg: "failed to create the Team"})
    //     } else {
    //         res.json({success: true, msg: "new Team is created" + team})
    //     }
    // });
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
    const name = req.body.hackathonName;
    console.log(name);
    Hackathon.findOneAndUpdate({name: name}, {$pull: {teams: teamName}}, function(err, data){
        if(err) {
            return res.status(500).json({'error' : 'error in deleting address'});
        }

        res.json(data);
    // Hackathon.findOne({name: name}, (err, hackObj) => {
    //     if (err) {
    //         console.log("Error has occurred"+ err)
    //     } else {
    //         if (!hackObj) {
    //             console.log("Hackathon in that name is not found")
    //         } else {
    //             console.log(hackObj)
    //             console.log(hackObj.teams.update({teamName: teamName}))
    //             console.log(hackObj)
                // hackObj.teams.teamName.remove(function (err, removedObj) {
                //     if (err) {
                //         console.log("Team could not be removed" + err);
                //     } else {
                //         console.log(removedObj);
                //
                //     }
                // })
        //     }
        // }
    })
});

router.put('/addMember', (req, res, next) => {
    const teamName = req.body.teamName;
    const memberName = req.body.member;
    Team.findOne({teamName: teamName}, (err, teamObj) => {
            if (err) {
                console.log("Error has occurred")
            } else {
                if (!teamObj) {
                    console.log("Team in that name is not found")
                } else {
                    if (memberName) {
                        teamObj.members.add(memberName)
                    }
                }
            }
        })
});


module.exports = router;