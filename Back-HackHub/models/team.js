const mongoose = require("mongoose");
const config = require("../config/database");

const teamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true

    },
    members: {
        type: ArrayList,
        required: true
    }
};
const Team = module.exports = mongoose.model('Team', teamSchema);