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
       console.log(newTeam.members);


});
// router.get('/', (req, res, next) => {
//     const name = req.options.body.hackathonName;
//     console.log(name + " inside teams");
//     Hackathon.findOne({name: name}, function (err, hackathon) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send(hackathon.teams);
//             console.log(hackathon.name)
//         }
//     });
// });
// router.get('/', (req, res, next) => {
//     Hackathon.find({}, function (err, hackathons) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send(hackathons);
//         }
//     });
// // });
// router.get('/', (req, res, next) => {
//     Hackathon.findOne({name: req.body.name}, function (err, hackathon) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send(hackathon.teams);
//         }
//     });
//
//
// });


    router.delete('/removeTeam', (req, res, next) => {

        const teamName = req.body.teamName;
        const name = req.body.hackathonName;
        console.log(name);
        Hackathon.findOneAndUpdate({name: name}, {$pull: {teams: teamName}}, function (err, data) {
            if (err) {
                return res.status(500).json({'error': 'error in deleting address'});
            }

            res.json(data);

            // }
        })
    });


router.put('/addMember', (req, res, next) => {
    const hackathonName = req.body.hackathonName;
    const teamName = req.body.teamName;
    const memberName = req.body.member;

    Hackathon.findOne({name: hackathonName}, (err, hackObj) => {
            if (err) {
                console.log("Error has occurred")
            } else {
                if (!hackObj) {
                    console.log("Hackathon in that name is not found")
                } else {
                    if (memberName) {
                        for (i=0;i<hackObj.teams.length;i++){
                            if (hackObj.teams[i].teamName == teamName){

                                console.log('dfsdjfjbg')
                                console.log(hackObj.teams[i].members)
                                hackObj.teams[i].members.push({name:memberName})
                                hackObj.teams[i].members+=(memberName)
                                console.log(memberName)
                                console.log(hackObj.teams[i].teamName)
                            }
                                console.log('ddddddddddddddddd')

                            }

                    }
                }
    }
    })


});


module.exports = router;