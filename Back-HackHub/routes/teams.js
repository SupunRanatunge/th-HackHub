const express = require("express");
const router = express.Router();
const config = require("./../config/database");

const Team = require("./../models/team");

router.post('/createTeam', (req, res, next) => {
    let newTeam = new Team({

        teamName: req.body.teamName,
        members: []


    });
    Team.createTeam(newEvent, (err, team) =>{

        if(err) {
            res.json({success: false, msg: "failed to create the Team"})
        }else{
            res.json({success: true, msg: "new Team is created"+ team})
        }
    });
}