const mongoose = require("mongoose");
const config = require("../config/database");

const hackathonSchema = mongoose.Schema({
    name: {
        type: String,

    },
    host: {
        type: String,

    },
    startDate: {
        type: String,

    },
    startTime: {
        type: String,

    },
    closeDate: {
        type: String,

    },
    place: {
        type: String,

    },
    price: {
        type: String,

    },

    numbOfMems: {
        type: String,

    },
    regLink: {
        type: String,

    },
    specialNotes: {
        type: String
    },
    teams: {
        type: Array
    },
    news: {
        type: Array
    }

});
const Hackathon = module.exports = mongoose.model('Hackathon', hackathonSchema);

module.exports.createHackathon = function(newHackathon, callback) {
    if (Hackathon.findOne({name: newHackathon.name}, (err, hackObj) => {
            if (err) {
                console.log("Error occurred")
            } else {
                if (!hackObj) {
                    newHackathon.save(callback)
                } else {
                    console.log("Hackathon name is already in use")
                }
            }
        })
    );
};













