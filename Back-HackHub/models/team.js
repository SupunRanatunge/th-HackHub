const mongoose = require("mongoose");
const config = require("../config/database");


const teamSchema = mongoose.Schema({
    teamName: {
        type: String,
    },
    members: {
        type: Array,
    }
});
const Team = module.exports = mongoose.model('Team', teamSchema);

module.exports.createTeam = function(newTeam, callback) {
    if (Team.findOne({teamName: newTeam.teamName}, (err, newTm) => {
            if (err) {
                console.log("Error occurred")
            } else {
                if (!newTm) {
                    newTeam.save(callback)
                } else {
                    console.log("Team name is already in use")
                }
            }
        })
    );
};